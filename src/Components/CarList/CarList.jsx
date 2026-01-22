import React from 'react'
import yellowCar from "../../assets/cars/yellow.png"
import car2 from "../../assets/cars/white.png"
import car3 from "../../assets/cars/blue.png"
const CarListData = [
    {
        name: "BMW UX",
        price: 100,
        image:yellowCar,
        aosDelay:"0",
        id:1,
    },
    {
        name: "KIA UX",
        price: 140,
        image:car2,
        aosDelay:"500",
        id:2,
    },
    {
        name: "BMW UX",
        price: 200,
        image:car3,
        aosDelay:"1000",
        id:3,
    },
]
const CarList = () => {
  return (
    <div className='pb-24 bg-white dark:bg-dark dark:text-white'>
      <div className="container mx-auto px-4">
        {/* heading */}
        <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-semibold font-serif mb-3'>Lorem, ipsum dolor.</h1>
        <p data-aos="fade-up" className='text-sm pb-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat qui quibusdam culpa.</p>
        {/* Car Listing Card */}
        <div >
            <div 
            className='grid grid-cols-1 sm:grid-cols-3 gap-16  justify-items-center'>
            {
                CarListData.map((car)=>{
                    return(
                        <div key={car.id}
                          data-aos="fade-up"
                          data-aos-duration={car.aosDelay}
                        className='space-y-3 border-2 border-gray-300 hover:border-primary rounded-xl relative group px-2 w-full '>
                            <div className='w-full h-[120px]'>
                                <img 
                                className='w-full h-[120px] object-contain sm:translate-x-8 mt-4 group-hover:sm:translate-x-16 duration-700'
                                src={car.image} alt="" />
                            </div>
                            <div className='space-y-2 '>
                                <h1 className='text-primary font-semibold'>{car.name}</h1>
                                <div className='flex justify-between items-center text-xl font-semibold'>
                                <p>${car.price}/Day</p>
                                <a href="#">Details</a>
                                </div>
                            </div>
                            <p className='text-xl font font-semibold absolute top-0 left-3 '>12Km</p>
                        </div>
                    )
                })
            }
            </div>
            {/* End of Car Listing Card */}
            <div className='grid place-content-center mt-8'>
                <button data-aos="fade-up" className='button-outline'>Get Started</button>
                </div>
        </div>
      </div>
    </div>
  )
}

export default CarList
