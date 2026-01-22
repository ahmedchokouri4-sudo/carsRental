import React from 'react'
import PlayStoreImg from "../../assets/cars/15340454977616873-removebg-preview.png"
import AppStoreImg from "../../assets/cars/app-store-download-on-the-app-store-badge-11760038202udfggvbtov-removebg-preview.png"

const bannerImg = {
    backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/024/380/324/non_2x/orange-abstract-background-for-graphic-design-elements-with-a-modern-theme-free-vector.jpg)",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center",
    hight:"100%",
    widht:"100%"
    
}





const AppStoreBanner = () => {
  return (
    <div className=' container  mx-auto pb-14  flex items-center justify-center px-4'>
      <div className='text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl w-full ' 
      style={bannerImg}>
         <div className='space-y-6 max-w-xl mx-auto'>
        <h1
        data-aos="fade-up"
        className='text-2xl text-center sm:text-4xl font-semibold font-serif'>Get Started With our app </h1>
        <p 
        data-aos="fade-up"
        className='text-center sm:px-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error optio impedit minima commodi!
        </p>
        <div
        data-aos="fade-up"
        className='flex flex-wrap justify-center items-center gap-4'>
            <a href="#">
                <img src={PlayStoreImg} alt="" 
                className='w-50 max-w-[150px] sm:max-w[120px] md:max-w-[200px]'
                />
            </a>
            <a href="#">
                <img src={AppStoreImg} alt="" 
               className=' w-80 max-w-[150px] sm:max-w[120px] md:max-w-[200px]'
                />
            </a>
        </div>
      </div>
      </div>
     
    </div>
  )
}

export default AppStoreBanner
