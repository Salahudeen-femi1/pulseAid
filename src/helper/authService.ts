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

export const verifyEmailService = async () => {
    const response = await api.post('/v1/auth/verify-email')
    return response
}

export const resendEmailService = async () => {
    const response = await api.post('/v1/auth/resend-verification')
    return response
}

export const userService = async () => {
    const response = await api.post('/v1/auth/me')
    return response
}