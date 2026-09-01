import { useMutation } from '@tanstack/react-query'
import { resendEmailService } from '../../helper/authService'
import { toast } from 'sonner'
import { MdOutlineEmail } from "react-icons/md";
// import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

export default function ResendEmail() {
    // const [searchParams] = useSearchParams()
    const email = localStorage.getItem('verificationEmail')


    const resendMutation = useMutation({
        mutationFn: resendEmailService,
        onSuccess: async () => {
            toast.success("Verification email sent succesfully")
        },
        onError: (error) => {
            if (axios.isAxiosError(error)) {
                toast.error(
                    error.response?.data?.message || "Something went wrong"
                );

                console.log(error.response?.data);
            } else {
                toast.error("Something went wrong");
            }
        }
    },
    )

    const handleResendMessage = () => {
        if (!email) {
            toast.error("Email not found");
            return;
        }
        resendMutation.mutate({
            email: email
        });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-fadedPrimary px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                   <MdOutlineEmail size={25} className='text-primary' />
                </div>

                <h1 className="text-2xl font-bold text-gray-900">
                    Check your email
                </h1>

                <p className="mt-3 text-sm text-gray-600">
                    We've sent a verification link to your email
                </p>

                <p className="mt-4 text-sm text-gray-500">
                    Click the link in the email to verify your
                    account and continue using Pulse Aid.
                </p>

                {/* Resend */}
                <div className="mt-8">
                    <p className="text-sm text-gray-500">
                        Didn't receive the email?
                    </p>

                    <button
                        onClick={handleResendMessage}
                        disabled={resendMutation.isPending}
                        type="button"
                        className="mt-2 font-semibold text-primary hover:underline"
                    >
                        {
                            resendMutation.isPending ?
                                "sending..." : "Resend verification email"
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}
