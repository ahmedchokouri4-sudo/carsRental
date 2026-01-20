import React, { useEffect,useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
import Hero from './Components/Hero/Hero'
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from 'aos';
import About from './Components/About/About';
import Services from "./Components/Services/services"
import CarList from './Components/CarList/CarList';
import Testimonial from './Components/Testimonial/Testimonial';
import AppStoreBanner from './Components/AppStoreBanner/AppStoreBanner';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


const App = () => {
  //DARK MODE FEATURE
   const [theme,setTheme]= useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
   const element = document.documentElement
   useEffect(()=>{
    if(theme === "dark"){
      element.classList.add("dark")
      localStorage.setItem("theme","dark")
    }else{
       element.classList.remove("dark")
      localStorage.setItem("theme","light")
    }
   },[theme])

   //Aos Initialization
   useEffect(() => {
  AOS.init({
    offset:100,
    duration: 800,
    easing:"ease-in-sine",
    once: false,
  });
  AOS.refresh()
}, []);


   return (

    <div className='bg-white dark:bg-black dark:text-white '>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme}/>
      <About/>
      <Services/>
      <CarList/>
      <Testimonial/>
      <AppStoreBanner/>
      <Contact/>
      <Footer/>
 

    </div>

  
  )
}

export default App

