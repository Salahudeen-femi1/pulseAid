
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

            localStorage.removeItem("verificationEmail");

            navigate("/login");
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
        <div className='relative'>
            <div className='absolute inset-0 bg-black/80 '></div>

            <div className="size-8 mx-auto my-6 border-4 border-t-transparent border-primary animate-spin rounded-full"></div>

        </div>
    )
}
