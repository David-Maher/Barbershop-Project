import './Landing.css'
import { IoIosCut } from "react-icons/io";
import { GiRazor } from "react-icons/gi";
import { GiBeard } from "react-icons/gi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { GiHairStrands } from "react-icons/gi";
import { TbMoodKid } from "react-icons/tb";
import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
export default function LandingPage() {
  const [heroTitle, setHeroTitle] = useState("");
  const [HeroContent, setHeroContent] = useState("");
  const [secondLandingTitle, setSecondLandingTitle] = useState("");
  const [services, setServices] = useState([]);
   useEffect(() => {
    const landingRef = doc(db, "LandingPage", "LandingPanner");
    const secondRef = doc(db, "LandingPage", "SecondLandingTitle");
    const servicesRef = doc(db, "LandingPage", "Services");

    const unsub1 = onSnapshot(landingRef, (snap) => {
      if (snap.exists()) {
        setHeroTitle(snap.data().LandingTitle || "");
        setHeroContent(snap.data().LandingContent || "");
      }
    });

    const unsub2 = onSnapshot(secondRef, (snap) => {
      if (snap.exists()) {
        setSecondLandingTitle(snap.data().SecondLandingpageTitle || "");
      }
    });

    const unsub3 = onSnapshot(servicesRef, (snap) => {
      if (snap.exists()) {
        setServices(Array.isArray(snap.data().services) ? snap.data().services : []);
      }
    });

    return () => {
      unsub1();
      unsub2();
      unsub3();
    };
  }, []);
  return (
   <>
   <div className='LandingPage HeroBage flex  justify-start items-center  '>
      <div data-aos-duration="1500" data-aos="fade-left" className='pad  px-20'>
      <p className=' style text-white text-6xl font-bold'>{heroTitle}</p>         
      <p className='build text-white text-2xl mt-7'>
        {HeroContent} 
      </p>
      </div>
    </div>
    <div className=' SecondSection flex flex-wrap items-center justify-center '>
      <div  className='serv  pb-10'>
    <p className='barber text-white text-center text-8xl'>{secondLandingTitle}</p>
     <div className=' text-white mt-10 flex gap-4 justify-center  items-center flex-col lg:flex-row '>
            <div>
        <div className="card w-96 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105  bg-[#b8a269]  card-md shadow-sm">
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
        <div className="card w-96  transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 bg-[#b8a269]  card-md shadow-sm">
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
        <div className="card w-96  transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 bg-[#b8a269] card-md shadow-sm">
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
        <div className="card w-96  transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 bg-[#b8a269] card-md shadow-sm">
  <div className="card-body">
            <div className='flex items-center justify-center'>
    <HiOutlineColorSwatch
  className=' text-5xl text-white'/>
    </div>

    <p className='text-center text-white font-bold text-3xl'>Hair Coloring
</p>
    <div className="justify-end card-actions">
    </div>
  </div>
</div>
    </div>
            <div>
        <div className="card w-96  transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 bg-[#b8a269] card-md shadow-sm">
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
        <div className="card w-96 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 bg-[#b8a269]  card-md shadow-sm">
  <div className="card-body">
            <div className='flex items-center justify-center'>
    <TbMoodKid
  className=' text-[55px] text-white'/>
    </div>
    <p className='text-center text-white font-bold text-3xl'>Kids Haircut
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
