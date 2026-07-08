import React, { createContext, useCallback, useContext, useEffect } from 'react'
import { toast } from 'sonner';
import api, { setupInterceptors } from '../helper/api';

export interface UserProps {
    id: number;
    name: string;
    email: string;
    phone: string;
    role: string;
}

interface UserProviderProps {
    children: React.ReactNode;
}

interface UserContextType {
    user: UserProps | null;
    token: string | null;
    role: string | null;
    login: (token: string, user: UserProps, role: string) => Promise<void>;
    logout: () => void;
    isLoggedIn: boolean;
    refreshUser: (token: string) => Promise<void>;
    loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default function UserProvider({ children }: UserProviderProps) {

    const [user, setUser] = React.useState<UserProps | null>(null);
    const [loading, setLoading] = React.useState(true);
    const [role, setRole] = React.useState<string | null>(null);
    const [token, setToken] = React.useState<string | null>(null);

    const logout = useCallback(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("role");

        setUser(null);
        setRole(null);
        setToken(null);

        toast.success("Logged out successfully");
        window.location.href = "/login";
    }, []);

    const refreshUser = useCallback(
        async (authToken: string) => {
            if (!authToken) throw new Error("No token");

            try {
                const response = await api.get("/", {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });

                localStorage.setItem("quickMetrics", JSON.stringify(response.data));
            } catch (err: unknown) {
                console.error("Failed to refresh user:", err);
                if (err && typeof err === "object" && "response" in err) {
                    const maybeErr = err as { response?: { status?: number } };
                    if (maybeErr.response?.status === 401) {
                        logout();
                    }
                }
                throw err;
            }
        },
        [logout],
    );

    useEffect(() => {
        const initAuth = async () => {
            setLoading(true);
            const storedToken = localStorage.getItem("token");
            const storedUser = localStorage.getItem("user");
            const storedRole = localStorage.getItem("role");

            if (!storedToken || !storedUser) {
                setLoading(false);
                return;
            }

            try {
                const parsedUser = JSON.parse(storedUser);
                setToken(storedToken);
                setUser(parsedUser);
                setRole(storedRole)

                await refreshUser(storedToken);
            } catch {
                console.warn("Invalid or expired session. Clearing...");
                logout();
            } finally {
                setLoading(false);
            }
        };

        initAuth();
    }, [logout, refreshUser]);

    const login = async (token: string, user: UserProps, role: string) => {
        try {
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("role", role);
            setToken(token);
            setRole(role);
            setUser(user);
            await refreshUser(token);
        } catch (err) {
            console.error("Login failed:", err);
            logout();
            throw err;
        }
    };

    useEffect(() => {
        setupInterceptors(logout);
    }, [logout]);

    const isLoggedIn = !!token;


    return (
        <UserContext.Provider
            value={{
                user,
                token,
                role: role,
                login,
                logout,
                isLoggedIn,
                refreshUser,
                loading,
            }}
        >
            {children}
        </UserContext.Provider>
    )
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
