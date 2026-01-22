import React from 'react'
import carPng from "../../assets/cars/Screenshot_4.png"
import yellowCarPng from "../../assets/cars/Screenshot_1-removebg-preview (1).png"

const Hero = ({theme}) => {
  return (
    <div className='dark:bg-black dark:text-white duration-300 relative z-20 bg-slate-100'>
      <div className="container mx-auto min-h-[620px] flex items-center px-4">
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center gap-8'>

          {/* Image */}
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className='order-1 sm:order-2 flex justify-center w-full'
          >
            <img 
              src={theme === "dark" ? carPng : yellowCarPng} 
              alt=""  
              className='w-full sm:w-[90%] md:w-[80%] max-h-[500px] object-contain drop-shadow-[2px_20px_6px_rgba(0,0,0,0.5)]'
            />
          </div>

          {/* Text */}
          <div className='order-2 sm:order-1 space-y-5 text-center sm:text-left px-4 sm:px-0'>
            <p
              data-aos="fade-up"
              data-aos-delay="600"
              className='text-primary text-2xl font-serif'
            >
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className='text-4xl sm:text-5xl lg:text-6xl font-bold font-serif'
            >
              Car Rental
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis explicabo quibusdam quae reprehenderit ab
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="1000"
              className='btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300 cursor-pointer mb-3'
            >
              Get Started
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero
