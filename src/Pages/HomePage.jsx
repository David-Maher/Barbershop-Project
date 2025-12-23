import './HomePage.css';
import { Link } from 'react-router-dom'
import { BiLogoWhatsapp } from "react-icons/bi";
import { useRef } from "react";
import { FaUser } from "react-icons/fa";
import { Helmet } from 'react-helmet';
export default function HomePage() {
  const reviews = [
    { name:"التويجري" , review:"صالون جميل ونظيف ومرتب، الموظفين مهارة وخدومين وخاصة حموده يعرف يعمل كل حاجة، حلاقة وتنظيف بشرة. أنصح به بقوة، خدمات متكاملة ومتنوعة" },
    { name:"khaled" , review:"أحسن حلاق في مصر وأنصح بالتعامل مع الحريف حسام عسكر، بيستاهل وشكر خاص ❤❤" },
    { name:"Rilz" , review:"من أفضل الحلاقين على مستوى الشرق الأوسط، والحلاق الفنان سامح الدليمي والله عسل وحلاق شاطر واستشواره حلو" },
    { name:"Mr. Pringles" , review:"صالون جميل ونظيف ومرتب، الموظفين مهارة وخدومين وخاصة حموده يعرف يعمل كل حاجة، حلاقة وتنظيف بشرة. أنصح به بقوة، خدمات متكاملة ومتنوعة" },
    { name:"Golden Gcc" , review:"حلاق ممتاز وشغل طيب وحلاقة احترافية، أشكر جميع العاملين" },
    { name:"Murad Alkurdi" , review:"قمة الإبداع، فنان بمعنى الكلمة. اسأل عن محمد الأسمر، تقييم 1000 من 10" },
    { name:"Waleed Sharqi" , review:"مكان روعة والعاملين على أعلى مستوى من الاحتراف والتعامل والنظافة" },
    { name:"عادل المقاطي" , review:"أفضل حلاق في مصر، استقبال رائع وخدمة أروع." },
    { name:"Abdullah Mansoor" , review:"صالون حلاقة جميل جداً .. عمالة مرتبة والحق لله شغل نظيف ومرتب" },
    { name:"تركي بن صالح" , review:"صالون متميز واستقبال حلو يحرجونك بحسن المعاملة من أصغر موظف لأكبر موظف. أشكر الموظف عبدالله صابر على خفة اليد، فنان تحليق. أتمنى يفتح سيد ربيع عندنا بالسعودية" },
  ];

  const scrollRef = useRef();
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };


  return (
    <>
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="الصفحة الرئيسية" />
        <title>الصفحة الرئيسية</title>
        <meta name="robots" content="index, follow" />
    </Helmet>
      {/* Hero */}
      <div className='HomePage flex items-center-safe justify-end '  >
        <div data-aos-duration="1500" data-aos="fade-left" className="phot text-white ">
          <div className='sass'>
          <p className="saeed text-8xl pr-20 ">Saeed <br/> Rabee Barber shop</p>
          </div>
          <p className=" fontssaed mt-5 text-2xl text-white" >
            Unforgettable grooming experience in  a <br/>  barbershop near You
          </p>
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
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512"
                     height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
 
      {/* About */}
      <div className="back h-auto text-center p-6">
        <p data-aos="fade-left" data-aos-duration="1500"
           className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
          Welcome to the Best Barbershop in Egypt
        </p>

        <div className="flex gap-4 pt-10 justify-center items-center flex-col lg:flex-row">
          <div data-aos-duration="1500" data-aos="zoom-in-up">
            <img className="w-[90vw] max-w-[400px] h-auto rounded-md"
                 src="public/images/hipster-style-bearded-man_158595.webp" alt=""/>
          </div>
          <div data-aos="fade-left" data-aos-duration="1500">
            <img className="w-[90vw] max-w-[400px] h-auto rounded-md"
                 src="public/images/man-cuts-his-beard-barbershop_111.webp" alt=""/>
          </div>
        </div>

        <div className="flex gap-4 justify-center mt-5 items-center flex-col lg:flex-row">
          <img data-aos-duration="1500" data-aos="zoom-in-up"
               className="w-[90vw] max-w-[350px] h-auto rounded-md"
               src="public/images/Saeed_Rabee_7_21_2025_23_20_5_contentcore.xyz.png" alt=""/>
          <div data-aos="fade-left" data-aos-duration="1500">
            <Link to="/ContactUs" className="text-2xl font-bold text-[#b8a269] block mt-4">011 10605652</Link>
            <p className="text-white text-3xl sm:text-4xl mt-2">Working Hours</p>
            <div className="flex flex-col sm:flex-row text-white text-2xl gap-2 mt-5 justify-center sm:justify-start">
              <p>Friday - Thursday</p>
              <p>10:00 to 3:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Who Are We */}
      <div className='flex sm:flex-wrap justify-center text-center bg-[#333333]'>
        <div className='tazbet flex flex-col md:grid md:grid-cols-2  items-center text-white text-start  w-[50%]'>
          <div className='intruduse'>
            <div className='int'>
            <p data-aos-duration="1500" data-aos="zoom-in-up" className=' welcome text-2xl'>welcome to the board</p>
            <p data-aos-duration="1500" data-aos="zoom-in-up" className=' who text-5xl'>Who Are We</p>
            </div>
            <hr data-aos-duration="1500" data-aos="zoom-in-up" className=' mt-5 w-[100px] border-t-3 rounded  text-[#b8a269]' />
           <div className='shshop'>
            <p data-aos-duration="1500" data-aos="zoom-in-up" className=' mt-5'>
              The Barber Shop used to be greater than simply an area to get a hairstyle or cut; it was a 
              center of the community where people came together to bond, to socialize and to exchange  
              suggestions. With the goal of bringing this camaraderie back in style, Barber Shop, a barber  store 
              and  shop with places  in El Shorouk city and another places in cairo.
            </p>
           </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" className='sora p-2  text-white  w-[600px]'>
            <img className='photo1 w-[700px] w-sm[auto] h-auto'
                 src="public/images/serious-man-while-shaving-him5.webp" alt="serious-man-while-shaving"/>
          </div>
        </div>
      </div>

      {/* Video + Store */}
      <div className=' bg-[#333333]'>
        <div data-aos="fade-right" data-aos-duration="1500" className='mockup flex justify-around pt-10 items-center'>
          <div className="mockup-phone border-[#b8a269] justify-center">
            <div className="mockup-phone-camera"></div>
            <div className="mockup-phone-display h-full">
              <video className='videos h-full' autoPlay controls muted
                     src="public/images/Unleash your inner confidence.mp4" ></video>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" className='Saed'>
            <p className='  text-[#b8a269]  rotate-180 text-7xl font-light ' rotate-90
               style={{ writingMode: 'vertical-lr' }}>SAEID RABIE</p>
          </div>
          <div data-aos="fade-left" data-aos-duration="1500" className='maxen w-[40%] '>
            <p className='store text-amber-50 text-2xl mt-5'>
              Welcome to our store, Saeed Rabie where excellence meets quality. With years of experience, we pride ourselves on delivering top-notch products and exceptional customer service. Our dedicated team works swiftly and efficiently to ensure every customer leaves satisfied. Located in a convenient and welcoming space, we strive to create a comfortable shopping experience for all. Trust us for reliability, speed, and the highest standards in every interaction.
            </p>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="bg-[#1a1a1a] py-10 relative overflow-hidden mt-10">
          <p data-aos-duration="1900" data-aos="fade-up"
             className="mb-7 text-center text-white font-bold text-5xl">
           Testimonials
          </p>

          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-[#b8a269] w-10 h-10 rounded-full flex items-center justify-center text-black z-10"
          >
            ❮
          </button>
          <button
              onClick={() => scroll("right")}
            className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-[#b8a269] w-10 h-10 rounded-full flex items-center justify-center text-black z-10"
          >
            ❯
          </button>

          {/* Scrollable */}
          <div data-aos="fade-right" data-aos-duration="1900"
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto scroll-smooth px-20 scrollbar-hide"
          >
            {reviews.map((item, index) => (
              <div
                key={index}
                className="max-w-[350px] flex-shrink-0 bg-[#333333] rounded-lg shadow-lg p-6 text-white"
              >
                <div className=' flex justify-center p-5 '>
                  <FaUser className='text-[#b8a269]'/>
                </div>
                <h2 className="text-xl font-bold text-[#b8a269] mb-3 text-center">{item.name}</h2>
                <p className="text-gray-300 text-md leading-relaxed">{item.review}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Details */}
        <div data-aos="zoom-in" data-aos-duration="1500" className='mt-10'>
          <p className='text-4xl text-[#b8a269] text-center'>Our Details</p>
        </div>
        <div className='Details mt-5 flex flex-col md:flex-row justify-evenly p-5 md:p-10 gap-8'>
          {/* ساعات العمل */}
          <div data-aos="zoom-in" data-aos-duration="1500"
               className='flex flex-col gap-2 items-center md:text-left'>
            <p className='font-bold text-2xl text-[#b8a269]'>Working Hours</p>
            <div className='flex gap-3 justify-center md:justify-start'>
              <p className='text-white'>Friday - Thursday</p>
              <p className='text-white'>10:00 to 3:00</p>
            </div>
            <div className='flex gap-3 justify-center md:justify-start'>
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
          <div data-aos="zoom-in" data-aos-duration="1700"
               className='flex flex-col items-center md:items-start text-center md:text-left'>
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
