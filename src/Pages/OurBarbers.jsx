import React, { useEffect, useState } from 'react';
import './OurBaraber.css';
import { Link } from 'react-router-dom';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase';
import { Helmet } from 'react-helmet';

export default function OurBarbers() {

  const [barbers, setBarbers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "BarbersDashboard"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title || "No Name",
        description: doc.data().description || "Barber / Stylist",
        image: doc.data().image || "",
        facebook: doc.data().facebook || "#",
        instagram: doc.data().instagram || "#",
        twitter: doc.data().twitter || "#"
      }));
      setBarbers(data);
    });

    return () => unsub();
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="تعرف على أفضل الحلاقين داخل صالون Saeid Rabie Men Salon" />
        <title>Our Barbers</title>
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero */}
      <div className='OurBarbers flex justify-center items-center'>
        <div className='text-white pb-50'>
          <p className='capitalize text-center text-4xl font-bold'>Our barbers</p>

          <div className='mt-5'>
            <Link
              to="/Booking"
              className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[2px] focus:outline-none"
            >
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] 
              bg-[conic-gradient(from_90deg_at_50%_50%,#b8a269_0%,#f1f1f1_50%,#b8a269_100%)]"></span>

              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center 
              rounded-lg bg-[#b8a269] px-7 text-sm font-bold text-white backdrop-blur-3xl gap-2">
                Book an appointment

                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" 
                  viewBox="0 0 448 512" height="1em" width="1em">
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className='pt-10 pb-10 bg-[#333333]'>
        <div className='parent flex gap-5 justify-center items-center flex-wrap'>

          {barbers.map((barber) => (
            <div key={barber.id}
              className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out 
              hover:shadow-xl hover:scale-105 hover:bg-base-200">

              <div className="card-body">
                <h2 className="card-title text-2xl text-[#b8a269]">{barber.description}</h2>
                <p className='text-[20px] font-bold'>{barber.title}</p>

              </div>

              <figure>
                <img
                  src={barber.image}
                  alt={barber.name}
                  className='w-full h-72 object-cover bg-[#b8a269] self-center'
                />
              </figure>
            </div>
          ))}

        </div>
      </div>  {/*End of cards */}
    </>
  );
}
