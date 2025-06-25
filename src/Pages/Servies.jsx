import './Servies.css'
import { Link } from 'react-router-dom'
import { IoIosCut } from "react-icons/io";
import { GiRazor } from "react-icons/gi";
import { TbMoodKid } from "react-icons/tb";
import { GiBeard } from "react-icons/gi";

export default function Servies() {
  
  return (
    <>
    <div className='Servies Heros justify-center items-center flex'>
     <div className=' text-white'>
      <p className=' serv text-8xl '>Our Services</p>
      <div className=' mt-5  flex justify-center'>
    <Link className=' bg-[#b8a269] rounded-[11px] text-[17px] p-2 ' to={"/Booking"}>Book an appointment</Link>        </div>
      </div>
    </div>
    <div className='bg-[#1a1a1a]'>
      <p className='text-center py-5 text-5xl text-white font-bold'>Barbershop Services</p>
<div className='flex gap-4 justify-evenly items-center flex-col lg:flex-row'>
  <div>
    <img
      className='PHOTO lg:w-[549px] lg:h-[526px] sm:w-[768px] pb-10'
      src='./src/assets/images/handsome-man-cutting-beard-barber-4.jpg'
      alt=''
    />
    
  </div>
<div className="sec grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
  <div  data-aos="fade-left" data-aos-duration="1400"  className="text-center flex flex-col justify-center items-center bg-[#b8a269] w-full md:w-[300px] lg:w-[350px] h-[200px] lg:h-[250px]">
    <IoIosCut className="text-5xl text-white" />
    <p className="text-white text-3xl font-bold">Hair Cut</p>
  </div>

  <div data-aos="fade-right" data-aos-duration="1600" className="text-center flex flex-col justify-center items-center bg-[#b8a269] w-full md:w-[300px] lg:w-[350px] h-[200px] lg:h-[250px]">
    <GiRazor className="text-5xl text-white" />
    <p className="text-white text-3xl font-bold">Shaving</p>
  </div>

  <div data-aos="fade-left" data-aos-duration="1600" className="text-center flex flex-col justify-center items-center bg-[#b8a269] w-full md:w-[300px] lg:w-[350px] h-[200px] lg:h-[250px]">
    <GiBeard className="text-5xl text-white" />
    <p className="text-white text-3xl font-bold">Beard Trim</p>
  </div>

  <div data-aos="fade-right" data-aos-duration="1600" className="text-center flex flex-col justify-center items-center bg-[#b8a269] w-full md:w-[300px] lg:w-[350px] h-[200px] lg:h-[250px]">
    <TbMoodKid className="text-5xl text-white" />
    <p className="text-white text-3xl font-bold">Kids Haircut</p>
  </div>
</div>
</div>
    <div className='mt-10'>
    <p className='text-white text-5xl text-center font-bold'>Our Services</p>
    <div className='serv mt-10 flex gap-4 justify-center  items-center flex-col lg:flex-row '>
    <div>
      <img className='md:w-[600px] md:h-[600px] lg:w-[350px]  lg:h-[250px]' src="./src/assets/images/ffff.jpg" alt="" />
    <div className='mt-10 text-center'>
      <p className='text-white text-3xl font-bold'>Haircuts</p>
      <p className='text-[#b8a269] text-xl pt-3  font-bold'>E£350 and up</p>
    </div>
    </div>
    <div>
      <img className='md:w-[600px] md:h-[600px] lg:w-[350px] lg:h-[250px]' src="./src/assets/images/jjjjjjjjjjj.jpg" alt="" />
        <div className='mt-10 text-center'>
      <p className='text-white text-3xl font-bold'>Bread & more
</p>
      <p className='text-[#b8a269]   text-2xl pt-3 font-bold'>E£200 and up</p>
    </div>

    </div>
    <div>
      <img className='md:w-[600px] md:h-[600px] lg:w-[350px]  lg:h-[250px]' src="./src/assets/images/kjjkk.jpg" alt="" />
        <div className='mt-10 text-center'>
      <p className='text-white text-3xl font-bold'>Shaving
</p>
      <p className='text-[#b8a269]  text-2xl  pt-3 font-bold'>E£200 and up</p>
    </div>

    </div>
    <div>
      <img className='md:w-[600px] md:h-[600px] lg:w-[350px]  lg:h-[250px]' src="./src/assets/images/888.jpg" alt="" />
        <div className='mt-10 text-center'>
      <p className='text-white text-3xl font-bold'>Razor Blade</p>
      <p className='text-[#b8a269] pt-3 font-bold'>E£350 and up</p>
    </div>
    </div> {/*end of last div razor */}
    </div>
    </div>
        <div className='serv mt-10 flex gap-4 justify-center  items-center flex-col lg:flex-row '>
    <div>
      <img className='md:w-[600px] md:h-[600px] lg:w-[350px]  lg:h-[250px]' src="./src/assets/images/barber.jpg" alt="" />
    <div className='mt-10 text-center'>
      <p className='text-white text-3xl font-bold'>Skinfade</p>
      <p className='text-[#b8a269] text-xl pt-3  font-bold'>E£350 and up</p>
    </div>
    </div>
    <div>
      <img className='md:w-[600px] md:h-[600px] lg:w-[350px]  lg:h-[250px]' src="./src/assets/images/qw.jpg" alt="" />
        <div className='mt-10 text-center'>
      <p className='text-white text-3xl font-bold'>Full Service
</p>
      <p className='text-[#b8a269]   text-2xl pt-3 font-bold'>E£200 and up</p>
    </div>

    </div>
    <div>
      <img className='md:w-[600px] md:h-[600px] lg:w-[350px]  lg:h-[250px]' src="./src/assets/images/54634.jpg" alt="" />
        <div className='mt-10 text-center'>
      <p className='text-white text-3xl font-bold'>Beard Trim
</p>
      <p className='text-[#b8a269]  text-2xl  pt-3 font-bold'>E£200 and up</p>
    </div>

    </div>
    <div>
      <img className='md:w-[600px] md:h-[600px] lg:w-[350px]  lg:h-[250px]' src="./src/assets/images/e213.jpg" alt="" />
        <div className='mt-10 text-center'>
      <p className='text-white text-3xl font-bold'>Kid's Cut</p>
      <p className='text-[#b8a269] pt-3 text-2xl font-bold'>E£350 and up</p>
    </div>
    </div>
    </div>
    <div className='mt-10'>
      <p className=' text-center text-5xl text-white font-bold'>Our Benefits</p>
      <div className='mt-10 flex justify-center items-center flex-col lg:flex-row'>
      <div className='First lg:w-[600px] md:w-[600px] md:h-[600px] '>
      <p className='text-white text-2xl font-semibold'>Quality Products</p>
      </div>
      <div className='Second lg:w-[600px] md:w-[600px] md:h-[600px] '>
      <p className='text-white text-2xl font-semibold'>Quality Equipment</p>
      </div>
      <div className='Third lg:w-[600px] md:w-[600px] md:h-[600px] '>
      <p className='text-white text-2xl font-semibold'>professional barbers</p>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}
