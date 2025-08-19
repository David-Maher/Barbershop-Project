import React from 'react'
import './OurBaraber.css'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import 'swiper/css'
import 'swiper/css/navigation'
export default function OurBarbers() {
  return (

<>
<div className='OurBarbers flex justify-center items-center'>
    <div className='text-white pb-50'>
    <p className='capitalize text-center text-4xl font-bold'>Our barbers</p>
    <div className='mt-5'>
  <Link
    to="/Booking"
    className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[2px] focus:outline-none"
  >
    <span
      className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#b8a269_0%,#f1f1f1_50%,#b8a269_100%)]"
    ></span>
    <span
      className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#b8a269] px-7 text-sm font-bold text-white backdrop-blur-3xl gap-2"
    >
      Book an appointment
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
      </svg>
    </span>
  </Link>
    </div>
    </div>
    </div>
    <div className=' pt-10 pb-10 bg-[#333333]'>
                    <div> 
                         {/* card */}
                         <div className='parent flex gap-5 justify-center items-center sm:flex-wrap sm:-gap[5px] md:flex-wrap '>
                 <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
                   <div className="card-body">
                     <h2 className="card-title text-2xl text-[#b8a269]">Owner</h2>
                     <p className='text-[20px] font-bold'>Saeed Rabee</p>
                     <div className='flex gap-3'>
                 <a     id="social"       href="https://www.facebook.com/SaeidRabieMensalon"><FaFacebook className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a     id="social"      href="https://www.instagram.com/saeidrabie_/?hl=ar"><FaInstagram className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a     id="social"      href="https://x.com/saeid_rabie?lang=ar"><FaXTwitter className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                     </div>
                   </div>
                   <figure>
                     <img className='bg-[#b8a269] self-center'
                       src="/src/assets/images/y554.jpg"
                       alt="Saeed Rabee" />
                   </figure>
                 </div>
                 <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
                   <div className="card-body">
                     <h2 className="card-title text-2xl text-[#b8a269]">Barber / Stylist</h2>
                     <p className='text-[20px] font-bold'>Ahmed Adel</p>
                     <div className='flex gap-3'>
                 <a  id="social" href="https://www.facebook.com/SaeidRabieMensalon"><FaFacebook className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a  id="social" href="https://www.instagram.com/saeidrabie_/?hl=ar"><FaInstagram className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a  id="social" href="https://x.com/saeid_rabie?lang=ar"><FaXTwitter className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 
                     </div>
                   </div>
                   <figure>
                     <img
                       src="/src/assets/images/4234.jpg"
                       alt="Shoes" />
                   </figure>
                 </div>
                 <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
                   <div className="card-body">
                     <h2 className="card-title text-2xl text-[#b8a269]">Barber / Stylist</h2>
                     <p className='text-[20px] font-bold'>Alaa Mohamed</p>
                     <div className='flex gap-3'>
                 <a    id="social"     href="https://www.facebook.com/SaeidRabieMensalon"><FaFacebook className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a    id="social"     href="https://www.instagram.com/saeidrabie_/?hl=ar"><FaInstagram className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a    id="social"     href="https://x.com/saeid_rabie?lang=ar"><FaXTwitter className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 
                     </div>
                   </div>
                   <figure>
                     <img
                       src="/src/assets/images/42w35.jpg"
                       alt="Shoes" />
                   </figure>
                 </div>
                 <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
                   <div className="card-body">
                     <h2 className="card-title text-2xl text-[#b8a269]">Barber / Stylist</h2>
                     <p className='text-[20px] font-bold'>Mohamed saeed</p>
                     <div className='flex gap-3'>
                 <a    id="social"     href="https://www.facebook.com/SaeidRabieMensalon"><FaFacebook className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a    id="social"     href="https://www.instagram.com/saeidrabie_/?hl=ar"><FaInstagram className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a    id="social"     href="https://x.com/saeid_rabie?lang=ar"><FaXTwitter className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 
                     </div>
                   </div>
                   <figure>
                     <img
                       src="/src/assets/images/56346.jpg"
                       alt="" />
                   </figure>
                 </div>
                 <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
                   <div className="card-body">
                     <h2 className="card-title text-2xl text-[#b8a269]">Barber / Stylist</h2>
                     <p className='text-[20px] font-bold'>Ramy Ahmed</p>
                   <div className='flex gap-3'>
                 <a    id="social"     href="https://www.facebook.com/SaeidRabieMensalon"><FaFacebook className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a    id="social"     href="https://www.instagram.com/saeidrabie_/?hl=ar"><FaInstagram className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a    id="social"     href="https://x.com/saeid_rabie?lang=ar"><FaXTwitter className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 
                     </div>
                   </div>
                   <figure>
                     <img
                       src="/src/assets/images/452436.jpg"
                       alt="Shoes" />
                   </figure>
                 </div>
                 <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
                   <div className="card-body">
                     <h2 className="card-title  text-2xl text-[#b8a269]">Barber / Stylist</h2>
                     <p className='text-[20px] font-bold'>Karem Mostafa</p>
                         <div className='flex gap-3'>
                 <a    id="social"     href="https://www.facebook.com/SaeidRabieMensalon"><FaFacebook className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a    id="social"     href="https://www.instagram.com/saeidrabie_/?hl=ar"><FaInstagram className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a   id="social"      href="https://x.com/saeid_rabie?lang=ar"><FaXTwitter className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                     </div>
                   </div>
                   <figure>
                     <img
                       src="/src/assets/images/452436.jpg"
                       alt="Shoes" />
                   </figure>
                 </div>
                 {/*second perant card */}
                 <div className=' parent flex gap-5 justify-center items-center sm:flex-wrap sm:-gap[5px] md:flex-wrap md:-gap[5px]'>
                 <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
                   <div className="card-body">
                     <h2 className="card-title text-2xl text-[#b8a269] ">Barber / Stylist</h2>
                     <p className='text-[20px] font-bold'>Mazen Amr</p>
                     <div className='flex gap-3'>
                 <a   id="social"      href="https://www.facebook.com/SaeidRabieMensalon"><FaFacebook className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a   id="social"      href="https://www.instagram.com/saeidrabie_/?hl=ar"><FaInstagram className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a   id="social"      href="https://x.com/saeid_rabie?lang=ar"><FaXTwitter className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 
                     </div>
                   </div>
                   <figure>
                     <img
                       src="/src/assets/images/46346.jpg"
                       alt="Shoes" />
                   </figure>
                 </div>
                 <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
                   <div className="card-body">
                     <h2 className="card-title text-2xl text-[#b8a269]">Barber / Stylist</h2>
                     <p className='text-[20px] font-bold'>Hassan Ali</p>
                     <div className='flex gap-3'>
                 <a   id="social"      href="https://www.facebook.com/SaeidRabieMensalon"><FaFacebook className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a   id="social"      href="https://www.instagram.com/saeidrabie_/?hl=ar"><FaInstagram className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                 <a   id="social"      href="https://x.com/saeid_rabie?lang=ar"><FaXTwitter className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
                     </div>
                   </div>
                   <figure>
                     <img
                       src="/src/assets/images/46346.jpg"
                       alt="Shoes" />
                   </figure>
                 </div>
                 </div>
                  </div> 
                      </div>
    </div>
</>
  )
}

