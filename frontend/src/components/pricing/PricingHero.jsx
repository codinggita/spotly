import React from 'react';
import { CheckCircle2, Star, ShieldCheck } from 'lucide-react';

const PricingHero = () => {
  const features = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-[#0047FF]" />,
      title: "50k+",
      subtitle: "Successful Bookings",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Star className="w-6 h-6 text-[#0047FF]" />,
      title: "4.9/5",
      subtitle: "Driver Satisfaction Score",
      bgColor: "bg-blue-50"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0047FF]" />,
      title: "100%",
      subtitle: "No Hidden Fees Guarantee",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <section className="pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
          No surprise charges. No hidden contracts. Just straightforward fees to keep 
          the platform running smoothly for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-8 bg-white rounded-xl border border-gray-100 shadow-sm transition-all hover:shadow-md"
            >
              <div className={`p-3 rounded-full ${feature.bgColor} mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{feature.title}</h3>
              <p className="text-gray-500 text-sm font-medium">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
