import React from 'react';
import Navbar from '../components/layout/Navbar';
import HostHeroSection from '../components/host/HostHeroSection';
import HostBenefitsSection from '../components/host/HostBenefitsSection';
import TestimonialsSection from '../components/host/TestimonialsSection';
import HostCTASection from '../components/host/HostCTASection';
import Footer from '../components/layout/Footer';

const HostPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main>
        <HostHeroSection />
        <HostBenefitsSection />
        <TestimonialsSection />
        <HostCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HostPage;
