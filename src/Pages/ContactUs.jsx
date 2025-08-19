import React, { useState } from 'react'
import './ContactUs.css'
export default function ContactUs() {
  const [count, setcount] =useState(0)
  const increment = ()=>{
    setcount(prev => prev +1)
  }
  const decrement = ()=>{
    setcount(prev => (prev > 0 ? prev -1 :0) )
  }
  return (
    <>
    <div className='ContactUs flex justify-center items-center'>
      <div>
        <p className='capitalize text-6xl font-extrabold text-white'>contact us</p>
      </div>
    </div>
    <div className='bg-[#333333]  text-white pt-10 pb-10 text-center'>
    </div>
    <div className=' sora2 flex justify-center text-start pb-10 text-white'>
     <div className=' h-auto w-2xl border-2 rounded-2xl border-[#b8a269]'>
      <div>
<div className=" flex justify-center items-center p-10 rounded-2xl text-white px-4">
  <form className=" p-8 rounded-2xl shadow-lg w-full max-w-md space-y-15">
    <h2 className="text-2xl font-semibold text-center text-[#b8a269]">Contact Us</h2>

    {/* الاسم */}
    <div className="relative">
      <input
        type="text"
        required
        placeholder="Enter Your Name"
        className="w-full bg-transparent border-b-2 border-[#b8a269] focus:outline-none focus:border-white text-white placeholder-gray-400 py-2"
      />
    </div>
<div></div>
    {/* الإيميل */}
    <div className="relative">
      <input
        type="email"
        required
        placeholder="Enter Your Email"
        className="w-full bg-transparent border-b-2 border-[#b8a269] focus:outline-none focus:border-white text-white placeholder-gray-400 py-2"
      />
    </div>

    {/* الرسالة */}
    <div className="relative">
      <textarea
        required
        placeholder="Enter your message"
        rows="3"
        className="w-full bg-transparent border-b-2 border-[#b8a269] focus:outline-none focus:border-white text-white placeholder-gray-400 py-2 resize-none"
      />
    </div>

    {/* الزر */}
    <div className="text-center">
      <button
        type="submit"
        className="bg-[#b8a269] text-black font-medium px-6 py-2 rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-md"
      >
        Submit
      </button>
    </div>
  </form>
</div>
      </div>
      </div>
    </div>
    </>
  )
}
