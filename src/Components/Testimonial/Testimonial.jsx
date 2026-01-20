import React from 'react'
const TestimonialData = [
    {
        name: "Dilshad",
        image: "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png",
        description: "Lorem ipsum dolor sit amet consectetur , adipisicing elit",
        aosDelay: "0",
        id:1,
    },
    {
        name: "Satya",
        image: "https://cdn-icons-png.freepik.com/256/12876/12876529.png?semt=ais_white_label",
        description: "Lorem ipsum dolor sit amet consectetur , adipisicing elit",
        aosDelay: "300",
        id:2,
    },
    {
        name: "Sabir",
        image: "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png",
        description: "Lorem ipsum dolor sit amet consectetur , adipisicing elit",
        aosDelay: "1000",
        id:3,
    }
]
const Testimonial = () => {
  return (
    <div className='dark:bg-black dark:text-white py-14 sm:pb-24 flex justify-center'>
      <div className="container ">
        {/* header  */}
        <div className='space-y-4 pb-12'>
            <p data-aos="fade-up" 
             className='text-3xl font-semibold text-center sm:text-4xl font-serif'>What Our Clients Say About Us</p>
            <p data-aos="fade-up"
             className='text-center sm:px-44'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        {/* card section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-black  dark:text-white  '>
          {
            TestimonialData.map((data)=>{
                return (
                    <div key={data.id}
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    className='card text-center group space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg   '  
                    >
                        <div className='grid place-items-center '>
                           <img  className='w-40 h-40 rounded-full object-cover' src={data.image} alt=" " /> 
                        </div>
                        <div className='text-2xl'>⭐⭐⭐⭐⭐</div>
                        <p>{data.description}</p>
                        <p className='font-semibold text-center'>{data.name}</p>
                    </div>
                )

                
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Testimonial
