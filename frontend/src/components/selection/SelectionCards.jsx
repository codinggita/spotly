import React from 'react';
import { Car, MapPin, ArrowRight } from 'lucide-react';

const SelectionCards = () => {
  const cards = [
    {
      type: "Driver",
      description: "Find and book parking spaces",
      icon: <Car className="w-8 h-8 text-white" />,
      iconBg: "bg-[#0047FF]",
      buttonText: "Continue as Driver",
      buttonColor: "bg-[#0047FF] hover:bg-blue-700",
      link: "/register/driver"
    },
    {
      type: "Owner",
      description: "List your parking and earn money",
      icon: <MapPin className="w-8 h-8 text-white" />,
      iconBg: "bg-[#D34500]",
      buttonText: "Continue as Owner",
      buttonColor: "bg-[#A63600] hover:bg-orange-900",
      link: "/register/owner"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      {cards.map((card, index) => (
        <div 
          key={index}
          className="bg-white rounded-3xl p-10 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center relative overflow-hidden"
        >
          <div className={`${card.iconBg} p-5 rounded-2xl mb-8 shadow-lg shadow-blue-500/20`}>
            {card.icon}
          </div>
          
          <h2 className="text-3xl font-bold text-[#1E293B] mb-3">{card.type}</h2>
          <p className="text-[#64748B] mb-10 text-lg">{card.description}</p>
          
          <button className={`w-full ${card.buttonColor} text-white py-4 px-6 rounded-xl font-bold flex items-center justify-center transition-all group`}>
            {card.buttonText}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Decorative background circle */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gray-50 rounded-full -z-0"></div>
        </div>
      ))}
    </div>
  );
};

export default SelectionCards;
