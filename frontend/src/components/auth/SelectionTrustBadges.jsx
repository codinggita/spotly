import React from 'react';
import { ShieldCheck, CreditCard, Headphones } from 'lucide-react';

const SelectionTrustBadges = () => {
  const badges = [
    {
      icon: <ShieldCheck className="w-5 h-5 mr-2" />,
      text: "VERIFIED SPOTS"
    },
    {
      icon: <CreditCard className="w-5 h-5 mr-2" />,
      text: "SECURE PAYMENTS"
    },
    {
      icon: <Headphones className="w-5 h-5 mr-2" />,
      text: "24/7 SUPPORT"
    }
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center text-[#64748B] font-bold text-xs tracking-widest uppercase">
          <span className="text-[#0047FF]">{badge.icon}</span>
          {badge.text}
        </div>
      ))}
    </div>
  );
};

export default SelectionTrustBadges;
