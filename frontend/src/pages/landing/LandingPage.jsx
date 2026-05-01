import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Spotly | Find & Share Parking Easily</title>
        <meta name="description" content="Spotly is a smart parking marketplace that helps users find nearby parking spaces and allows private owners to list and earn from their unused parking areas." />
        <meta property="og:title" content="Spotly | Find & Share Parking Easily" />
        <meta property="og:description" content="Discover nearby parking or earn by listing your own space. The smartest way to navigate urban parking." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://spotly-j3k4.onrender.com" />
      </Helmet>
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
