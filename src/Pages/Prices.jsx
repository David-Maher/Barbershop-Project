import React from 'react'
import './Price.css'
import { Link } from 'react-router-dom'
export default function Prices() {
  return (
    <>
    <div className='Prices flex justify-center items-center'>
      <div>
     <p className='text-white text-8xl font-bold uppercase '>Pricing</p> 
    <p className='text-[20px] mt-5 text-white text-center'>Get full range of premium services.</p>
    <div className='mt-5 flex justify-center'>
    <Link className='text-white text-2xl p-2  rounded-[11px] bg-[#b8a269]' to={"/Booking"}>Book an appointment</Link>
    </div>
    </div>
    </div>
    <div className='bg-[#1a1a1a] h-auto w-auto'>
    <p className='text-5xl p-5 font-bold text-white text-center'>Our Pricing</p>
    <div className='flex justify-center'>
    <div className='px-10 py-10'>
  <div className="flex flex-col lg:flex-row justify-center items-start">
  {/* first section*/}
  <div className="w-full lg:w-1/2 px-10 py-10">

    <div>
      <div className="flex justify-between gap-5 text-2xl">
        <p className="text-white font-bold">Regular Haircut</p>
        <p className="text-[#b8a269] font-bold">$35 +</p>
      </div>
      <div className="py-5 text-white flex flex-col">
        <p>A great hair cut is the best accessory a man can have</p>
        <hr className="mt-5 rounded-2xl h-1 bg-[#b8a269]" />
      </div>
    </div>


    <div>
      <div className="flex justify-between gap-5 text-2xl">
        <p className="text-white font-bold">Royal Shave</p>
        <p className="text-[#b8a269] font-bold">$35 +</p>
      </div>
      <div className="py-5 text-white flex flex-col">
        <p>Our three-step signature shave</p>
        <hr className="mt-5 rounded-2xl h-1 bg-[#b8a269]" />
      </div>
    </div>


    <div>
      <div className="flex justify-between gap-5 text-2xl">
        <p className="text-white font-bold">Specialty Men’s Haircut</p>
        <p className="text-[#b8a269] font-bold">$35 +</p>
      </div>
      <div className="py-5 text-white flex flex-col">
        <p>Precision cut with detail + neck detail</p>
        <hr className="mt-5 rounded-2xl h-1 bg-[#b8a269]" />
      </div>
    </div>

    <div>
      <div className="flex justify-between gap-5 text-2xl">
        <p className="text-white font-bold">Massaging Shampoo</p>
        <p className="text-[#b8a269] font-bold">$35 +</p>
      </div>
      <div className="py-5 text-white flex flex-col">
        <p>Relaxing shampoo + scalp massage + hot towel</p>
        <hr className="mt-5 rounded-2xl h-1 bg-[#b8a269]" />
      </div>
    </div>
  </div>
  <div className="w-full lg:w-1/2 px-10 py-10">
    <div>
      <div className="flex justify-between gap-5 text-2xl">
        <p className="text-white font-bold">Haircut + Royal Shave</p>
        <p className="text-[#b8a269] font-bold">$35 +</p>
      </div>
      <div className="py-5 text-white flex flex-col">
        <p>Our exceptional secrets all together for you</p>
        <hr className="mt-5 rounded-2xl h-1 bg-[#b8a269]" />
      </div>
    </div>

    <div>
      <div className="flex justify-between gap-5 text-2xl">
        <p className="text-white font-bold">Haircut + Beard Trim</p>
        <p className="text-[#b8a269] font-bold">$35 +</p>
      </div>
      <div className="py-5 text-white flex flex-col">
        <p>Beard or Shave, we bring the difference that makes you real</p>
        <hr className="mt-5 rounded-2xl h-1 bg-[#b8a269]" />
      </div>
    </div>

    {/* عنصر 7 */}
    <div>
      <div className="flex justify-between gap-5 text-2xl">
        <p className="text-white font-bold">Men’s Color</p>
        <p className="text-[#b8a269] font-bold">$35 +</p>
      </div>
      <div className="py-5 text-white flex flex-col">
        <p>Enhance your look with this permanent color service</p>
        <hr className="mt-5 rounded-2xl h-1 bg-[#b8a269]" />
      </div>
    </div>

    {/* عنصر 8 */}
    <div>
      <div className="flex justify-between gap-5 text-2xl">
        <p className="text-white font-bold">Long Haircut</p>
        <p className="text-[#b8a269] font-bold">$35 +</p>
      </div>
      <div className="py-5 text-white flex flex-col">
        <p>Our long haircut is similar to our classic haircut</p>
        <hr className="mt-5 rounded-2xl h-1 bg-[#b8a269]" />
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    </div>
    </>
  )
}
