
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";

const NavLinks = [
    {
        id:"1",
        name:"HOME",
        link:"/#"
    },
    {
        id:"2",
        name:"CARS",
        link:"/#cars"
    },
    {
        id:"3",
        name:"ABOUT",
        link:"/#about"
    },
    {
        id:"4",
        name:"BOOKING",
        link:"/#booking"
    },
    
]

const Navbar = ({theme,setTheme}) => {
 
  return (
    <nav className='shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40' >
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
            <div className='hidden md:block'> 
              <h1 className='text-3xl font-bold font-serif'>Car Rental</h1>
            </div>
            <div>
            <ul className='flex  items-center gap-6'>
                {NavLinks.map((data)=>(<li key={data.id} className='py-4' ><a className=' py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium ' href={data.link}  >{data.name}</a></li>))}
               
                
            </ul>
            </div>
        <div className="cursor-pointer" >
          {theme === "dark" ? (
  <BiSolidSun className='text-2xl' onClick={() => {setTheme("light")}} />
) : (
  <BiSolidMoon className='text-2xl' onClick={() => {setTheme("dark")}} />
)}
          
        </div>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
