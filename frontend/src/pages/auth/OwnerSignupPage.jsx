import React from 'react';
import Navbar from '../../components/layout/Navbar';
import SignupForm from '../../components/auth/SignupForm';
import { ShieldCheck, IndianRupee, Shield } from 'lucide-react';

const OwnerSignupPage = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col bg-[#F8FAFC]">
      <Navbar authMode={true} />
      
      <main className="flex-grow flex flex-col justify-between pt-4 px-6 md:px-12 lg:px-24">
        <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center flex-grow">
          
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-[#E1E7FF] text-[#0047FF] px-4 py-1.5 rounded-full text-sm font-bold w-max mb-6">
              <ShieldCheck className="w-4 h-4" />
              Partner Program
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] mb-4 leading-tight">
              Start earning with Spotly
            </h1>
            
            <p className="text-base text-[#64748B] mb-8 max-w-lg leading-relaxed">
              Join thousands of property owners maximizing their space. 
              Turn your unused parking spots into a steady stream of passive income.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="text-[#0047FF] mb-2">
                  <IndianRupee className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#1E293B] text-sm mb-1">Weekly Payouts</h3>
                <p className="text-[#64748B] text-xs leading-relaxed">
                  Direct deposit to your bank account every Tuesday.
                </p>
              </div>
              
              <div>
                <div className="text-[#0047FF] mb-2">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-[#1E293B] text-sm mb-1">Insured Coverage</h3>
                <p className="text-[#64748B] text-xs leading-relaxed">
                  Comprehensive protection for every booking on your lot.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-[#1E293B]">Owner Portal</h2>
                <p className="text-[#64748B] text-sm mt-1">Create your owner account</p>
              </div>
              <SignupForm type="owner" />
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="w-full border-t border-gray-200 py-4 mt-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[#1E293B]">15k+</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Owners</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1E293B]">₹2.4M</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Paid to Partners</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1E293B]">450+</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Cities Covered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#1E293B]">99.9%</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Uptime Safety</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OwnerSignupPage;
