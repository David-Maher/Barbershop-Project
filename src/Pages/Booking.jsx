// Booking.jsx
import './Boking.css'
import React, { useState, useEffect } from 'react'
import Datetime from 'react-datetime'
import moment from 'moment'
import 'react-datetime/css/react-datetime.css'
import Swal from 'sweetalert2'
import { collection, addDoc, getDocs, Timestamp, query, where } from 'firebase/firestore'
import { db } from "../Firebase"
import { Helmet } from 'react-helmet'

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(moment())
  const [selectedBranch, setSelectedBranch] = useState(null)
  const [isName, setName] = useState('')
  const [services, setServices] = useState([])     
  const [selectedService, setSelectedService] = useState(null) 

  const Branches = [
    'Nasr City', 'New Cairo', 'El Sherouk', 'Mohandeseen',
    'Zamalek', 'Alexandria', 'Marina 5', 'chilout Marassi',
    'Abbas elakkad st', 'nasr city',
  ]

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const snapshot = await getDocs(collection(db, "services"))
        const servicesList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setServices(servicesList)
      } catch (error) {
        console.error("Error fetching services:", error)
      }
    }
    fetchServices()
  }, [])

  const generateBookingCode = async (selectedDate) => {
    const startOfDay = moment(selectedDate).startOf("day").toDate()
    const endOfDay = moment(selectedDate).endOf("day").toDate()

    const snapshot = await getDocs(
      query(
        collection(db, "bookings"),
        where("dateTime", ">=", startOfDay),
        where("dateTime", "<=", endOfDay)
      )
    )

    const totalToday = snapshot.size + 1
    return `BR-${totalToday.toString().padStart(5, "0")}`
  }

  const handleBooking = async () => {
    if (!isName || !selectedBranch || !selectedDate || !selectedService) {
      Swal.fire({
        icon: 'warning',
        title: 'error', 
        text: 'Please fill in all details before booking',
        timer: 1700
      })
      return
    }

    try {
      const bookingCode = await generateBookingCode(selectedDate)

      const bookingData = {
        bookingCode,
        customerName: isName,
        branch: selectedBranch,
        service: selectedService,
        dateTime: Timestamp.fromDate(selectedDate.toDate()), 
        createdAt: Timestamp.now(),
      }

      await addDoc(collection(db, 'bookings'), bookingData)

      Swal.fire({
        icon: 'success',
        title: 'Booking Confirmed! ✅',
        html: `
          <b>Booking Code:</b> ${bookingCode}<br/>
          <b>Name:</b> ${isName}<br/>
          <b>Branch:</b> ${selectedBranch}<br/>
          <b>Service:</b> ${selectedService}<br/>
          <b>Time:</b> ${selectedDate.format('hh:mm A - MMMM D, YYYY')}
        `,
        confirmButtonText: 'Done',
        timer: 1700
      })

      setName('')
      setSelectedBranch(null)
      setSelectedService(null)
      setSelectedDate(moment())
    } catch (error) {
      console.error('حدث خطأ أثناء الحجز:', error)
      Swal.fire({
        icon:'error',
        title: 'error',
        text:'An error occurred while submitting your reservation. Please try again.',
        timer: 1500
      })
    }
  }

  return (
    <>
    <Helmet>
      <meta name="description" content="إحجز الأن موعد حلاقتك في 5 خطوات بسهولة" />
      <title>إحجز الأن</title>
      <meta name="robots" content="index, follow" />
      <meta name="robots" content="noindex, nofollow" />

    </Helmet>
    <div className='Booking Hero flex  text-center flex-col justify-center items-center min-h-screen bg-[#1e1e1e] p-6'>
      <img
        className=' h-25 mt-35 w-25 md:h-100 md:w-150 rounded-full border-4 border-[#b8a269]'
        src=" ../public/images/Saeed Rabee.webp"
        alt="profile"
      />
      <p className='mt-5 text-white  text-4xl md:text-5xl'>Select a day and time</p>

      <div className='mt-10 rounded-2xl   bg-black/40 backdrop-blur-md shadow-md p-6 w-full max-w-[1100px] mx-auto flex flex-col lg:flex-row gap-8'>
        {/* الاسم */}
        <div className=' takwem w-full flex justify-center flex-col max-w-[300px] text-white'>
          <p className='text-[#b8a269] font-bold mb-2 capitalize'>your name</p>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={isName}
            onChange={(e) => setName(e.target.value)}
            className=' placeholder:text-center w-full px-4 py-2 rounded-lg bg-[#2a2a2a] border border-[#b8a269] placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#b8a269]'
          />
        </div>
        {/* التقويم */}
        <div className='takwem  w-full max-w-[300px] text-white'>
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
        <div className='takwem  w-full max-w-[300px] text-white'>
          <p className='text-[#b8a269] font-bold mb-2 capitalize'>select time</p>
          <div className='overflow-y-scroll h-64 bg-[#2a2a2a] border border-[#b8a269] rounded-lg p-2 space-y-2'>
            {[...Array(15)].map((_, hour) => (
              <div
                key={hour}
                className='py-2 text-center cursor-pointer rounded-md hover:bg-[#b8a269] hover:text-black transition-all duration-200'
                onClick={() => {
                  const newDate = moment(selectedDate).hour(hour).minute(0)
                  setSelectedDate(newDate)
                }}
              >
                {moment().hour(hour).minute(0).format('hh:mm A')}
              </div>
            ))}
          </div>
          <p className='text-center text-xs mt-2 text-gray-400'> Africa / Cairo</p>
        </div>

        {/* الفروع */}
        <div className='takwem  w-full max-w-[300px] text-white'>
          <p className='text-[#b8a269] font-bold mb-2 capitalize'>select branch</p>
          <div className='overflow-y-scroll h-64 bg-[#2a2a2a] border border-[#b8a269] rounded-lg p-2 space-y-2'>
            {Branches.map((branch, index) => (
              <p
                key={index}
                onClick={() => setSelectedBranch(branch)}
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

        {/* الخدمات */}
        <div className='takwem w-full max-w-[300px] text-white'>
          <p className='text-[#b8a269] font-bold mb-2 capitalize'>select service</p>
          <div className='overflow-y-scroll h-64 bg-[#2a2a2a] border border-[#b8a269] rounded-lg p-2 space-y-2'>
            {services.map((service) => (
              <p
                key={service.id}
                onClick={() => setSelectedService(service.title)}
                className={`cursor-pointer px-2 py-1 rounded text-center transition-all duration-200
                  ${selectedService === service.title
                    ? 'bg-[#b8a269] text-black font-bold'
                    : 'hover:bg-[#444]'}
                `}
              >
                {service.title}
              </p>
            ))}
          </div>
        </div>

      </div>
      
      {/* زر الحجز */}
      <button
        onClick={handleBooking}
        className='mt-8 mx-auto bg-[#b8a269] text-black text-lg font-bold px-8 py-3 rounded-full shadow-md hover:bg-[#a49255] transition-all duration-300'
      >
        Book Now
      </button>
    </div>
    </>
  )
}
