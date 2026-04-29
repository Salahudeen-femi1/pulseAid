import React from 'react'
import { assets } from '../../assets/assets'
import { BiCalendar } from 'react-icons/bi'

export default function Eligibilty() {
    return (
        <section className="bg-[#f3dfdb] py-16 px-6">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800">
                    How Donation Works
                </h2>
                <p className="text-gray-600 mt-2">
                    Three simple steps to becoming a life-saving donor with PulseAid.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {/* Step 01 */}
                <div className="md:col-span-2 bg-gray-100 rounded-2xl p-6 relative overflow-hidden">
                    <span className="text-xs bg-pink-200 text-pink-700 px-3 py-1 rounded-full">
                        Step 01
                    </span>

                    <h3 className="text-xl font-semibold mt-4">
                        Check Eligibility
                    </h3>

                    <p className="text-gray-600 mt-2 max-w-md">
                        Quickly verify if you're ready to donate. We check age, weight, and general health metrics to ensure your safety.
                    </p>

                    <button className="mt-4 text-red-500 font-medium flex items-center gap-2">
                        Take Eligibility Test →
                    </button>

                    {/* subtle background shape */}
                    <div className="absolute right-0 bottom-0 opacity-20">
                        <img
                            src={assets.icon}
                            alt="Medical Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Step 02 */}
                <div className="bg-secondary text-white rounded-2xl p-6 flex flex-col justify-between">
                    <div>
                        <span className="text-xs bg-white/40 px-3 py-1 rounded-full">
                            Step 02
                        </span>

                        <h3 className="text-xl font-semibold mt-4">
                            Book Appointment
                        </h3>

                        <p className="mt-2 text-sm text-red-100">
                            Choose a time and center that works for you. Our system makes scheduling seamless.
                        </p>
                    </div>

                    <div className="bg-white/40 mt-6 rounded-xl h-20 flex items-center justify-center">
                        <BiCalendar size={30} className='text-white' />
                    </div>
                </div>

                {/* Step 03 */}
                <div className="bg-green-800 text-white rounded-2xl p-6">
                    <span className="text-xs bg-green-600 px-3 py-1 rounded-full">
                        Step 03
                    </span>

                    <h3 className="text-xl font-semibold mt-4">
                        Save a Life
                    </h3>

                    <p className="mt-2 text-sm text-green-100">
                        Visit the center and donate. The whole process takes less than an hour.
                    </p>

                    {/* avatars */}
                    <div className="flex items-center mt-4 -space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-white"></div>
                        <div className="w-8 h-8 bg-gray-500 rounded-full border-2 border-white"></div>
                        <span className="ml-2 text-xs bg-green-600 px-2 py-1 rounded-full">
                            +2k
                        </span>
                    </div>
                </div>

                {/* Step 04 */}
                <div className="md:col-span-2 bg-[#e9cfc9] rounded-2xl p-6 flex items-center gap-6">

                    {/* phone mock */}
                    <div className="w-30 h-32 bg-white rounded-xl shadow flex items-center justify-center">
                        <img
                            src={assets.mobile}
                            alt="Medical Team"
                            className="w-full h-full object-cover rounded-[10px]"
                        />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            Track Impact on Mobile
                        </h3>

                        <p className="text-gray-600 mt-2 text-sm max-w-md">
                            Download our app to get real-time alerts when your blood type is needed nearby and track your donation history.
                        </p>

                        <div className="flex gap-3 mt-3 text-gray-500 text-xl">
                            📲 📲
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
