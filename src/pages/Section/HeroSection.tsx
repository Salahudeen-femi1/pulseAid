import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets';
import { BiDonateBlood } from "react-icons/bi";

export default function HeroSection() {
    return (
        <div className=''>
            <div className='bg-fadedPrimary px-10 grid grid-cols-2 '>
                <div className=' flex flex-col gap-6 justify-center '>
                    <h2 className='text-6xl font-semibold'>
                        Find Blood <span className='text-primary'>Donor</span><br /> Near You
                    </h2>
                    <p className='text-[18px] '>
                        Pulse Aid connect those in need with life-saving blood donors in <br /> real-time. Every drop count in the fight for health and hope
                    </p>

                    <div className='flex gap-3'>
                        <div className='flex gap-3'>
                            <NavLink
                                to={'/register'}
                                className="bg-primary text-white rounded-[10px] flex items-center px-6 py-3"
                            >
                                Become a Donor <BiDonateBlood size={20} className='ms-2 text-white' />
                            </NavLink>
                            <NavLink
                                to={'/register'}
                                className="border border-primary text-black rounded-[10px] flex items-center px-6 py-3"
                            >
                                How it works
                            </NavLink>
                        </div>
                        {/* <div className='bg-white/80 flex items-center justiy-center gap-3 text-black backdrop-blur-lg rounded-[10px] px-4 py-1'>
                            <GrValidate size={25} className='text-green-600' />

                            <span className='flex flex-col'>
                                <span className='font-semibold'>100% Secure</span>
                                <span>Verified MEdical Data</span>
                            </span>
                        </div> */}
                    </div>
                </div>

                <div className="relative h-full flex justify-end items-center p-6">
                    <div
                        className="relative w-[500px] h-[500px] md:w-[500px] md:h-[500px] bg-white overflow-hidden"
                        style={{
                            // This creates the organic "circle cut into the side" look
                            borderRadius: '40% 60% 40% 60% / 35% 30% 70% 65%',
                            clipPath: 'circle(70% at 70% 50%)' // Adjusts the crop to match the screenshot
                        }}
                    >
                        <img
                            src={assets.blooddonation}
                            alt="Medical Team"
                            className="w-full h-full object-cover"
                        />

                        {/* Background Decorative Circles */}
                        <div className="absolute top-10 left-10 w-6 h-6 bg-sky-200 rounded-full opacity-60"></div>
                    </div>

                    {/* Small floating dot outside the main shape */}
                    <div className="absolute bottom-20 right-10 w-20 h-20 border bg-sky-100 rounded-full -z-10"></div>
                </div>
            </div>

        </div>
    )
}
