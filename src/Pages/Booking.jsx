import './Boking.css'
import React, { useState } from 'react'
import Datetime from 'react-datetime'
import moment from 'moment'
import 'react-datetime/css/react-datetime.css'
import Swal from 'sweetalert2'

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(moment())
  const [selectedBranch, setSelectedBranch] = useState(null)
  const [reservationNumber, setReservationNumber] = useState(() => {
    const saved = localStorage.getItem('reservationNumber')
    return saved ? parseInt(saved) : 0
  })
  const  [isName, setName] = useState(null) 
  const Branches = [
    "Nasr City",
    "New Cairo",
    "El Sherouk",
    "Mohandeseen",
    "Zamalek",
    "Alexandria",
    "Marina 5",
    "chilout Marassi",
    "Abbas elakkad st",
    "nasr city",
  ]

  return (
    <div className='Booking Hero flex text-center flex-col justify-center items-center min-h-screen bg-[#1e1e1e] p-6'>
      <img
        className='h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-[#b8a269]'
        src="/src/assets/images/y554.jpg"
        alt="profile"
      />
      <p className='text-white text-3xl capitalize text-center mt-3'>saeed rabee</p>
      <p className='mt-5 text-white  text-4xl md:text-5xl'>Select a day and time</p>

<div className='mt-10 bg-[#1a1a1a] rounded-2xl p-6 shadow-2xl w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-8'>

  {/* التقويم */}
  <div className='w-full max-w-[300px] text-white'>
    <p className='text-[#b8a269] font-bold mb-2 capitalize'>select date</p>
    <Datetime
      value={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      input={false}
    
      dateFormat="MMMM D, YYYY"
      timeFormat={true}
      isValidDate={(currentDate) => currentDate.isSameOrAfter(moment(), 'day')}
    />
  </div>

  {/* الوقت */}
  <div className='w-full max-w-[300px] text-white'>
    <p className='text-[#b8a269] font-bold mb-2 capitalize'>select time</p>
    <div className='overflow-y-scroll h-64 bg-[#2a2a2a] border border-[#b8a269] rounded-lg p-2 space-y-2'>
      {[...Array(15)].map((_, hour) => (
        <div
          key={hour}
          className='py-2 text-center cursor-pointer rounded-md hover:bg-[#b8a269] hover:text-black transition-all duration-200'
          onClick={() => {
          
            const newDate = moment(selectedDate).hour(hour).minute(0);
            setSelectedDate(newDate);
          }}
        >
          {moment().hour(hour).minute(0).format('hh:mm A')}
        </div>
      ))}
    </div>
    <p className='text-center text-xs mt-2 text-gray-400'> Africa / Cairo</p>
  </div>

  {/* الفروع */}
  <div className='w-full max-w-[300px] text-white'>
    <p className='text-[#b8a269] font-bold mb-2 capitalize'>select branch</p>
    <div className='overflow-y-scroll h-64 bg-[#2a2a2a] border border-[#b8a269] rounded-lg p-2 space-y-2'>
      {Branches.map((branch, index) => (
        <p
          key={index}
          onClick={() => setSelectedBranch(branch)}
          required
          className={`cursor-pointer px-2 py-1 rounded text-center transition-all duration-200
            ${selectedBranch === branch
              ? 'bg-[#b8a269] text-black font-bold'
              : 'hover:bg-[#444]'}
          `}
        >
          {branch}
        </p>
      ))}
    </div>
  </div>

  {/* الاسم */}
  <div className='w-full flex justify-center flex-col max-w-[300px] text-white'>
    <p className='text-[#b8a269] font-bold mb-2 capitalize'>your name</p>
    <input
      type="text"
      placeholder="Enter Your Name"
      required
      value={isName}
      onChange={(e) => setName(e.target.value)}
      className='w-full px-4 py-2 rounded-lg bg-[#2a2a2a] border border-[#b8a269] placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#b8a269]'
    />
  </div>
</div>

{/* زر الحجز */}
<button
  onClick={() => {
    const today = moment().format("YYYY-MM-DD");
    const lastSavedDate = localStorage.getItem('reservationDate');
    let lastNumber = parseInt(localStorage.getItem('reservationNumber')) || 0;
    let nextNumber;

    if (lastSavedDate === today) {
      nextNumber = lastNumber + 1;
    } else {
      nextNumber = 1;
      localStorage.setItem('reservationDate', today);
    }

    localStorage.setItem('reservationNumber', nextNumber);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "تم حجز الموعد",
      html: `
        <b>رقم الحجز:</b> ${nextNumber}<br/>
        <b>الفرع:</b> ${selectedBranch || "لم يتم اختيار فرع"}<br/>
        <b>الوقت:</b> ${selectedDate.format('MMMM D, YYYY - hh:mm A')}<br/>
        <b>الاسم:</b> ${isName || "لم يتم إدخال الاسم"}
      `,
      showConfirmButton: false,
      timer: 2800
    });
  }}
  className='mt-8 mx-auto bg-[#b8a269] text-black text-lg font-bold px-8 py-3 rounded-full shadow-md hover:bg-[#a49255] transition-all duration-300'
>
  احجز الآن
</button>
    </div>
  )
}
