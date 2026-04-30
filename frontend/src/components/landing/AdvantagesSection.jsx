import React from 'react';
import { Clock, Leaf, TrendingUp } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      id: 1,
      icon: <Clock className="w-5 h-5 text-green-500" />,
      iconBg: 'bg-green-50',
      title: 'Save time',
      description: 'Cut your commute time by up to 15 minutes by knowing exactly where to park before you arrive.'
    },
    {
      id: 2,
      icon: <Leaf className="w-5 h-5 text-blue-500" />,
      iconBg: 'bg-blue-50',
      title: 'Reduce traffic',
      description: 'Help decrease urban congestion and CO2 emissions by eliminating pointless circling for parking.'
    },
    {
      id: 3,
      icon: <TrendingUp className="w-5 h-5 text-amber-500" />,
      iconBg: 'bg-amber-50',
      title: 'Earn extra income',
      description: 'Turn your empty asset into a consistent revenue stream with minimal effort and full control.'
    }
  ];

  return (
    <section className="py-24 bg-[#F8F9FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              The Spotly Advantage
            </h2>
            
            <div className="space-y-10">
              {advantages.map((adv) => (
                <div key={adv.id} className="flex gap-5">
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${adv.iconBg}`}>
                    {adv.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {adv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left: Garage */}
              <div className="bg-gray-800 rounded-2xl aspect-square overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border-4 border-gray-600 border-b-0 flex flex-col justify-evenly p-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="h-2 bg-gray-500 rounded-sm"></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Top Right: User Profile Avatar */}
              <div className="bg-[#1A365D] rounded-2xl aspect-[4/3] overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="w-24 h-32 bg-amber-100 rounded-t-full border-4 border-white/10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-full mt-2"></div>
                  </div>
                </div>
              </div>
              
              {/* Bottom Left: App UI */}
              <div className="bg-teal-700 rounded-2xl aspect-[4/3] overflow-hidden relative shadow-lg flex items-center justify-center p-6">
                <div className="w-full h-full bg-cyan-400 rounded-xl border-4 border-gray-900 flex items-center justify-center text-white">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              
              {/* Bottom Right: Host Avatar */}
              <div className="bg-gray-900 rounded-2xl aspect-square overflow-hidden relative shadow-lg">
                <div className="absolute inset-0 flex items-end justify-center">
                   <div className="w-24 h-28 bg-red-800/80 rounded-t-3xl border border-white/5 flex flex-col items-center justify-start pt-4">
                     <div className="w-12 h-12 bg-gray-400 rounded-sm"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
