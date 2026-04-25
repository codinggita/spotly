import React from 'react';
import { Check } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      badge: "FOR DRIVERS",
      badgeColor: "bg-blue-100 text-[#0047FF]",
      title: "Rent a Spot",
      fee: "10%",
      feeLabel: "Booking Fee",
      features: [
        "Always free to search",
        "Instant booking confirmation",
        "Secure payment processing",
        "24/7 Driver support"
      ],
      buttonText: "Find a Spot",
      buttonColor: "bg-[#0047FF] hover:bg-blue-700",
      borderColor: "border-l-4 border-l-[#0047FF]"
    },
    {
      badge: "FOR OWNERS",
      badgeColor: "bg-orange-100 text-orange-600",
      title: "List Your Space",
      fee: "15%",
      feeLabel: "Service Fee",
      features: [
        "Free professional listing",
        "Smart pricing tools",
        "Automated monthly payouts",
        "₹1M Liability coverage"
      ],
      buttonText: "List Your Spot",
      buttonColor: "bg-[#D34500] hover:bg-orange-700",
      borderColor: "border-l-4 border-l-[#D34500]"
    }
  ];

  return (
    <section className="py-12 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${plan.borderColor} p-8 md:p-10`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-wider mb-4 ${plan.badgeColor}`}>
                    {plan.badge}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900">{plan.title}</h2>
                </div>
                <div className="mt-4 md:mt-0 text-left md:text-right">
                  <div className="text-4xl font-bold text-gray-900">{plan.fee}</div>
                  <div className="text-sm text-gray-500 font-medium">{plan.feeLabel}</div>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className={`p-1 rounded-full mr-3 ${plan.badgeColor.split(' ')[0]}`}>
                      <Check className={`w-3.5 h-3.5 ${plan.badgeColor.split(' ')[1]}`} />
                    </div>
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl text-white font-bold transition-all ${plan.buttonColor}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
