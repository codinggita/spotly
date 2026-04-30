import React from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0047FF] rounded-3xl overflow-hidden relative shadow-xl">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/30 skew-x-12 translate-x-20"></div>
          
          <div className="relative p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 max-w-2xl text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Earn from your unused parking space
              </h2>
              <p className="text-blue-100 mb-8 text-lg">
                Join thousands of hosts making extra income by sharing their driveways, garages, or empty lots with drivers who need them.
              </p>
              <Link 
                to="/host" 
                className="inline-block bg-white text-[#0047FF] font-medium px-8 py-3.5 rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                List Your Parking
              </Link>
            </div>
            
            {/* Right side graphic (Car icon) */}
            <div className="flex-1 flex justify-center md:justify-end opacity-90">
              <div className="bg-blue-600/50 p-12 rounded-3xl backdrop-blur-sm border border-white/10">
                <Car className="w-32 h-32 text-blue-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
