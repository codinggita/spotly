import React from 'react';

const HostCTASection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gray-900 rounded-[2.5rem] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#002B99]/30 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to start earning?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              It only takes 5 minutes to list your spot. We'll handle the bookings, payments, and insurance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto bg-[#0047FF] hover:bg-blue-600 text-white font-medium px-8 py-3.5 rounded-xl transition-colors shadow-lg">
                List Your Spot Now
              </button>
              <button className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 text-white font-medium px-8 py-3.5 rounded-xl border border-gray-700 transition-colors">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostCTASection;
