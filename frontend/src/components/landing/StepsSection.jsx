import React from 'react';
import { Search, Calendar, ParkingCircle } from 'lucide-react';

const steps = [
  {
    number: 'STEP 01',
    title: 'Search Your Area',
    description: 'Enter your destination and desired time. Browse real-time availability across thousands of private and commercial spots.',
    icon: Search,
    iconBg: 'bg-[#0047FF]',
    imageColor: 'bg-[#0A101F]',
    imageDesc: 'Map Interface Placeholder'
  },
  {
    number: 'STEP 02',
    title: 'Secure Your Spot',
    description: 'Pick the spot that fits your needs. Book instantly with secure mobile payment and receive a digital access pass.',
    icon: Calendar,
    iconBg: 'bg-[#0047FF]',
    imageColor: 'bg-white',
    imageBorder: 'border border-gray-100',
    imageDesc: 'Booking Confirmation Placeholder'
  },
  {
    number: 'STEP 03',
    title: 'Arrive and Relax',
    description: 'Follow directions to your reserved space. Use your app for entry if required and enjoy your day worry-free.',
    icon: ParkingCircle,
    iconBg: 'bg-[#0047FF]',
    imageColor: 'bg-[#0A101F]',
    imageDesc: 'Car/Parking Placeholder'
  }
];

const StepsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Effortless Parking in Three Simple Steps
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Spotly connects drivers with underutilized parking spaces. Whether you're commuting or exploring, finding a spot has never been this seamless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className={`${step.iconBg} p-4 rounded-2xl mb-6 text-white`}>
                  <step.icon size={28} />
                </div>
                <span className="text-[#0047FF] font-bold text-xs tracking-widest mb-2 uppercase">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {step.description}
                </p>
                <div className={`w-full aspect-[4/3] rounded-2xl flex items-center justify-center overflow-hidden ${step.imageColor} ${step.imageBorder || ''}`}>
                   <span className="text-gray-400 text-xs font-medium">{step.imageDesc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
