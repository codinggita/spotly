import React from 'react';
import Navbar from '../components/layout/Navbar';
import StepsSection from '../components/howitworks/StepsSection';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen font-sans bg-white">
      <Navbar />
      <main>
        <StepsSection />
      </main>
    </div>
  );
};

export default HowItWorksPage;
