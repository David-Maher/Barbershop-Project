import { Link } from 'react-router-dom';
import './About.css';
import React, { useRef } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import 'swiper/css'
import 'swiper/css/navigation'
const barbers = [
  {
    name: 'Ahmed Adel',
    img: '/src/assets/images/46346.jpg',
    facebook: 'https://www.facebook.com/SaeidRabieMensalon',
    instagram: 'https://www.instagram.com/saeidrabie_/?hl=ar',
    twitter: 'https://x.com/saeid_rabie?lang=ar',
  },
  {
    name: 'Hassan Ali',
    img: '/src/assets/images/46346.jpg',
    facebook: 'https://www.facebook.com/SaeidRabieMensalon',
    instagram: 'https://www.instagram.com/saeidrabie_/?hl=ar',
    twitter: 'https://x.com/saeid_rabie?lang=ar',
  },
  {
    name: 'Mostafa Khaled',
    img: '/src/assets/images/46346.jpg',
    facebook: 'https://www.facebook.com/SaeidRabieMensalon',
    instagram: 'https://www.instagram.com/saeidrabie_/?hl=ar',
    twitter: 'https://x.com/saeid_rabie?lang=ar',
  },
  {
    name: 'Ali Samir',
    img: '/src/assets/images/46346.jpg',
    facebook: 'https://www.facebook.com/SaeidRabieMensalon',
    instagram: 'https://www.instagram.com/saeidrabie_/?hl=ar',
    twitter: 'https://x.com/saeid_rabie?lang=ar',
  },
  {
    name: 'Omar Mohamed',
    img: '/src/assets/images/46346.jpg',
    facebook: 'https://www.facebook.com/SaeidRabieMensalon',
    instagram: 'https://www.instagram.com/saeidrabie_/?hl=ar',
    twitter: 'https://x.com/saeid_rabie?lang=ar',
  },
  {
    name: 'Saeid Rabie',
    img: '/src/assets/images/46346.jpg',
    facebook: 'https://www.facebook.com/SaeidRabieMensalon',
    instagram: 'https://www.instagram.com/saeidrabie_/?hl=ar',
    twitter: 'https://x.com/saeid_rabie?lang=ar',
  },
]


const timelineData = [
  {
    year: "2001",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "2003",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "2005",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "2007",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "2012",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "2016",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "2020",
    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
        year: "2025",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }
];

export default function AboutUs() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Section: About Us */}
      <div  className="Aboutus flex justify-center items-center bg-black py-16">
        <div data-aos-duration="1500" data-aos="fade-left" className="flex-col text-center px-4">
          <p className="apout text-[#b8a269] text-7xl font-bold">About Us</p>
          <p className=" bulid text-white mt-5 font-medium text-4xl">
            We build our passion for the art of barbering through <br /> our commitment to our customers.
          </p>
<div  className="mt-10 flex justify-center">
  <Link
    to="/Booking"
    className="relative inline-flex h-12 active:scale-95 transition overflow-hidden rounded-lg p-[2px] focus:outline-none"
  >
    <span
      className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#b8a269_0%,#ffffff_50%,#b8a269_100%)]"
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

      {/* Section: Welcome + Info */}
      <div  className="tex bg-[#1a1a1a] py-14 px-5">
        <p   data-aos-duration="1500"  data-aos="fade-left" className="welcome text-center text-white text-6xl">
          Welcome to the Best <br /> Barbershop in Egypt
        </p>

        <div className="parent mt-14 flex flex-col md:flex-row justify-center items-center gap-10">
          <img   data-aos-duration="1500"  data-aos="fade-right" 
            className="bar h-96 rounded-lg"
            src="/src/assets/images/handsome-man-cutting-beard-barber-4.jpg"
            alt="barber"
          />

          <div  data-delay="1900" data-aos-duration="1900"  data-aos="fade-left" className="text-white max-w-xl">
            <Link
              to={"/ContactUs"}
              className="text-2xl font-bold text-[#b8a269]"
            >
              (+20) 011 10605652
            </Link>
            <p className="text-4xl mt-5">Working Hours</p>
            <hr className="mt-3 w-[100px] border-t-4 border-[#b8a269] rounded" />
            <div className="mt-5 flex flex-col gap-2">
              <div className="flex gap-3">
                <p className="text-2xl">Friday - Thursday</p>
                <p className="text-2xl">10:00 to 3:00</p>
              </div>
              <div className="flex gap-3">
                <p className="text-2xl">Sunday - Friday</p>
                <p className="text-2xl">10:00 to 3:00</p>
              </div>
            </div>
            <div className='makes'>
              <p className="mt-5 text-2xl font-extralight">
              Comprehensive Barber Services / Gift Packages / Unique Grooming Products / Juniper / Crafted
              Cocktails / Visa / <br/> MasterCard.
            </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Timeline Carousel */}
      <div  className="bg-[#1a1a1a] py-10 relative overflow-hidden">
                    <p  data-aos-duration="1900"  data-aos="fade-left"  className=" mb-7 text-center text-white font-bold text-5xl">Our Story</p>

        {/* Arrows */}
        <button
          onClick={() => scroll("left")}
          className=" cursor-pointer absolute left-2 top-1/2 z-5 -translate-y-1/2 bg-[#b8a269] w-10 h-10 rounded-full flex items-center justify-center text-black"
        >
          ❮
        </button>
        <button
          onClick={() => scroll("right")}
          className="  cursor-pointer absolute right-2 top-1/2 z-5 -translate-y-1/2 bg-[#b8a269] w-10 h-10 rounded-full flex items-center justify-center text-black"
        >
          ❯
        </button>

        {/* Scrollable Content  #1a1a1a */}
        <div  data-delay="1900" data-aos-duration="1900"  data-aos="fade-left" 
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto scroll-smooth px-20 scrollbar-hide"
        >
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="max-w-[350px] flex-shrink-0 h-auto object-cover text-white border-0 rounded-lg p-6 bg-[#1a1a1a]"
            >
              <h2 className="text-3xl font-bold text-[#b8a269] mb-3">{item.year}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='bg-[#333333] h-auto py-5'>
        <div className='UScont'>
        <p data-aos-duration="1500"  data-aos="fade-left" className= 'make text-white text-2xl text-center'>
          WE CAN MAKE YOUR AWESOMENESS
        </p>
        <p data-aos-duration="1500"  data-aos="fade-left" className='Super text-white text-5xl mt-5 mb-5 text-center'>
          Super Professional Barbers
        </p>
        </div>
                <div> 
        {/* card */}
        <div className='parent flex gap-5 justify-center items-center sm:flex-wrap sm:-gap[5px] md:flex-wrap '>
<div  data-aos-duration="1500"  data-aos="fade-left"  className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
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
<div data-aos-duration="1500"  data-aos="fade-left" className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
  <div className="card-body">
    <h2 className="card-title text-2xl text-[#b8a269]">Barber / Stylist</h2>
    <p className='text-[20px] font-bold'>Ahmed Adel</p>
    <div className='flex gap-3'>
<a    id="social"      href="https://www.facebook.com/SaeidRabieMensalon"><FaFacebook className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
<a    id="social"       href="https://www.instagram.com/saeidrabie_/?hl=ar"><FaInstagram className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>
<a    id="social"       href="https://x.com/saeid_rabie?lang=ar"><FaXTwitter className='text-[#b8a269] font-bold mt-2 text-[20px]' /></a>

    </div>
  </div>
  <figure>
    <img
      src="/src/assets/images/4234.jpg"
      alt="Shoes" />
  </figure>
</div>
<div data-aos-duration="1500"  data-aos="fade-right" className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
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
<div data-aos-duration="1500"  data-aos="fade-left" className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
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
<div data-aos-duration="1500"  data-aos="fade-right" className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
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
<div data-aos-duration="1500"  data-aos="fade-left"  className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
  <div  className="card-body">
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
  </figure></div>
{/*second perant card */}
<div className=' parent flex gap-5 justify-center items-center sm:flex-wrap sm:-gap[5px] md:flex-wrap md:-gap[5px]'>
<div data-aos-duration="1500"  data-aos="fade-right" className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
  <div className="card-body">
    <h2 className="card-title text-2xl text-[#b8a269] ">Barber / Stylist</h2>
    <p className='text-[20px] font-bold'>Ahmed Adel</p>
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
<div data-aos-duration="1500"  data-aos="fade-left" className="card bg-base-100 w-96 shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:bg-base-200">
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
             {/* end WE CAN MAKE YOUR AWESOMENESS  */} 
      </div>
    </>
  );
}
