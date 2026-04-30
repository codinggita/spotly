import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import PricingHero from '../../components/landing/PricingHero';
import PricingPlans from '../../components/landing/PricingPlans';
import PricingGuarantee from '../../components/landing/PricingGuarantee';
import PricingFAQ from '../../components/landing/PricingFAQ';

const PricingPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main>
        <PricingHero />
        <PricingPlans />
        <PricingGuarantee />
        <PricingFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
