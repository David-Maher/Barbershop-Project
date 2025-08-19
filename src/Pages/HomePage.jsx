import './HomePage.css';
import { Link } from 'react-router-dom'
import { BiLogoWhatsapp } from "react-icons/bi";
export default function HomePage() {
  
  return (
    <>
    <div className='HomePage flex items-center-safe justify-end'>
      <div data-aos-duration="1500" data-aos="fade-left" className="phot text-white ">
    <p className="saeed text-8xl pr-20 ">Saeed <br/> Rabee Barber shop</p>
    <p className=" fontssaed mt-5 text-2xl text-white" >Unforgettable grooming experience in  a <br/>  barbershop near You</p>
   <div className='butt mt-10'>
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
<div className="back h-auto text-center p-6">
  <p
    data-aos="fade-left"
    data-aos-duration="1500"
    className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold"
  >
    Welcome to the Best Barbershop in Manhattan
  </p>

  <div className="flex gap-4 pt-10 justify-center items-center flex-col lg:flex-row">
    <div data-aos-duration="1500" data-aos="zoom-in-up">
      <img
        className="w-[90vw] max-w-[400px] h-auto rounded-md"
        src="/src/assets/images/hipster-style-bearded-man_158595.jpg"
        alt=""
      />
    </div>

    <div data-aos="fade-left" data-aos-duration="1500">
      <img
        className="w-[90vw] max-w-[400px] h-auto rounded-md"
        src="/src/assets/images/man-cuts-his-beard-barbershop_111.jpg"
        alt=""
      />
    </div>
  </div>

  <div className="flex gap-4 justify-center mt-5 items-center flex-col lg:flex-row">
    <img
      data-aos-duration="1500"
      data-aos="zoom-in-up"
      className="w-[90vw] max-w-[350px] h-auto rounded-md"
      src="/src/assets/images/Saeed_Rabee_7_21_2025_23_20_5_contentcore.xyz.png"
      alt=""
    />

    <div data-aos="fade-left" data-aos-duration="1500">
      <Link to="/ContactUs" className="text-2xl font-bold text-[#b8a269] block mt-4">
        011 10605652
      </Link>
      <p className="text-white text-3xl sm:text-4xl mt-2">Working Hours</p>
      <div className="flex flex-col sm:flex-row text-white text-2xl gap-2 mt-5 justify-center sm:justify-start">
        <p>Friday - Thursday</p>
        <p>10:00 to 3:00</p>
      </div>
    </div>
  </div>
</div>
  <div className='flex sm:flex-wrap justify-center text-center bg-[#333333]'>
    <div className='tazbet flex flex-col md:grid md:grid-cols-2  items-center text-white text-start  w-[50%]'>
      <div data-aos-duration="1500" data-aos="zoom-in-up" className='intruduse'>
    <p className=' text-2xl'>welcome to the board</p>
    <p className='text-5xl'>Who Are We</p>
    <hr className=' mt-5 w-[100px] border-t-3 rounded  text-[#b8a269]' />
    <p className='shshop mt-5'>
      The Barber Shop used to be greater than simply an area to get a hairstyle or cut; it was a <br/> center of the community where people came together to bond, to socialize and to 
      exchange  <br/> suggestions. With the goal of bringing this camaraderie back in style, Barber Shop, a barber  store <br/> and  shop with places  in El Shorouk city <br/>and another places in cairo  .  
    </p>
      </div>
    <div data-aos="fade-left" data-aos-duration="1500" className='sora p-2 text-white  w-[600px]'>
      <img  className='photo1 w-[700px] w-sm[auto] h-auto' src="/src/assets/images/serious-man-while-shaving-him5.jpg" alt="" />
    </div>
    </div>
    </div>
    <div className=' bg-[#333333]'>

<div  data-aos="fade-right" data-aos-duration="1500" className='mockup flex justify-around pt-10 items-center'>
  
<div className="mockup-phone border-[#b8a269] justify-center">
  <div className="mockup-phone-camera"></div>
  <div className="mockup-phone-display h-full">
    <video className='videos h-full' autoPlay controls muted src="/src/assets/images/Unleash your inner confidence.mp4"></video>
  </div>
</div>
<div data-aos="fade-left" data-aos-duration="1500" className='Saed'>
  <p className='  text-[#b8a269]  rotate-180 text-7xl font-light ' rotate-90 style={{ writingMode: 'vertical-lr' }}>SAEID RABIE</p>
</div>
<div  data-aos="fade-left" data-aos-duration="1500" className='maxen w-[40%]'>
  <p className='store text-amber-50 text-2xl mt-5'>
Welcome to our store, Saeed Rabie, where excellence meets quality. With years of experience, we pride ourselves on delivering top-notch products and exceptional customer service. Our dedicated team works swiftly and efficiently to ensure every customer leaves satisfied. Located in a convenient and welcoming space, we strive to create a comfortable shopping experience for all. Trust us for reliability, speed, and the highest standards in every interaction.
</p>
</div>
</div>
<div data-aos="zoom-in" data-aos-duration="1500" className='mt-10'>
  <p className='text-4xl text-[#b8a269] text-center'>Our Details</p>
</div>
<div className='Details mt-5  flex flex-col md:flex-row justify-evenly p-5 md:p-10 gap-8'>

  {/* ساعات العمل */}
  <div data-aos="zoom-in" data-aos-duration="1500" className='flex flex-col gap-2 items-center md:text-left'>
    <p className='font-bold text-2xl text-[#b8a269]'>Working Hours</p> 
    <div className='flex gap-3 justify-center md:justify-start'>
      <p className='text-white'>Friday - Thursday</p>
      <p className='text-white'>10:00 to 3:00</p>
    </div>
    <div  className='flex gap-3 justify-center md:justify-start'>
      <p className='text-white'>Sunday - Monday</p>
      <p className='text-white'>10:00 to 3:00</p>
    </div>
    <div className='flex gap-3 justify-center md:justify-start'>
      <p className='text-white'>Tuesday - Wednesday</p>
      <p className='text-white'>10:00 to 3:00</p>
    </div>
    <div className='flex gap-3 justify-center md:justify-start'>
      <p className='text-white'>Thursday - Friday</p>
      <p className='text-white'>10:00 to 3:00</p>
    </div>
  </div>

  {/* الموقع */}
  <div data-aos="zoom-in" data-aos-duration="1700" className='text-center md:text-left'>
    <p className='font-bold text-2xl text-[#b8a269]'>Location</p>
    <div className='flex flex-col gap-2'>
      <p className='text-white'>Nasr City - New Cairo - El Sherouk</p>
      <p className='text-white'>Mohandeseen - Zamalek - Alexandria</p>
      <p className='text-white'>Marina 4 - Marina 5 - Chilout Marassi</p>
      <p className='text-white'>Abbas el Akkad St., Nasr City, Cairo</p>
    </div>
  </div>

  {/* الواتساب */}
  <div data-aos="zoom-in" data-aos-duration="1700" className='flex flex-col items-center md:items-start text-center md:text-left'>
    <a href="https://wa.link/zu1erp">
      <BiLogoWhatsapp className='text-6xl text-green-500' />
    </a>
    <p className='text-2xl font-bold text-amber-50'>Questions?</p>
    <p className='text-white'>
      Add us on WhatsApp & send <br /> queries for instant reply.
    </p>
  </div>

</div>
    </div>
    </>
  )
}
