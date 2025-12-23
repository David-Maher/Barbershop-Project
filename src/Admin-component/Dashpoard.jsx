// Dashpoard.js
import React, { useEffect, useState } from 'react';
import { AiOutlineFileDone } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import { FaCodeBranch } from "react-icons/fa";
import { Data } from '../ServiceData';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase'; 
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

export default function Dashpoard() {
  
  const [branches, setBranches] = useState([]);
  const [todayBookings, setTodayBookings] = useState(0);
  const [monthlyData, setMonthlyData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(moment()); // الشهر المختار
  const [totalMonthBookings, setTotalMonthBookings] = useState(0);

  // حساب الباربرز المميزين من Data
  const uniqueOurBarbers = [...new Set(Data.map(service => service.title.toLowerCase()))];

  // حساب الحجوزات اليومية (اليوم الحالي)
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

  // جلب الفروع من Firebase
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'Branches'));
        const branchData = querySnapshot.docs.flatMap(doc => doc.data().Brancher || []);
        setBranches([...new Set(branchData)]);
      } catch (error) {
        console.error("Error fetching branches:", error);
      }
    };

    fetchBranches();
  }, []);

  // 🔥 تحليل الحجوزات الشهرية بناءً على الشهر المختار
  useEffect(() => {
    const fetchMonthlyBookings = async () => {
      try {
        const startOfMonth = moment(selectedMonth).startOf('month').toDate();
        const endOfMonth = moment(selectedMonth).endOf('month').toDate();

        const q = query(
          collection(db, 'bookings'),
          where('createdAt', '>=', startOfMonth),
          where('createdAt', '<=', endOfMonth)
        );

        const snapshot = await getDocs(q);
        const allBookings = snapshot.docs.map(doc => doc.data());

        // تجميع الحجوزات حسب الأيام
        const groupedByDay = {};
        allBookings.forEach(b => {
          const date = moment(b.createdAt.toDate ? b.createdAt.toDate() : b.createdAt).format('D');
          groupedByDay[date] = (groupedByDay[date] || 0) + 1;
        });

        // ترتيب الأيام وتحويلها إلى بيانات للرسم البياني
        const chartData = Object.keys(groupedByDay)
          .sort((a, b) => a - b)
          .map(day => ({
            day,
            bookings: groupedByDay[day]
          }));

        setMonthlyData(chartData);
        setTotalMonthBookings(snapshot.size); // إجمالي الحجوزات في الشهر
      } catch (error) {
        console.error("Error fetching monthly bookings:", error);
      }
    };

    fetchMonthlyBookings();
  }, [selectedMonth]);

  return (
    <>
      <div>
        <p className='text-6xl text-center'>Welcome to Dashboard</p>
      </div>

      <div className='flex mt-10 justify-center gap-5 flex-wrap'>
        <div className='flex flex-col bg-white w-80 h-auto rounded-2xl items-center p-5 shadow'>
          <AiOutlineFileDone className='text-6xl mb-3'/>
          <p>Total Appointments Today</p>
          <p className='font-bold text-2xl'>{todayBookings}</p>
        </div>

        <div className='flex flex-col bg-white w-80 h-auto rounded-2xl items-center p-5 shadow'>
          <IoPeopleSharp className='text-6xl mb-3' />
          <p>Total Barbers</p>
          <p className='font-bold text-2xl'>{uniqueOurBarbers.length}</p>
        </div>

        <div className='flex flex-col bg-white w-80 h-auto rounded-2xl items-center p-5 shadow'>
          <FaCodeBranch className='text-6xl mb-3' />
          <p>Total Branches</p>
          <p className='font-bold text-2xl'>{branches.length}</p>
        </div>
      </div>

      {/* 🔥 تحديد الشهر */}
      <div className='flex justify-center mt-10'>
        <input
          type="month"
          value={selectedMonth.format('YYYY-MM')}
          onChange={(e) => setSelectedMonth(moment(e.target.value))}
          className='border border-gray-300 rounded-lg p-2 shadow-lg focus:outline-none focus:ring focus:ring-blue-300'
        />
      </div>

      <div className='mt-10 p-6 bg-white shadow rounded-2xl w-full max-w-5xl mx-auto'>
        <p className='text-center text-2xl font-semibold mb-6'>
          Bookings Overview — {selectedMonth.format('MMMM YYYY')}
        </p>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" label={{ value: 'Day of Month', position: 'insideBottom', offset: -2 }} />
            <YAxis label={{ value: 'Bookings', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="bookings" stroke="#2563eb" strokeWidth={3} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>

        <div className='text-center mt-8'>
          <p className='text-lg text-gray-600'>Total Bookings in {selectedMonth.format('MMMM YYYY')}</p>
          <p className='text-3xl font-bold text-blue-600 mt-2'>{totalMonthBookings}</p>
        </div>
      </div>
    </>
  );
}
