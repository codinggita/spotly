import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/layout/Navbar';
import StepsSection from '../../components/landing/StepsSection';
import HowItWorksCTA from '../../components/landing/HowItWorksCTA';
import FAQSection from '../../components/landing/FAQSection';
import Footer from '../../components/layout/Footer';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Helmet>
        <title>How It Works | Spotly - Smart Parking Made Simple</title>
        <meta name="description" content="Learn how Spotly connects drivers with parking spaces. Discover how easy it is to find or list parking." />
      </Helmet>
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
