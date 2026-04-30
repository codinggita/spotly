import React from 'react';
import { IndianRupee, SlidersHorizontal, ShieldCheck } from 'lucide-react';

const HostBenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      icon: <IndianRupee className="w-5 h-5 text-[#0047FF]" />,
      title: 'Secure Payments',
      description: 'Automatic weekly payouts directly to your bank account. No chasing invoices or cash handling.'
    },
    {
      id: 2,
      icon: <SlidersHorizontal className="w-5 h-5 text-[#0047FF]" />,
      title: 'Set Your Rates',
      description: 'Full control over pricing and availability. Block off dates or adjust rates for events at any time.'
    },
    {
      id: 3,
      icon: <ShieldCheck className="w-5 h-5 text-[#0047FF]" />,
      title: 'Verified Drivers',
      description: 'Every driver is identity-verified. Plus, our ₹1M protection plan covers your property on every booking.'
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why host on Spotly?
          </h2>
          <p className="text-gray-600 text-lg">
            We provide the tools and security you need to turn your unused space into a reliable revenue stream without the headache.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostBenefitsSection;
