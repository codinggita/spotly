import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorksCTA = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0047FF] rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          {/* Subtle Background pattern/glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-30 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to simplify your commute?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of drivers finding smarter ways to park every day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/register"
                className="w-full sm:w-auto bg-white text-[#0047FF] px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg"
              >
                Get Started Now
              </Link>
              <Link
                to="/locations"
                className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                Explore Locations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksCTA;
