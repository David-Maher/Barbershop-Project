import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Booking from './Pages/Booking';
import ErrorPage from './Pages/ErrorPage';
import Footer from './components/Footer';
import Header from './components/Header';
import OurBarbers from './Pages/OurBarbers';
import LandingPage from './components/LandingPage';
import Servies from './Pages/Servies';
import Prices from './Pages/Prices';
import SplashScreen from './components/SplashScreen';
import AdminLogin from './Pages/AdminLogin';
import AdminDashboard from './Admin-component/AdminDashboard';
import Articals from './Admin-component/Articals'
import Blogs from './Pages/Blogs';
import BlogDetails from './Pages/BlogDetails';
import FSQ from './Pages/FSQ';
import Branches from './Pages/Branches';
import Cookiepolicy from './Pages/Cookiepolicy';
import TermsOfUse from './Pages/TermsOfUse';
import PrivacyPolicy from './Pages/Privacypolicy';
import HomePageContent from './Admin-component/HomePageContent';
import LandingPageContent from './Admin-component/LandingPageContent';
import PricingPageContent from './Admin-component/PricingPageContent';
// كمبوننت علشان نخفي الهيدر والفوتر في صفحات معينة
function LayoutWrapper({ children }) {
  const location = useLocation();
  const hideLayout = location.pathname.startsWith('/Dashboard');

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className='App'>
    
      <BrowserRouter>
        <LayoutWrapper>
          <Routes>
  <Route path='/' element={<HomePage />} />
  <Route path='/HomePage' element={<HomePage />} />
  <Route path='/About' element={<AboutUs />} />
  <Route path='/ContactUs' element={<ContactUs />} />
  <Route path='/Booking' element={<Booking />} />
  <Route path='/Barbers' element={<OurBarbers />} />
  <Route path='/Landing-Page' element={<LandingPage />} />
  <Route path='/services' element={<Servies />} />
  <Route path='/Prices' element={<Prices />} />
  <Route path='/Admin' element={<AdminLogin />} />
  <Route path='/Dashboard' element={<AdminDashboard />} />
  <Route path='/Blogs' element={<Blogs />} />
  <Route path='/BlogDetails' element={<BlogDetails/>}></Route> 
  <Route path='/Articals' element={<Articals/>}></Route>
  <Route path="/blog/:id" element={<BlogDetails />} />
  <Route path='/FSQ' element={<FSQ/>} />
  <Route path='/Branch' element={<Branches/>} />
  <Route path='/Cookie' element={<Cookiepolicy />} />
  <Route path='/Terms' element={<TermsOfUse />} />
  <Route path='/Privacy' element={<PrivacyPolicy />} />
  <Route path='/HomePageContent' element={<HomePageContent />} />
  <Route path='/LandingPageContent' element={<LandingPageContent />} />
  <Route path='/PricingPageContent' element={<PricingPageContent />} />
  <Route path='*' element={<ErrorPage />} />
          </Routes>
        </LayoutWrapper>
      </BrowserRouter>
      {loading && <SplashScreen onFinish={() => setLoading(false)} />}
    </div>
  );
}
