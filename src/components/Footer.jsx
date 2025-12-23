import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    
    <div className='flex'>
      <footer className="footer justify-evenly sm:footer-horizontal bg-neutral  text-neutral-content p-15">
  <nav className='text-2xl'>
    <h6 className="footer-title">Follow Us</h6>
    <a href="https://www.facebook.com/SaeidRabieMensalon/"><FaFacebook /></a>
    <a href="https://www.instagram.com/saeidrabie_/"><FaInstagram /></a>
    <a href="https://x.com/saeid_rabie?lang=ar"><FaXTwitter /></a>
    <a href="https://www.tiktok.com/discover/%D8%B5%D8%A7%D9%84%D9%88%D9%86-%D8%B3%D8%B9%D9%8A%D8%AF-%D8%B1%D8%A8%D9%8A%D8%B9?lang=ar"><FaTiktok /></a>
  </nav>
  <nav className='text-2xl'>
    <h6 className="footer-title">Services</h6>
    <p>Hair Cut</p>
    <p>Shaving</p>
    <p>Beard Trim</p>
    <p>Kids Haircut
</p>
  </nav>
  <nav className='text-2xl'>
    <h6 className="footer-title ">Company</h6>
    <Link to="/About">About us</Link>
    <Link to="/ContactUs">ContactUs</Link>
    <Link to="/Blogs">Blogs</Link>
    <Link to="/Branch">Branches</Link>
  </nav>
  
  <nav className='text-2xl'>
    <h6 className="footer-title">Legal</h6>
    <Link className=' link ease-in  link-hover' to="/Terms">Terms of Use</Link>
    <Link className=' link ease-in  link-hover' to="/Privacy">Privacy Policy</Link>
    <Link className=' link ease-in  link-hover' to="/Cookie">Cookie Policy</Link> 
    
    <Link className=' link ease-in  link-hover' to="/FSQ">Frequently Asked Questions</Link>
  </nav>
</footer>
    </div>
    <div className='bg-[#1e1e1e]'>
      <p className='text-center p-5 text-white text-2xl'>🛠️ Built smarter, built better – by Eng. David Maher</p>
    </div>
    </>
  )
}
