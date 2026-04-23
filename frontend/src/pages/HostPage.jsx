import React from 'react';
import Navbar from '../components/layout/Navbar';
import HostHeroSection from '../components/host/HostHeroSection';

const HostPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main>
        <HostHeroSection />
      </main>
    </div>
  );
};

export default HostPage;
