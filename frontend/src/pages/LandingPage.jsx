import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FF] font-sans">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default LandingPage;
