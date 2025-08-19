import { Link, Links } from 'react-router-dom'
import './Head.css'
import { useState } from 'react'
import { RiLoginCircleLine } from "react-icons/ri";

export default function Header() {
  const [Isopen, setIsopen] = useState(true)
  return (
    <>
    {
      Isopen && (
        <div className='bar items-center justify-center gap-15 flex bg-[#b8a269] '>
            <p className=' capitalize p-2 font-bold text-white'>get your first diss 20% when Booking</p>
          <button className='text-white  cursor-pointer font-bold' onClick={()=>setIsopen(false)}>x</button>
        </div>
      )
    }
    <div className='Header'>
    <div className="navbar shadow-sm bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm p-5 sm:text-[1.5rem]  dropdown-content  mt-3 w-52 ">
      <Link to={"/Barbers"}>Our Barbers</Link>    
      <Link to={"/Landing-Page"}>LandingPage</Link>    
      <Link to={"/services"}>services</Link>    
      <Link to={"/Prices"}>pricing</Link>    
      <Link to={"/About"}>About us</Link>    
      <Link to={"/ContactUs"}>ContactUs</Link>    

      </ul>
    </div>
    <div className='lin items-center'>
<Link className=' text-[#b8a269] text-2xl' to={"/HomePage"}>Saeed Rabee</Link>    
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[15px] ">
      <li>
<Link to={"/HomePage"}>Home</Link>    
      </li>
            <li>
<Link  to={"/About"}>About us</Link>    
      </li>
      <li>
        <details>
          <summary className='Pag'>pages</summary>
          <ul>
            <li className='bg-black rounded-box '>
      <Link to={"/Landing-Page"}>LandingPage</Link>    
      <Link to={"/services"}>services</Link>    
      <Link to={"/Booking"}>Make An Appointment</Link>    
      <Link to={"/Prices"}>pricing</Link>  
      <Link to={"/Barbers"}>OurBarbers</Link>  
        
            </li>
          </ul>
        </details>
      </li>
      <li className='brown'>
      <Link to={"/ContactUs"}>ContactUs</Link>    
      </li>
    </ul>
  </div>
  <div className="navbar-end pr-10 text-[15px] ">
      <Link className='Book lg:text-[15px] sm:text-[22px] sm:p-[10px] rounded-bl-md rounded-tr-md w-auto h-auto pl-5 pr-5 text-center' to={"/Booking"}>Book an appointment</Link>    
  </div>
  <div className='pr-5'>
    <Link to={"/Admin"}>
    <RiLoginCircleLine className='text-2xl cursor-pointer'/>
    </Link>
  </div>
</div>
    </div>
    </>
)
}
