import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useMutation } from '@tanstack/react-query';
import { registerService } from '../../helper/authService';
import type { UserProps } from '../../Context/userContext';
import { toast } from 'sonner';
import type { RegisterFormValues } from '../../lib/interfaces';

const Register: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const navigate = useNavigate()

    const mutation = useMutation<
        { message?: string; token: string; user?: UserProps; role?: string; }, Error, RegisterFormValues>({
            mutationFn: registerService,
            onSuccess: async (response) => {
                toast.success("Registration successful")
                console.log("login response", response)

                navigate('/EmailVerification')
            },
            onError: (error) => {
                toast.error(error?.response?.data?.message || "Something went wrong")
                console.log('registration error:', error)
            }

        })

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(2, 'First name must be at least 2 characters')
            .required('First name is required'),
        lastName: Yup.string()
            .min(2, 'Last name must be at least 2 characters')
            .required('Last name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        phone: Yup.number().required('Phone number is required'),
        role: Yup.string().oneOf(['donor', "hospital", "admin"], 'Please select a role')
            .required('Please select a role'),
    });

    const formatNigerianPhone = (phone: string) => {
        const cleaned = phone.replace(/\s|-/g, "");

        if (cleaned.startsWith('0')) {
            return `+234${cleaned.slice(1)}`;
        }

        if (cleaned.startsWith('234')) {
            return `+${cleaned}`;
        }

        return cleaned;

    }

    // const validationSchema = () => {
    //     if()
    // }

    const formik = useFormik<RegisterFormValues>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
            role: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            const payload = {
                ...values,
                phone: formatNigerianPhone(values.phone),
                role: values.role.toUpperCase()
            }
            mutation.mutate(payload)
            console.log('Form values:', values);
        }
    });

    const styles = {
        input: `text-black border-outlineBlack bg-fadedPrimary border border-stroke ${formik.touched.email && formik.errors.email
            ? 'border-red-500'
            : 'border-[#FBFCFB3]'
            } placeholder-black rounded-md px-4 h-[50px] border text-sm w-full outline-0`,
    };

    return (
        <div className="flex items-center">
            <div className="w-full bg-white flex flex-col items-center justify-center min-h-screen px-2">
                <div className="w-full flex flex-col items-center justify-center">

                    <div className="flex mt-5 gap-2 items-center mb-3 font-semibold">
                        <span className='rounded-[10px] bg-primary md:hidden px-3 py-2 shadow-lg mb-2 '>
                            <img
                                src={assets.logo}
                                alt="Pulse Aid logo"
                                className=" w-auto h-[30px] object-cover md:hidden"
                            />
                        </span>
                        <h3>Pulse Aid</h3>
                    </div>

                    <span className="text-center mb-4">
                        <h2 className="text-lg md:text-2xl font-semibold">Join Pulse Aid</h2>
                        <p className="text-sm md:text-base">Your contribution can save up to three lives.</p>
                    </span>

                    <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-2 px-6">
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

                            <div className="flex flex-col space-y-1">
                                <label htmlFor="firstName" className="font-semibold">First name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Enter First name"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={styles.input}
                                />
                                {formik.touched.firstName && formik.errors.firstName && (
                                    <span className="text-red-500 pl-3 text-sm">{formik.errors.firstName}</span>
                                )}
                            </div>
                            {/* last name */}
                            <div className="flex flex-col space-y-1">
                                <label htmlFor="lastName" className="font-semibold">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Enter last name"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={styles.input}
                                />
                                {formik.touched.lastName && formik.errors.lastName && (
                                    <span className="text-red-500 pl-3 text-sm">{formik.errors.lastName}</span>
                                )}
                            </div>



                            <div className="flex flex-col space-y-1">
                                <label htmlFor="phone" className="font-semibold">Phone number</label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`${styles.input} appearance-none`}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <span className="text-red-500 pl-3 text-sm">{formik.errors.phone}</span>
                                )}
                            </div>

                            {/* email */}

                            <div className="flex flex-col space-y-1">
                                <label htmlFor="email" className="font-semibold">Email address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter email address"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={styles.input}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <span className="text-red-500 pl-3 text-sm">{formik.errors.email}</span>
                                )}
                            </div>
                        </div>

                        {/* Password */}
                        <div className="relative flex flex-col space-y-1">
                            <label htmlFor="password" className="font-semibold">Password</label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={styles.input}
                            />
                            <span
                                className="absolute right-4 top-11 cursor-pointer text-black"
                                onClick={() => setShowPassword(prev => !prev)}
                            >
                                {showPassword ? <FiEye size={18} /> : <FiEyeOff size={18} />}
                            </span>
                            {formik.touched.password && formik.errors.password && (
                                <span className="text-red-500 pl-3 text-sm">{formik.errors.password}</span>
                            )}
                            <span className="text-xs text-gray-500 pl-3 mt-1">Minimum 8 characters with one specila symbol.</span>
                        </div>

                        <div className="flex flex-col gap-2 mt-2">
                            <label className="font-semibold">
                                Register as
                            </label>

                            <div className="grid grid-cols-3 gap-4">
                                {/* Donor */}
                                <button
                                    type="button"
                                    onClick={() => formik.setFieldValue('role', 'donor')}
                                    className={`h-[50px] rounded-md border font-medium transition ${formik.values.role === 'donor'
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-white text-black border-stroke'
                                        }`}
                                >
                                    Donor
                                </button>

                                {/* Hospital */}
                                <button
                                    type="button"
                                    onClick={() => formik.setFieldValue('role', 'hospital')}
                                    className={`h-[50px] rounded-md border font-medium transition ${formik.values.role === 'hospital'
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-white text-black border-stroke'
                                        }`}
                                >
                                    Hospital
                                </button>

                                {/* Admin */}
                                <button
                                    type="button"
                                    onClick={() => formik.setFieldValue('role', 'admin')}
                                    className={`h-[50px] rounded-md border font-medium transition ${formik.values.role === 'admin'
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-white text-black border-stroke'
                                        }`}
                                >
                                    Admin
                                </button>
                            </div>

                            {formik.touched.role && formik.errors.role && (
                                <span className="text-red-500 text-sm pl-1">
                                    {formik.errors.role}
                                </span>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col space-y-4 mt-3">

                            <button
                                type="submit"
                                disabled={mutation.isPending}
                                className="bg-primary text-white font-medium rounded-md h-[45px] cursor-pointer disabled:opacity-70 transition"
                            >
                                {mutation.isPending ? 'Creating account...' : 'Create Account'}
                            </button>
                            <Link to="/login" className="font-medium flex gap-1 self-end">
                                Already have an account? <span className='text-primary font-bold'>Login</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default Register;
