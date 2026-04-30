import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import SelectionHero from '../../components/auth/SelectionHero';
import SelectionCards from '../../components/auth/SelectionCards';
import SelectionTrustBadges from '../../components/auth/SelectionTrustBadges';

const SelectionPage = () => {
  return (
    <div className="min-h-screen font-sans bg-[#F8FAFC]">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <SelectionHero />
        <SelectionCards />
        <SelectionTrustBadges />
      </main>
      <Footer />
    </div>
  );
};

export default SelectionPage;
