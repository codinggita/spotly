import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import PricingHero from '../../components/landing/PricingHero';
import PricingPlans from '../../components/landing/PricingPlans';
import PricingGuarantee from '../../components/landing/PricingGuarantee';
import PricingFAQ from '../../components/landing/PricingFAQ';

const PricingPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Helmet>
        <title>Pricing | Spotly - Simple & Transparent Parking Rates</title>
        <meta name="description" content="Check out Spotly's pricing plans for drivers and owners. No hidden fees, just simple and fair parking rates." />
      </Helmet>
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
