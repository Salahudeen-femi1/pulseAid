import type { RegisterFormValues } from "../lib/interfaces";
import api from "./api"

export const loginService = async (payload: { email: string; password: string }) => {
    const response = await api.post('/v1/auth/login', payload)
    return response.data.data
}

export const registerService = async (values: RegisterFormValues) => {
    const response = await api.post('/v1/auth/register', values)
    return response.data.data
}

interface VerifyEmailProp {
    token: string;
}

export const verifyEmailService = async (value: VerifyEmailProp) => {
    const response = await api.post('/v1/auth/verify-email', value)
    console.log(response)
    return response.data.data
}

interface resendProp {
    email: string;
}

export const resendEmailService = async (value: resendProp) => {
    const response = await api.post('/v1/auth/resend-verification', value)
    return response.data
}

export const userService = async () => {
    const response = await api.post('/v1/auth/me')
    return response
}

export const deleteUser = async () => {
    const response = await api.delete('/')
    return response
}