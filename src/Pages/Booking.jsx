import './Boking.css'
import React, { useState } from 'react'
import Datetime from 'react-datetime'
import moment from 'moment'
import 'react-datetime/css/react-datetime.css'
import Swal from 'sweetalert2'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../Firebase'
import { Timestamp } from 'firebase/firestore';

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(moment())
  const [selectedBranch, setSelectedBranch] = useState(null)
  const [isName, setName] = useState('')

  const Branches = [
    'Nasr City', 'New Cairo', 'El Sherouk', 'Mohandeseen',
    'Zamalek', 'Alexandria', 'Marina 5', 'chilout Marassi',
    'Abbas elakkad st', 'nasr city',
  ]

    const generateBookingCode = async () => {
const snapshot = await getDocs(collection(db, "bookings"));
    const total = snapshot.size + 1;
    return `BR-${total.toString().padStart(5, '0')}`;
  };

  const handleBooking = async () => {
    if (!isName || !selectedBranch || !selectedDate) {
      Swal.fire('تنبيه', 'يرجى ملء جميع البيانات قبل الحجز', 'warning');
      return;
    }

    try {
      const bookingCode = await generateBookingCode();

      const bookingData = {
        bookingCode,
        customerName: isName,
        branch: selectedBranch,
        dateTime: selectedDate.format('LL [at] HH:mm:ss'),
        createdAt: Timestamp.now(),
      };

      await addDoc(collection(db, 'bookings'), bookingData);

      Swal.fire({
        icon: 'success',
        title: 'تم الحجز بنجاح',
        html: `
          <b>رقم الحجز:</b> ${bookingCode}<br/>
          <b>الاسم:</b> ${isName}<br/>
          <b>الفرع:</b> ${selectedBranch}<br/>
          <b>الوقت:</b> ${selectedDate.format('hh:mm A - MMMM D, YYYY')}
        `,
        confirmButtonText: 'تم',
        timer:1700
      });

      // ممكن تنظف البيانات بعد الحجز
      setName('');
      setSelectedBranch(null);
      setSelectedDate(moment());
    } catch (error) {
      console.error('حدث خطأ أثناء الحجز:', error);
      Swal.fire('خطأ', 'حدث خطأ أثناء إرسال الحجز، حاول مرة أخرى', 'error');
    }
  }
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
        <div className='w-full max-w-[300px] text-white'>
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

        {/* الاسم */}
        <div className='w-full flex justify-center flex-col max-w-[300px] text-white'>
          <p className='text-[#b8a269] font-bold mb-2 capitalize'>your name</p>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={isName}
            onChange={(e) => setName(e.target.value)}
            className='w-full px-4 py-2 rounded-lg bg-[#2a2a2a] border border-[#b8a269] placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#b8a269]'
          />
        </div>
      </div>

      {/* زر الحجز */}
<button
  onClick={handleBooking}
  className='mt-8 mx-auto bg-[#b8a269] text-black text-lg font-bold px-8 py-3 rounded-full shadow-md hover:bg-[#a49255] transition-all duration-300'
>
  احجز الآن
</button>
     </div>
  )
}
