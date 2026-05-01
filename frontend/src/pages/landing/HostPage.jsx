import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/layout/Navbar';
import HostHeroSection from '../../components/landing/HostHeroSection';
import HostBenefitsSection from '../../components/landing/HostBenefitsSection';
import TestimonialsSection from '../../components/landing/TestimonialsSection';
import HostCTASection from '../../components/landing/HostCTASection';
import Footer from '../../components/layout/Footer';

const HostPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Helmet>
        <title>List Your Spot | Spotly - Earn from Your Parking Space</title>
        <meta name="description" content="Turn your unused parking space into extra income. List your spot on Spotly and help drivers find convenient parking." />
        <meta property="og:title" content="List Your Spot | Spotly - Earn from Your Parking Space" />
        <meta property="og:description" content="Turn your unused parking space into extra income. List your spot on Spotly." />
      </Helmet>
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
