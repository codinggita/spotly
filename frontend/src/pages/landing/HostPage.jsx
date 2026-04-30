import React from 'react';
import Navbar from '../../components/layout/Navbar';
import HostHeroSection from '../../components/landing/HostHeroSection';
import HostBenefitsSection from '../../components/landing/HostBenefitsSection';
import TestimonialsSection from '../../components/landing/TestimonialsSection';
import HostCTASection from '../../components/landing/HostCTASection';
import Footer from '../../components/layout/Footer';

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
