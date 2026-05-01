import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Find & Share Parking <br className="hidden lg:block" />
              Easily
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover nearby parking or earn by listing your own space. 
              The smartest way to navigate urban parking challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link 
                to="/register" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0047FF] hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-medium text-base transition-colors shadow-lg shadow-blue-500/30"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link 
                to="/host" 
                className="w-full sm:w-auto flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3.5 rounded-xl font-medium text-base transition-all shadow-sm"
              >
                Explore Parking
              </Link>
            </div>
          </div>

            {/* Right Image/Map Graphic */}
          <div className="flex-1 relative w-full max-w-2xl lg:max-w-none mt-8 lg:mt-0">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
            
            {/* Map UI Element Container */}
            <div 
              className="relative bg-gray-200/60 border border-gray-300 backdrop-blur-sm rounded-2xl aspect-[4/3] overflow-hidden shadow-2xl flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: 'url(https://res.cloudinary.com/dbknqb3e7/image/upload/v1777614000/Screenshot_2026-05-01_110454_iifxnp.png)' }}
            >
              {/* Optional: Add an overlay if needed, currently empty to just show the image */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
