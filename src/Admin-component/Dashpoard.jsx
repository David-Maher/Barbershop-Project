import React, { useEffect, useState } from 'react';
import { AiOutlineFileDone } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import { FaCodeBranch } from "react-icons/fa";
import { Branches } from '../data';
import { OurBarbers } from '../BarbersData';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase'; // تأكد من المسار الصحيح
import { Timestamp } from 'firebase/firestore';
import moment from 'moment';

export default function Dashpoard() {
  const uniqueBranches = [...new Set(Branches.map(branch => branch.toLowerCase()))];
  const uniqueOurBarbers = [...new Set(OurBarbers.map(barber => barber.toLowerCase()))];

  const [todayappointments, setTodayappointments] = useState(0);

  const [todayBookings, setTodayBookings] = useState(0);

useEffect(() => {
  const fetchTodayBookings = async () => {
    const startOfDay = moment().startOf('day').toDate();
    const endOfDay = moment().endOf('day').toDate();

    const q = query(
      collection(db, 'bookings'),
      where('createdAt', '>=', startOfDay),
      where('createdAt', '<=', endOfDay)
    );

    const snapshot = await getDocs(q);
    setTodayBookings(snapshot.size);
  };

  fetchTodayBookings();

  const handleBookingUpdate = () => fetchTodayBookings();
  window.addEventListener('bookingUpdated', handleBookingUpdate);

  return () => window.removeEventListener('bookingUpdated', handleBookingUpdate);
}, []);
  return (
    <>
      <div>
        <p className='text-6xl text-center'>welcome to dashboard</p>
      </div>

      <div className='flex mt-10 justify-center gap-5'>
        <div className='flex-col bg-white w-80 h-auto rounded-2xl justify-items-center p-5'>
          <AiOutlineFileDone className='text-6xl'/>
          <p>Total appointments Today</p>
          <p className='font-bold'>{todayBookings}</p>
        </div>

        <div className='flex-col bg-white w-80 h-auto rounded-2xl justify-items-center p-5'>
          <IoPeopleSharp className='text-6xl' />
          <p>Total Barbers</p>
          <p className='font-bold'>{uniqueOurBarbers.length}</p>
        </div>

        <div className='flex-col bg-white w-80 h-auto rounded-2xl justify-items-center p-5'>
          <FaCodeBranch className='text-6xl' />
          <p>Total Branches</p>
          <p className='font-bold'>{uniqueBranches.length}</p>
        </div>
      </div>
    </>
  )
}
