import React from 'react';
import { Clock, Map, Smartphone } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <Clock className="w-5 h-5 text-[#0047FF]" />,
      title: 'Real-time availability',
      description: 'Never circle the block again. See live updates of open spots in your immediate vicinity instantly.'
    },
    {
      id: 2,
      icon: <Map className="w-5 h-5 text-[#0047FF]" />,
      title: 'Free & Paid parking',
      description: 'Access a diverse marketplace of both public free zones and premium private parking spots tailored to your budget.'
    },
    {
      id: 3,
      icon: <Smartphone className="w-5 h-5 text-[#0047FF]" />,
      title: 'Easy booking',
      description: 'Reserve your spot in seconds with a seamless, one-tap booking experience directly from your mobile device.'
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
