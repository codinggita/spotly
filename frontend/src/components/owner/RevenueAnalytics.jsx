import React from 'react';
import { ChevronDown } from 'lucide-react';

const RevenueAnalytics = () => {
  const data = [
    { day: 'MON', height: 40, value: '₹4.2k' },
    { day: 'TUE', height: 30, value: '₹3.1k' },
    { day: 'WED', height: 65, active: true, value: '₹8.9k' },
    { day: 'THU', height: 45, value: '₹5.4k' },
    { day: 'FRI', height: 55, value: '₹6.2k' },
    { day: 'SAT', height: 80, value: '₹9.5k' },
    { day: 'SUN', height: 70, value: '₹8.1k' },
  ];

  // Helper to calculate SVG path
  const points = data.map((d, i) => `${(i * 100) / 6}% ${100 - d.height}%`).join(', ');

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-32 -mt-32 blur-3xl -z-10" />

      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-black text-[#1E293B]">Revenue Analytics</h3>
          <p className="text-xs font-medium text-gray-400">Earnings across all locations for the last 7 days</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-xs font-bold text-[#1E293B] hover:bg-gray-100 transition-colors border border-gray-100">
          Last 7 Days <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </button>
      </div>

      <div className="h-64 relative mt-12 px-2">
        {/* SVG Line Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none px-6">
          <svg className="w-full h-full overflow-visible">
            <polyline
              fill="none"
              stroke="#0047FF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={data.map((d, i) => {
                const x = (i * 100) / (data.length - 1);
                const y = 100 - d.height;
                return `${x}% ${y}%`;
              }).join(' ')}
              className="opacity-20"
            />
          </svg>
        </div>

        {/* Bars and Tooltips */}
        <div className="h-full flex items-end justify-between gap-3 md:gap-6 relative z-20">
          {data.map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-4 group h-full">
              <div className="w-full relative flex flex-col items-center justify-end h-full">
                {/* Tooltip */}
                <div className={`absolute -top-10 bg-[#1E293B] text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl transition-all duration-300 transform scale-0 group-hover:scale-100 z-30 ${item.active ? 'scale-100 -translate-y-2' : ''}`}>
                  {item.value}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1E293B] rotate-45" />
                </div>

                {/* Bar */}
                <div 
                  className={`w-full rounded-2xl transition-all duration-700 cursor-pointer relative overflow-hidden ${
                    item.active 
                      ? 'bg-gradient-to-t from-[#0047FF] to-[#4D80FF] shadow-lg shadow-blue-500/20' 
                      : 'bg-gray-100 group-hover:bg-blue-50'
                  }`}
                  style={{ height: `${item.height}%` }}
                >
                  {item.active && (
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[slide_1s_linear_infinite]" />
                  )}
                </div>

                {/* Dot on top of bar */}
                <div 
                  className={`absolute w-2 h-2 rounded-full border-2 border-white transition-all duration-300 z-20 ${
                    item.active ? 'bg-[#0047FF] scale-125' : 'bg-gray-300 scale-0 group-hover:scale-100'
                  }`}
                  style={{ bottom: `calc(${item.height}% - 4px)` }}
                />
              </div>
              <span className={`text-[10px] font-black tracking-widest ${item.active ? 'text-[#0047FF]' : 'text-gray-300'}`}>
                {item.day}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide {
          from { background-position: 0 0; }
          to { background-position: 20px 0; }
        }
      `}} />
    </div>
  );
};

export default RevenueAnalytics;
