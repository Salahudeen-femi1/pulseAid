import React from 'react'
import HeroSection from './Section/HeroSection'
import NavBar from '../Components/navs/NavBar'
import Eligibilty from './Section/Eligibilty'
import About from './Section/About'
import CTA from './Section/CTA'

export default function Home() {
  return (
    <div className='relative'>
        <NavBar />


        <div id='home' className='relative overflow-hidden'>
            <HeroSection />
        </div>
        <div id='about' className='relative overflow-hidden bg-[#FFF8F7]'>
            <About />
        </div>
        <div id='eligibility' className='relative overflow-hidden'>
           <Eligibilty />
        </div>
        <div id='CTA' className='relative overflow-hidden'>
            <CTA />
        </div>
        <div id='testimonials' className='relative overflow-hidden'>
            {/* Add Testimonials component here */}
        </div>
        <div id='contact' className='relative overflow-hidden'>
            {/* Add Contact component here */}
        </div>
      
    </div>
  )
}
