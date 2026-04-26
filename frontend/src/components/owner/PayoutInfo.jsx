import React from 'react';
import { Lightbulb, CheckCircle, AlertCircle } from 'lucide-react';

const BoostEarnings = () => (
  <div className="bg-[#0047FF] p-8 rounded-3xl text-white relative overflow-hidden group">
    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
    <div className="relative z-10">
      <div className="bg-white/20 w-10 h-10 rounded-xl flex items-center justify-center mb-6">
        <Lightbulb className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-extrabold mb-3 leading-tight">Boost Your<br />Earnings</h3>
      <p className="text-sm text-blue-100 mb-8 leading-relaxed">
        Demand is <span className="font-bold text-white">high in your area!</span> Consider offering a weekend discount to increase occupancy by up to 30%.
      </p>
      <button className="w-full py-4 bg-white text-[#0047FF] rounded-2xl text-sm font-extrabold hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20 active:scale-[0.98]">
        Optimize Prices
      </button>
    </div>
  </div>
);

const PayoutInfo = () => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
    <h3 className="text-xl font-bold text-[#1E293B] mb-8">Payout Information</h3>
    
    <div className="flex items-center justify-between mb-8">
      <div>
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Next Payout</p>
        <p className="text-3xl font-extrabold text-[#1E293B]">₹14,500</p>
      </div>
      <div className="px-3 py-1.5 bg-blue-50 rounded-lg">
        <span className="text-[10px] font-bold text-[#0047FF]">14 Oct</span>
      </div>
    </div>

    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-green-50 rounded-xl">
          <CheckCircle className="w-5 h-5 text-green-500" />
        </div>
        <div>
          <p className="text-sm font-bold text-[#1E293B]">Bank Account Linked</p>
          <p className="text-xs text-gray-400">HDFC Bank **** 1290</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="p-2 bg-gray-50 rounded-xl">
          <AlertCircle className="w-5 h-5 text-gray-400" />
        </div>
        <div>
          <p className="text-sm font-bold text-[#1E293B]">Tax Documents</p>
          <p className="text-xs text-red-500 font-bold hover:underline cursor-pointer">Action Required</p>
        </div>
      </div>
    </div>
  </div>
);

export { BoostEarnings, PayoutInfo };
