import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PricingHero from '../components/pricing/PricingHero';
import PricingPlans from '../components/pricing/PricingPlans';
import PricingGuarantee from '../components/pricing/PricingGuarantee';
import PricingFAQ from '../components/pricing/PricingFAQ';

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
