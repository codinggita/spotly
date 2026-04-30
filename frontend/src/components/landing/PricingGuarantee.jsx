import React from 'react';
import { Lock } from 'lucide-react';

const PricingGuarantee = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#1E3A8A] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Our "No Hidden Fees" Guarantee
            </h2>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed">
              What you see is what you pay. We never charge for sign-ups, monthly 
              subscriptions, or "processing premiums". Our fees are built directly into 
              the booking price for total transparency.
            </p>
          </div>
          
          <div className="mt-8 md:mt-0 relative z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <Lock className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>

          {/* Decorative background circle */}
          <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default PricingGuarantee;
