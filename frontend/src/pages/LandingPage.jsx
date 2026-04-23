import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import CTASection from '../components/home/CTASection';
import AdvantagesSection from '../components/home/AdvantagesSection';

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
    </div>
  );
};

export default LandingPage;
