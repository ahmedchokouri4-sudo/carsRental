import React from 'react'
import CarPng from "../../assets/cars/Screenshot_1-removebg-preview (2).png"
const About = () => {
  return (
    <div className='dark:bg-dark dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:items-center flex items-center justify-center'>
      <div className="container   ">
        <div className="grid grid-cols-1  sm:grid-cols-2  items-center px-4  "  >
            <div 
            data-aos="slide-right"
            data-aos-duration="1500"
            className='flex justify-center'
            > 
                <img src={CarPng} alt=""  className='sm:scale-105 sm:translate-x-4 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]  '/>
            </div>
            <div className='space-y-5 sm:p-8 pb-6 flex flex-col justify-center items-center text-center  '>
                <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold font-serif'>About us</h1>
                <p data-aos="fade-up" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore sunt quam accusamus iure debitis!</p>
                <p data-aos="fade-up" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, repellat!</p>
                <button data-aos="fade-up" className='button-outline'>
                    Get Started
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
