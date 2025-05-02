import React from 'react'
import Navbar from '../../Component/Navbar/Navbar'
import Aheaderimage from '../../assets/Aheader.png'
import { Button } from '@mui/material';
import choose from '../../assets/choose.png'

const Aboutus = () => {
    return (
        <div className='z-0 w-full  '>
            <div>
                <img src={Aheaderimage} alt=' ' className='w-[1440px] h-[170px] object-cover ' />
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg text-center mt-[-190px]">
                    We Find The Best For You!!
                </h1>
                <button
                    // onClick={handleBuy}
                    className="absolute top-2 right-2 bg-white text-black  px-3 py-1 text-sm rounded-md shadow-md mt-[70px]"
                >
                    Join As Lawyer
                </button>
            </div>
            <div className=''>
                <h3 className=' text-orange-500 text-center mt-6'>Know everything About us !! </h3>
                <h1 className='text-3xl font-inria serif font-normal text-center mt-6'>Welcome to Advocate</h1>
                <p className='text-center justify-center mt-6'>Find the perfect legal representation for your needs – explore our firm's expertise and discover how we can champion your case.</p>
                <p className='text-center'>   We're dedicated to providing our clients with exceptional legal counsel and unwavering support in navigating life's challenges.
                </p>
            </div>
            <h1 className='font-bold text-center mt-[100px] text-black text-3xl'>Why Choose Us?</h1>
            <div className='flex justify-center mt-20 '>
                <img src={choose} alt='' className='h-[350px] w-[1080px]  ml-[60px] mr-[60px]' />
            </div>
            <div className=' mt-[150px]'>
                <h1 className=' font-DM Serif Display text-5xl font-bold text-center ' >We Help You With Quality Legal Lawyer</h1>
                <p className='text-center mt-[50px]'> Your legal matters deserve the best representation. We connect you with trusted experts in your area of law.</p>
                <div className="flex justify-center mt-16">
                    <button
                        // onClick={handleBuy}
                        className="bg-orange-500 text-white px-3 py-1 w-[180px] h-[40px] text-xl shadow-md"
                    >
                        Get Started
                    </button>
                </div>
            </div>
            <div className='flex justify-between items-center mt-[100px] '>
                <div className='ml-[150px] '>
                    <h1 className='h-[70px] w-[270px] text-2xl font-medium ' style={{color:"#25406D"}}>Our Vision</h1>
                    <p className='text-left h-[141px] w-[362px]'>To be a leading force for justice, ensuring equal access and fair outcomes for all. We envision a legal system where everyone's rights are protected and voices are heard. Our commitment is to empower individuals and communities through dedicated advocacy.</p>
                </div>
                <div className='mr-[150px]'>
                    <h1 className='h-[70px] w-[270px]  text-2xl font-medium 'style={{color:"#25406D"}}>Our Mission</h1>
                    <p className='h-[141px] w-[362px] text-left'>To be a leading force for justice, ensuring equal access and fair outcomes for all. We envision a legal system where everyone's rights are protected and voices are heard. Our commitment is to empower individuals and communities through dedicated advocacy.</p>
                </div>
            </div>
        </div>

    )
}

export default Aboutus
