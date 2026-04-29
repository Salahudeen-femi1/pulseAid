import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

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
        phoneNumber: Yup.number().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        defection: Yup.string().required('Do you have any defection'),
        age: Yup.number().required('Age is required'),
        weight: Yup.number().required('Weight is required'),
        lastDonation: Yup.string().required('Last donation date is required'),
    });

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            bloodGroup: '',
            phoneNumber: '',
            address: '',
            defection: '',
            age: '',
            weight: '',
            lastDonation: '',
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

                            <div className='grid grid-cols-2 lg:grid-cols-2 gap-3'>
                                <div>
                                    <label htmlFor="defection" className="font-semibold">Any defection?</label>
                                    <select
                                        id="defection"
                                        name="defection"
                                        value={formik.values.defection}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={styles.input}
                                    >
                                        <option value="">Select an option</option>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                    {formik.touched.defection && formik.errors.defection && (
                                        <span className="text-red-500 pl-3 text-sm">{formik.errors.defection}</span>
                                    )}
                                </div>

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

                            <div className='grid grid-cols-2 lg:grid-cols-2 gap-3'>
                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="age" className="font-semibold">Age</label>
                                    <input
                                        type="text"
                                        id="age"
                                        name="age"
                                        placeholder="Enter your age"
                                        value={formik.values.age}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={styles.input}
                                    />
                                    {formik.touched.age && formik.errors.age && (
                                        <span className="text-red-500 pl-3 text-sm">{formik.errors.age}</span>
                                    )}
                                </div>
                                <div>
                                    <label htmlFor="search" className='font-semibold text-sm'> Last time you Donated Blood?</label>
                                    <input
                                        type="text"
                                        id='search'
                                        name='lastDonation'
                                        placeholder='Enter date of last donation'
                                        value={formik.values.lastDonation}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={styles.input}
                                    />
                                    {formik.touched.lastDonation && formik.errors.lastDonation && (
                                        <span className="text-red-500 pl-3 text-sm">{formik.errors.lastDonation}</span>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="address" className="font-semibold">Residential Address</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    rows={2}
                                    placeholder="Enter your address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={`${styles.input} resize-none py-2`}
                                />
                                {formik.touched.address && formik.errors.address && (
                                    <span className="text-red-500 pl-3 text-sm">{formik.errors.address}</span>
                                )}
                            </div>
                            <div className='grid grid-cols-2 lg:grid-cols-2 gap-3'>
                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="phoneNumber" className="font-semibold">Phone number</label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Enter your phone number"
                                        value={formik.values.phoneNumber}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={`${styles.input} appearance-none`}
                                    />
                                    {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                        <span className="text-red-500 pl-3 text-sm">{formik.errors.phoneNumber}</span>
                                    )}
                                </div>

                                <div className="flex flex-col space-y-1">
                                    <label htmlFor="weight" className="font-semibold">Weight</label>
                                    <input
                                        type="text"
                                        id="weight"
                                        name="weight"
                                        placeholder="Enter your weight"
                                        value={formik.values.weight}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className={styles.input}
                                    />
                                    {formik.touched.weight && formik.errors.weight && (
                                        <span className="text-red-500 pl-3 text-sm">{formik.errors.weight}</span>
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
                        <div className="flex flex-col space-y-4 mt-3">

                            <button
                                type="submit"
                                disabled={formik.isSubmitting}
                                className="bg-primary text-white font-medium rounded-md h-[45px] cursor-pointer disabled:opacity-70 transition"
                            >
                                {formik.isSubmitting ? 'Creating account...' : 'Create Account'}
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
