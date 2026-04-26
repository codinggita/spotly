import React from 'react';
import { ChevronDown } from 'lucide-react';

const RevenueAnalytics = () => {
  const data = [
    { day: 'MON', height: '40%' },
    { day: 'TUE', height: '30%' },
    { day: 'WED', height: '65%', active: true, value: '₹8.9k' },
    { day: 'THU', height: '45%' },
    { day: 'FRI', height: '55%' },
    { day: 'SAT', height: '80%' },
    { day: 'SUN', height: '70%' },
  ];

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-bold text-[#1E293B]">Revenue Analytics</h3>
          <p className="text-xs font-medium text-gray-400">Earnings across all locations for the last 7 days</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-xs font-bold text-[#1E293B] hover:bg-gray-100 transition-colors">
          Last 7 Days <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="h-64 flex items-end justify-between gap-4 px-2">
        {data.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-4 group">
            <div className="w-full relative flex flex-col items-center justify-end h-full">
              {item.active && (
                <div className="absolute -top-10 bg-[#1E293B] text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg animate-bounce">
                  {item.value}
                </div>
              )}
              <div 
                className={`w-full rounded-t-xl transition-all duration-500 cursor-pointer ${
                  item.active ? 'bg-[#0047FF]' : 'bg-gray-50 group-hover:bg-blue-100'
                }`}
                style={{ height: item.height }}
              />
            </div>
            <span className={`text-[10px] font-bold ${item.active ? 'text-[#0047FF]' : 'text-gray-400'}`}>
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueAnalytics;
