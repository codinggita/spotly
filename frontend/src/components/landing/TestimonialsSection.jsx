import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#F5F7FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex-1 lg:max-w-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Real stories from our hosting community
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Discover how everyday property owners are making the most of their unused space with Spotly's platform.
            </p>
            <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
              <a href="#" className="text-[#0047FF] font-bold text-sm uppercase tracking-wider hover:underline">
                JOIN THE COMMUNITY
              </a>
            </div>
          </div>

          {/* Right Content - Reviews Grid */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            
            {/* Big Review Card */}
            <div className="md:col-span-2 bg-[#0047FF] p-8 md:p-10 rounded-3xl shadow-xl relative overflow-hidden text-white">
              <div className="absolute top-4 right-6 text-9xl font-serif opacity-10 leading-none">"</div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10">
                "Listing my driveway on Spotly was the best financial decision I've made this year. It's completely passive and pays for my monthly utility bills without any extra effort."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-amber-100 rounded-full border-2 border-white flex-shrink-0 flex items-center justify-center overflow-hidden">
                   {/* Placeholder avatar */}
                   <div className="w-full h-full bg-gray-400"></div>
                </div>
                <div>
                  <p className="font-bold">Sarah Jenkins</p>
                  <p className="text-blue-200 text-sm">Hosting in San Francisco</p>
                </div>
              </div>
            </div>

            {/* Small Review 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "The app is incredibly easy to use. I love being able to see exactly when someone is coming to park in my garage."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-gray-500"></div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Mark Thompson</p>
                  <p className="text-gray-500 text-xs">Seattle Host</p>
                </div>
              </div>
            </div>

            {/* Small Review 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                "Verified drivers give me peace of mind. I've never had a single issue in over 50 bookings."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                   <div className="w-full h-full bg-gray-700"></div>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">Elena Rodriguez</p>
                  <p className="text-gray-500 text-xs">Miami Host</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
