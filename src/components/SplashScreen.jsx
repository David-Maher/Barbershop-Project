// src/components/SplashScreen.jsx
import React, { useEffect, useState } from 'react';
import './SplashScreen.css';

const SplashScreen = ({ onFinish }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const startAnimation = setTimeout(() => {
      setAnimate(true);
    }, 2000); // يبدأ الأنيميشن بعد 2 ثانية

    const finishSplash = setTimeout(() => {
      onFinish();
    }, 3000); // ينتهي بعد ثانية من بداية الأنيميشن

    return () => {
      clearTimeout(startAnimation);
      clearTimeout(finishSplash);
    };
  }, [onFinish]);

  return (
    <div className={`splash-container ${animate ? 'animate' : ''}`}>
      <div className="top-pane"></div>
      <div className="bottom-pane"></div>
      <div className="logo">
                <p className='text-white text-8xl font-bold'>Saeed Rabee</p>
      </div>
    </div>
  );
};

export default SplashScreen;
