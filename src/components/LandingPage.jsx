import './Landing.css'
import { IoIosCut } from "react-icons/io";
import { GiRazor } from "react-icons/gi";
import { GiBeard } from "react-icons/gi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { GiHairStrands } from "react-icons/gi";
import { TbMoodKid } from "react-icons/tb";

export default function LandingPage() {
  return (
   <>
   <div className='LandingPage HeroBage flex  justify-start items-center  '>
      <div className='pad px-20'>
      <p className=' style text-white text-8xl font-bold'>Your Style<br/>
      Starts Here</p>
      <p className='build text-white text-2xl mt-7'>
        We build our passion for the art of barbering through <br/>
        our commitment to our customers. 
      </p>
      </div>
    </div>
    <div className=' SecondSection flex flex-wrap items-center justify-center '>
      <div className='serv pb-10'>
    <p className='barber text-white text-8xl'>Barbershop Services</p>
     <div className=' text-white mt-10 flex gap-4 justify-center  items-center flex-col lg:flex-row '>
            <div>
        <div className="card w-96  bg-[#b8a269]  card-md shadow-sm">
  <div className="card-body">
    <div className='flex items-center justify-center'>
    <IoIosCut  className=' text-5xl text-white'/>
    </div>
    <p className="text-center text-3xl font-bold">Hair Cut</p>
    <div className="justify-end card-actions">
    </div>
  </div>
</div>
    </div>
      <div>
        <div className="card w-96  bg-[#b8a269]  card-md shadow-sm">
  <div className="card-body">
        <div className='flex items-center justify-center'>
    <GiRazor
  className=' text-5xl text-white'/>
    </div>
    <p className='text-center text-3xl font-bold'>Shaving</p>
    <div className="justify-end card-actions">
    </div>
  </div>
</div>
    </div>
    
      <div>
        <div className="card w-96  bg-[#b8a269] card-md shadow-sm">
  <div className="card-body">
            <div className='flex items-center justify-center'>
    <GiBeard
  className=' text-5xl text-white'/>
    </div>

    <p className='text-center text-3xl font-bold'>Beard Trim
</p>
    <div className="justify-end card-actions">
    </div>
  </div>
</div>
    </div>
     </div>
           <div className='flex gap-5 mt-5'>
            <div>
        <div className="card w-96  bg-[#b8a269] card-md shadow-sm">
  <div className="card-body">
            <div className='flex items-center justify-center'>
    <HiOutlineColorSwatch
  className=' text-5xl text-white'/>
    </div>

    <p className='text-center font-bold text-3xl'>Hair Coloring
</p>
    <div className="justify-end card-actions">
    </div>
  </div>
</div>
    </div>
            <div>
        <div className="card w-96 bg-[#b8a269] card-md shadow-sm">
  <div className="card-body">
            <div className='flex items-center justify-center'>
    <GiHairStrands
  className=' text-5xl text-white'/>
    </div>
    <p className='text-center text-white font-bold text-3xl'>Hair Removal</p>
    <div className="justify-end card-actions">
    </div>
  </div>
</div>
    </div>
            <div>
        <div className="card w-96 bg-[#b8a269]  card-md shadow-sm">
  <div className="card-body">
            <div className='flex items-center justify-center'>
    <TbMoodKid
  className=' text-[55px] text-white'/>
    </div>
    <p className='text-center font-bold text-3xl'>Kids Haircut
</p>
  </div>
</div>
    </div>

    </div>
      </div>

      </div>
   </>
   
  )
}
