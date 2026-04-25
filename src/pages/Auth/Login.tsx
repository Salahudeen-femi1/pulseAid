import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log('Form values:', values);
        },
    });

    const styles = {
        input: `text-black border-outlineBlack bg-fadedPrimary border border-stroke ${formik.touched.email && formik.errors.email
            ? 'border-red-500'
            : 'border-[#FBFCFB3]'
            } placeholder-black rounded-md px-4 h-[50px] border text-sm w-full outline-0`,
    };

    return (
        <div className="flex items-center">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 bg-white flex flex-col items-center justify-center h-screen px-4">
                <div className="w-full flex flex-col items-center justify-center">

                    <div className="flex flex-col gap-2 items-center mb-5 font-semibold">
                        <span className='rounded-[10px] bg-primary md:hidden px-3 py-2 shadow-lg mb-4'>
                            <img
                                src={assets.logo}
                                alt="Pulse Aid logo"
                                className=" w-auto h-[30px] object-cover md:hidden"
                            />
                        </span>
                        <h3>Pulse Aid</h3>
                    </div>

                    <span className="text-center mb-6">
                        <h2 className="text-lg md:text-xl font-semibold">Login into your Pulse Aid account</h2>
                        <p className="text-sm md:text-base">Enter your credentials to get access</p>
                    </span>

                    <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-2 w-full max-w-md">

                        {/* Email */}
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
                        </div>

                        {/* Forgot password */}
                        <span className="self-end text-primary">
                            <button type="button" className="font-medium text-sm cursor-pointer">
                                Forgot Password?
                            </button>
                        </span>

                        {/* Divider */}
                        <div className="flex items-center w-full">
                            <div className="grow border-t border-gray-300"></div>
                            <span className="mx-2 text-black text-sm">or</span>
                            <div className="grow border-t border-gray-300"></div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col space-y-6 mt-4">
                            <button
                                type="button"
                                className="bg-[#F0F0F0] font-medium rounded-md h-[45px] flex items-center justify-center gap-2 text-black cursor-pointer"
                            >
                                <img src={assets.google} alt="Google" className="h-6 w-auto" />
                                Sign in with Google
                            </button>

                            <button
                                type="submit"
                                disabled={formik.isSubmitting}
                                className="bg-primary text-white font-medium rounded-md h-[45px] cursor-pointer disabled:opacity-70 transition"
                            >
                                {formik.isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                            <Link to="/register" className="font-medium flex gap-1 self-end">
                                New to Pulse Aid? <span className='text-primary font-bold'>Sign up</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>

            {/* Right side image */}
            <div className="w-1/2 h-screen hidden md:flex flex-col gap-5 items-center justify-center bg-primary p-7">

                <div className='rounded-[10px] bg-white/40 px-3 py-2 shadow-lg mb-4 '>
                    <img
                        src={assets.logo}
                        alt="Pulse Aid logo"
                        className="w-auto h-[30px] object-cover"
                    />
                </div>

                <h2 className='text-white font-semibold text-4xl text-center '>Empowering Donors,<br /> Saving Lives.</h2>
                <p className='text-white text-center text-[17px] text-gray-100'>PulseAid connect hero donors to those in urgent needs <br /> making the gift of life simpler and safer than ever before.</p>

                <div className='grid grid-cols-2 gap-3 w-full max-w-md mt-'>
                    <div className='rounded-[10px] bg-white/40 px-5 py-5'>
                        <p className='text-2xl font-bold text-white'>2.4+</p>
                        <p className='text-sm text-gray-100'>Active Donors</p>
                    </div>
                    <div className='rounded-[10px] bg-white/40 px-5 py-5'>
                        <p className='text-2xl font-bold text-white'>150+</p>
                        <p className='text-sm text-gray-100'>Partner Centers</p>
                    </div>
                </div>

                <div className=' max-w-md w-full '>
                    <img src={assets.professionals} alt="Right side image"
                    className='w-full h-50 object-cover rounded-br-[10px] rounded-bl-[10px] '
                     />
                </div>
            </div>
        </div>
    );
};

export default Login;
