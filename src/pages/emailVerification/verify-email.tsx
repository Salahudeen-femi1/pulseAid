
import { useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { verifyEmailService } from '../../helper/authService'
import { toast } from 'sonner'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'

export default function VerifyEmail() {

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const token = searchParams.get('token')

    const mutation = useMutation({
        mutationFn: verifyEmailService,

        onSuccess: (response) => {
            toast.success("Email verified successfully");
            console.log("email response:", response);

            setTimeout(() => {
                navigate("/login");
            }, 2000);
        },

        onError: (error) => {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message || "Something went wrong"
                );

                console.log("Verification error:", error.response?.data);
            } else {
                toast.error("Something went wrong");
            }
        },
    });

    useEffect(() => {
        if (token) {
            mutation.mutate({ token });
        }
    }, [token]);

    return (
        <div className="fixed inset-0 z-50 flex flex-col gap-7 items-center justify-center bg-black/50">
            <div className="size-20 rounded-full border-4 border-primary border-t-transparent animate-spin" />
            <p className="text-lg font-medium text-white">Verifying your email...</p>
        </div>
    )
}
