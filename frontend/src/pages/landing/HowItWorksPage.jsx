import React from 'react';
import Navbar from '../../components/layout/Navbar';
import StepsSection from '../../components/landing/StepsSection';
import HowItWorksCTA from '../../components/landing/HowItWorksCTA';
import FAQSection from '../../components/landing/FAQSection';
import Footer from '../../components/layout/Footer';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main>
        <StepsSection />
        <HowItWorksCTA />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
