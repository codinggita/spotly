import React, { useState } from 'react';
import { ArrowRight, MapPin, PlayCircle } from 'lucide-react';

const HostHeroSection = () => {
  const [spots, setSpots] = useState(1);

  // Simple hardcoded multiplier for demo purposes
  const minEarnings = spots * 150 + 300;
  const maxEarnings = spots * 200 + 480;

  return (
    <section className="py-20 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1">
            <span className="inline-block bg-blue-100 text-[#0047FF] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              Hosting Made Simple
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Turn your space into <span className="text-[#0047FF]">earnings</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg">
              Monetize your driveway, garage, or private parking lot. Join over 15,000 owners who earn passive income by sharing their spot with our verified network of drivers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0047FF] hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-medium transition-colors shadow-lg shadow-blue-500/30">
                Start Hosting Today
                <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-8 py-3.5 rounded-xl font-medium transition-colors">
                <PlayCircle size={18} className="text-gray-500" />
                Watch How it Works
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-800"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-700"></div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-amber-600"></div>
              </div>
              <div className="text-sm font-medium text-gray-700">
                <span className="font-bold">4.9/5 stars</span> from 2,000+ hosts
              </div>
            </div>
          </div>

          {/* Right Content - Earnings Estimator */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative">
              {/* Decorative blob behind the card */}
              <div className="absolute -z-10 top-0 right-0 w-full h-full bg-blue-100 blur-3xl opacity-50 rounded-full translate-x-10 -translate-y-10"></div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Estimate your earnings</h2>
              <p className="text-gray-500 text-sm mb-8">See how much you could earn monthly with Spotly.</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Your Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Enter neighborhood or city" 
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0047FF] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Number of Spots</label>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSpots(num)}
                        className={`py-2 rounded-xl font-medium border transition-colors ${
                          spots === num 
                            ? 'bg-[#0047FF] text-white border-[#0047FF]' 
                            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {num}{num === 4 ? '+' : ''}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-end justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Estimated Monthly Earnings</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-[#0047FF]">₹{minEarnings} - ₹{maxEarnings}</p>
                    <p className="text-xs text-gray-400">*Based on average rates in your area</p>
                  </div>
                </div>

                <button className="w-full bg-[#0047FF] hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl transition-colors">
                  Continue to Listing
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HostHeroSection;
