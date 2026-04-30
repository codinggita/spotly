import React from 'react';
import Navbar from '../../components/layout/Navbar';
import HeroSection from '../../components/landing/HeroSection';
import FeaturesSection from '../../components/landing/FeaturesSection';
import HowItWorksSection from '../../components/landing/HowItWorksSection';
import CTASection from '../../components/landing/CTASection';
import AdvantagesSection from '../../components/landing/AdvantagesSection';
import Footer from '../../components/layout/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FF] font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
        <AdvantagesSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
