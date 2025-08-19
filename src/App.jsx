// src/App.jsx
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
import Dashpoard from './Admin-component/Dashpoard';

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
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
        </LayoutWrapper>
      </BrowserRouter>
      {loading && <SplashScreen onFinish={() => setLoading(false)} />}
    </div>
  );
}
