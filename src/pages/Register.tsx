import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const Register: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const validationSchema = Yup.object({
        fullname: Yup.string()
            .min(2, 'Full name must be at least 2 characters')
            .required('Full name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        bloodGroup: Yup.string()
            .oneOf(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], 'Invalid blood group')
            .required('Blood group is required'),
    });

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            bloodGroup: '',
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
                        <h2 className="text-lg md:text-2xl font-semibold">Join Pulse Aid</h2>
                        <p className="text-sm md:text-base">Your contribution can save up to three lives.</p>
                    </span>

                    <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-2 w-full max-w-md">

                        <div className="flex flex-col space-y-1">
                            <label htmlFor="fullname" className="font-semibold">Full name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="Enter full name"
                                value={formik.values.fullname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={styles.input}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <span className="text-red-500 pl-3 text-sm">{formik.errors.email}</span>
                            )}
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
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

                            {/* Blood group */}
                            <div>
                                <label htmlFor="bloodGroup" className="font-semibold">Blood group</label>
                                <select
                                    id="bloodGroup"
                                    name="bloodGroup"
                                    value={formik.values.bloodGroup}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={styles.input}
                                >
                                    <option value="">Select blood group</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                </select>
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


                        <div className="flex gap-4 mt-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="userType"
                                    value="donor"
                                    checked={formik.values.userType === 'donor'}
                                    onChange={formik.handleChange}
                                    className="mr-2"
                                />
                                <p className='text-[12px] '>By creating an account, you agree to our <Link to="/terms" className="text-primary font-bold">Terms of Service</Link> and <Link to="/privacy" className="text-primary font-bold">Privacy Policy</Link>.</p>
                            </label>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col space-y-6 mt-4">

                            <button
                                type="submit"
                                disabled={formik.isSubmitting}
                                className="bg-primary text-white font-medium rounded-md h-[45px] cursor-pointer disabled:opacity-70 transition"
                            >
                                {formik.isSubmitting ? 'Creating account...' : 'Create Account'}
                            </button>
                            <Link to="/" className="font-medium flex gap-1 self-end">
                                Already have an account? <span className='text-primary font-bold'>Login</span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
