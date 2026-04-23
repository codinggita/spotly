import React from 'react';
import Navbar from '../components/layout/Navbar';
import StepsSection from '../components/howitworks/StepsSection';
import HowItWorksCTA from '../components/howitworks/HowItWorksCTA';
import FAQSection from '../components/howitworks/FAQSection';
import Footer from '../components/layout/Footer';

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
