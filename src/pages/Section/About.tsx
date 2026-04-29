import React from 'react'

import { HiUsers } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";
import { PiPlusFill } from "react-icons/pi";
import { CiLocationOn, CiSearch } from "react-icons/ci";

export default function About() {
    return (
        <>
            <div className='bg-white flex items-center justify-center gap-6 px-10 h-28 rounded-[10px] border border-stroke m-14 shadow-lg '>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="bloodGroup" className="font-semibold">Blood group</label>
                    <select id="bloodGroup" className='flex items-center gap-1 border border-stroke bg-fadedPrimary px-2 py-3 w-100 outline-0 rounded-[10px]' >
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
                <div className='flex flex-col gap-1'>
                    <label htmlFor="search" className='font-semibold text-sm'>Location</label>
                    <span className='flex items-center gap-1 border border-stroke bg-fadedPrimary rounded-[10px] px-2 py-3 w-100'>
                        <CiLocationOn size={22} className=' text-primary' />
                        <input type="text" id='search' placeholder='Enter City' className=' outline-0 placeholder:text-black ' />
                    </span>
                </div>

                <button className='bg-primary text-white font-semibold w-50 h-13 rounded-md mt-5 flex items-center justify-center gap-2'> 
                    <CiSearch size={20} /> Find Available Donors
                    </button>
            </div>

            <div className='grid grid-cols-3 gap-6 px-10 mb-20'>
                <div className='bg-fadedPrimary border border-stroke flex flex-col items-center justify-center gap-1 rounded-[10px] py-3'>
                    <div className='w-11 h-11 rounded-[10px] flex items-center justify-center bg-white '>
                        <HiUsers className='w-full h-full p-2 text-primary' />
                    </div>
                    <h3 className='font-semibold text-2xl mt-3 text-primary'>10k+</h3>
                    <p className='text-lg font-bold'>Registered Donors</p>
                    <p className='text-center text-gray-700'>Active heros ready to help at a moment's <br /> notice across the region</p>
                </div>

                <div className='bg-fadedPrimary border border-stroke flex flex-col items-center justify-center gap-1 rounded-[10px] py-3'>
                    <div className='w-11 h-11 rounded-[10px] flex items-center justify-center bg-white '>
                        <FaHeart className='w-full h-full p-2 text-green-800' />
                    </div>
                    <h3 className='font-semibold text-2xl mt-3 text-green-800'>25k+</h3>
                    <p className='text-lg font-bold'>Lives Saved</p>
                    <p className='text-center text-gray-700'>Successful donations that have made a <br /> critical difference in emergencies</p>
                </div>

                <div className='bg-fadedPrimary border border-stroke flex flex-col items-center justify-center gap-1 rounded-[10px] py-3'>
                    <div className='w-11 h-11 rounded-[10px] flex items-center justify-center bg-white '>
                        <PiPlusFill className='w-full h-full p-2 text-[#006666]' />
                    </div>
                    <h3 className='font-semibold text-2xl mt-3 text-[#006666]'>50k+</h3>
                    <p className='text-lg font-bold'>Active Centers</p>
                    <p className='text-center text-gray-700'>Strategically located facilities equipped for <br /> safe and easy donations</p>
                </div>

            </div>
        </>
    )
}
