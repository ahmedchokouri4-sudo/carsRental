import React from 'react'
import carPng from "../../assets/cars/Screenshot_4.png"
import yellowCarPng from "../../assets/cars/Screenshot_1-removebg-preview (1).png"
const Hero = ({theme}) => {
  return (
    <div className='dark:bg-black dark:text-white duration-300 relative z-20 bg-slate-100 ' >
      <div className="container min-h-[620px] mx-auto flex items-center ">
        <div className=' grid items-center grid-cols-1 sm:grid-cols-2 '>
        <div
        data-aos="zoom-in"
        data-aos-duration="1500"
         className='order-1 sm:order-2 w-[600px] h-[400px] flex items-center justify-center'>
            <img src={theme === "dark" ? carPng : yellowCarPng} alt=""  className='relative w-full min-h-[620px] drop-shadow-[2px_20px_6px_Orgba (0,0,0,0.50)] max-w-full max-h-full object-contain'/>
        </div>
        <div className=' sm:pr-32 space-y-5' >
            <p
            data-aos="fade-up"
            data-aos-delay="600"
            className='text-primary text-2xl font-serif  '>Effortless</p>
        <h1
         data-aos="fade-up"
         data-aos-delay="600"
        className='text-5xl font-bold lg:text-7xl font-semibold font-serif'>Car Rental</h1>
        <p  
        data-aos="fade-up"
        data-aos-delay="1000"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis explicabo quibusdam quae reprehenderit ab</p>
        <button
        data-aos="fade-up"
        data-aos-delay="1000"
        className=' btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 cursor-pointer'>
        Get Started
        </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
