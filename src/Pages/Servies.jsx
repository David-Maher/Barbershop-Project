import './Servies.css'
import { Link } from 'react-router-dom'
import { IoIosCut } from "react-icons/io";
import { GiRazor } from "react-icons/gi";
import { TbMoodKid } from "react-icons/tb";
import { GiBeard } from "react-icons/gi";
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase';
import { Helmet } from 'react-helmet';
export default function Servies() {
  const icons = {
    "Hair Cut": <IoIosCut className="text-5xl text-white mb-3" />,
    "Shaving": <GiRazor className="text-5xl text-white mb-3" />,
    "Beard Trim": <GiBeard className="text-5xl text-white mb-3" />,
    "Kids Haircut": <TbMoodKid className="text-5xl text-white mb-3" />
  };

  const [services, setServices] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "ServiceDashboard"), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        title: doc.data().title || "No title",
        description: doc.data().description || "E£0 and up",
        imageUrl: doc.data().imageUrl || ""
      }));
      setServices(data);
    });

    return () => unsub();
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="الخدمات التي تُعزز من تجربتك للحلاقة" />
        <title>افضل الخدمات التي نُقدمها</title>
        <meta name="robots" content="index, follow" />
      
      </Helmet>
      {/* Hero Section */}
      <div className='Servies Heros justify-center items-center flex'>
        <div className='ser text-white'>
          <p className='serv text-8xl'>Our Services</p>
          <div className='mt-5 flex justify-center'>
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

      {/* Barbershop Services Section */}
      <div className='bg-[#1a1a1a]'>
        <p className='text-center py-5 text-5xl text-white font-bold'>Barbershop Services</p>
        <div className='flex gap-4 justify-evenly items-center flex-col lg:flex-row'>
          <div>
            <img
              className='PHOTO lg:w-[549px] lg:h-[526px] sm:w-[768px] pb-10'
              src='public/images/handsome-man-cutting-beard-barber-4.webp'
              alt=''
            />
          </div>
          <div className="sec grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
            {services.slice(0, 4).map((service) => (
              <div key={service.id} className="flex transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105  flex-col justify-start items-center bg-[#b8a269] w-full md:w-[300px] lg:w-[350px] p-4 rounded-md">
                {icons[service.title] || <IoIosCut className="text-5xl text-white mb-3" />}
                <p className="text-white text-2xl lg:text-3xl font-bold text-center">{service.title}</p>
                <p className="text-white text-base lg:text-xl mt-2 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Services Cards */}
        <div className='mt-10'>
          <p className='text-white text-4xl lg:text-5xl text-center font-bold'>Our Services</p>
          <div className='serv mt-10 flex flex-wrap justify-center gap-6'>
            {services.map((service) => (
              <div key={service.id} className="flex flex-col transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105  justify-start items-center bg-[#b8a269] w-full md:w-[300px] lg:w-[350px] p-4 rounded-md">
                {service.imageUrl && (
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-[150px] lg:h-[180px] object-cover rounded-t-md mb-3"
                  />
                )}
                <p className="text-white text-2xl lg:text-3xl font-bold text-center">{service.title}</p>
                <p className="text-white text-base lg:text-xl mt-2 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Benefits */}
        <div className='mt-10'>
          <p className='text-center text-5xl text-white font-bold'>Our Benefits</p>
          <div className='mt-10  flex justify-center items-center flex-col lg:flex-row'>
            <div className='First lg:w-[600px] transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 md:w-[600px] md:h-[600px]'>
              <p className='text-white text-2xl font-semibold'>Quality Products</p>
            </div>
            <div className='Second lg:w-[600px] transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 md:w-[600px] md:h-[600px]'>
              <p className='text-white text-2xl font-semibold'>Quality Equipment</p>
            </div>
            <div className='Third lg:w-[600px] transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 md:w-[600px] md:h-[600px]'>
              <p className='text-white text-2xl font-semibold'>Professional Barbers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
