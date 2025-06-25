import React from 'react'

export default function Footer() {
  return (
    <div className='flex'>
      <footer className="footer justify-evenly sm:footer-horizontal bg-neutral  text-neutral-content p-15">
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
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav className='text-2xl'>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </div>
  )
}
