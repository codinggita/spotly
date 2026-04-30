import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Search parking',
      description: 'Enter your destination to see all available spots nearby in real-time.'
    },
    {
      number: '2',
      title: 'Book a slot',
      description: 'Select the perfect space based on price, distance, and user reviews.'
    },
    {
      number: '3',
      title: 'Park',
      description: 'Navigate to your reserved spot and park without any stress or hassle.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-16">
          <p className="text-[#0047FF] font-bold text-xs tracking-widest uppercase mb-3">
            Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Getting started is simple
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-gray-200 -z-10"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-0">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-[#0047FF] flex items-center justify-center text-[#0047FF] text-xl font-bold mb-6 shadow-sm">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
