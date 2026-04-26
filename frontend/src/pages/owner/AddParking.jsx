import React, { useState, useEffect } from 'react';
import { 
  MapPin, LayoutGrid, DollarSign, ShieldCheck, 
  Lightbulb, Star, ChevronRight
} from 'lucide-react';
import OwnerSidebar from '../../components/owner/OwnerSidebar';
import OwnerHeader from '../../components/owner/OwnerHeader';
import Footer from '../../components/layout/Footer';
import { getCurrentUser } from '../../services/authService';

const AddParking = () => {
  const [user, setUser] = useState(null);
  const [isAutoApprove, setIsAutoApprove] = useState(true);
  const [parkingType, setParkingType] = useState('Paid');

  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <OwnerSidebar activePage="add-parking" />
      
      <div className="flex-1 flex flex-col min-w-0">
        <OwnerHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8 max-w-6xl mx-auto space-y-8">
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-extrabold text-[#1E293B] mb-2">Register New Parking</h1>
                <p className="text-sm font-medium text-gray-500 leading-relaxed">
                  Expand your portfolio by adding a new parking facility. Fill in the details below to list your spot on the Spotly marketplace.
                </p>
              </div>
              <div className="flex items-center text-xs font-bold text-gray-400 gap-2 mt-2 md:mt-0">
                <span>Dashboard</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-[#0047FF]">Add Parking</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
              
              {/* Left Column - Form */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Form Card */}
                <div className="bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm">
                  <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                    <h2 className="text-xl font-black text-[#1E293B]">Facility Details</h2>
                    <span className="text-[10px] font-black px-3 py-1 bg-blue-100 text-[#0047FF] rounded-full tracking-widest uppercase">
                      STEP 1 OF 2
                    </span>
                  </div>
                  
                  <div className="p-6 md:p-8 space-y-6">
                    {/* Parking Name */}
                    <div>
                      <label className="block text-xs font-black text-[#1E293B] mb-2 uppercase tracking-wide">
                        Parking Name
                      </label>
                      <input 
                        type="text" 
                        placeholder="e.g. Skyline Central Hub" 
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0047FF]/20 focus:border-[#0047FF] outline-none transition-all placeholder:text-gray-400"
                      />
                      <p className="text-[11px] font-medium text-gray-500 mt-2">
                        A unique name helps customers identify your location easily.
                      </p>
                    </div>

                    {/* Location Address */}
                    <div>
                      <label className="block text-xs font-black text-[#1E293B] mb-2 uppercase tracking-wide">
                        Location Address
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                          type="text" 
                          placeholder="Search street address or coordinates" 
                          className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0047FF]/20 focus:border-[#0047FF] outline-none transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Row: Slots & Type */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-black text-[#1E293B] mb-2 uppercase tracking-wide">
                          Total Slots
                        </label>
                        <div className="relative">
                          <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input 
                            type="number" 
                            placeholder="0" 
                            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0047FF]/20 focus:border-[#0047FF] outline-none transition-all placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-xs font-black text-[#1E293B] mb-2 uppercase tracking-wide">
                          Parking Type
                        </label>
                        <div className="flex p-1 bg-gray-50 rounded-xl border border-gray-100">
                          <button 
                            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                              parkingType === 'Paid' 
                                ? 'bg-white text-[#0047FF] shadow-sm' 
                                : 'text-gray-500 hover:text-[#1E293B]'
                            }`}
                            onClick={() => setParkingType('Paid')}
                          >
                            Paid
                          </button>
                          <button 
                            className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                              parkingType === 'Free' 
                                ? 'bg-white text-[#0047FF] shadow-sm' 
                                : 'text-gray-500 hover:text-[#1E293B]'
                            }`}
                            onClick={() => setParkingType('Free')}
                          >
                            Free
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="w-full md:w-1/2 md:pr-3">
                      <label className="block text-xs font-black text-[#1E293B] mb-2 uppercase tracking-wide">
                        Price Per Hour (USD)
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                          type="number" 
                          step="0.01"
                          placeholder="5.00" 
                          className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:ring-2 focus:ring-[#0047FF]/20 focus:border-[#0047FF] outline-none transition-all placeholder:text-gray-400"
                        />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Auto-Approval Toggle */}
                <div className="bg-white rounded-[2rem] border border-gray-200 p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0047FF]">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-[#1E293B]">Auto-Approval Enabled</h4>
                      <p className="text-xs font-medium text-gray-500 mt-0.5">Instant confirmation for booking requests.</p>
                    </div>
                  </div>
                  
                  {/* Custom Toggle Switch */}
                  <button 
                    className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                      isAutoApprove ? 'bg-[#0047FF]' : 'bg-gray-200'
                    }`}
                    onClick={() => setIsAutoApprove(!isAutoApprove)}
                  >
                    <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      isAutoApprove ? 'translate-x-6' : 'translate-x-0'
                    }`} />
                  </button>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-4 pt-4">
                  <button className="px-8 py-3.5 bg-white border border-gray-200 text-[#1E293B] rounded-xl text-sm font-bold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                    Save Draft
                  </button>
                  <button className="px-8 py-3.5 bg-[#0047FF] text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-[0.98]">
                    Add Parking
                  </button>
                </div>

              </div>

              {/* Right Column - Previews */}
              <div className="space-y-6">
                
                {/* Preview Card */}
                <div className="bg-white rounded-[2rem] border border-gray-200 overflow-hidden shadow-sm">
                  {/* Image Area */}
                  <div className="h-48 bg-[#0F172A] relative overflow-hidden flex items-center justify-center group">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                    {/* Placeholder for Car Image */}
                    <img 
                      src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=600&q=80" 
                      alt="Car in parking" 
                      className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-[#0047FF] text-white text-[10px] font-black tracking-widest uppercase rounded-lg shadow-sm">
                        PREVIEW LISTING
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 z-20">
                      <h3 className="text-white text-lg font-black drop-shadow-md">New Facility Listing</h3>
                    </div>
                  </div>
                  
                  {/* Details Area */}
                  <div className="p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-sm font-bold text-gray-500">
                        <Star className="w-4 h-4 text-gray-400" />
                        <span>0.0 <span className="font-medium">(New)</span></span>
                      </div>
                      <div className="text-lg font-black text-[#0047FF]">
                        $ -- <span className="text-xs font-bold text-gray-400">/hr</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
                      {['24/7 ACCESS', 'CCTV', 'EV CHARGE'].map(tag => (
                        <span key={tag} className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-500 text-[9px] font-black tracking-widest uppercase rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Map Verify Card */}
                <div className="bg-[#A7F3D0] rounded-[2rem] h-56 relative overflow-hidden shadow-sm group cursor-pointer border border-[#6EE7B7]/50">
                  <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                  
                  {/* Simulated Map Elements */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="relative group-hover:-translate-y-2 transition-transform duration-300">
                      <div className="w-12 h-12 bg-[#0047FF] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                        <span className="text-white font-black text-xl">P</span>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-[#0047FF] -z-10 rounded-full"></div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-1.5 bg-black/20 rounded-full blur-[2px]"></div>
                    </div>
                    <div className="absolute ml-24 mt-8 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                      <div className="w-4 h-4 bg-green-500 rounded-full opacity-50 animate-ping"></div>
                      <div className="w-4 h-4 bg-green-500 rounded-full absolute"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-sm z-20">
                    <p className="text-xs font-bold text-[#1E293B] text-center leading-relaxed">
                      Verify location by dragging the pin on the main map after listing.
                    </p>
                  </div>
                </div>

                {/* Pro Tip */}
                <div className="bg-[#F0F5FF] border border-[#D6E4FF] p-6 rounded-[2rem] flex items-start gap-4">
                  <div className="p-3 bg-[#0047FF] text-white rounded-2xl shadow-sm shadow-blue-500/20 shrink-0">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-[#0047FF] mb-1 uppercase tracking-wider">Owner Pro-Tip</h4>
                    <p className="text-xs font-medium text-gray-600 leading-relaxed">
                      Listings with precise slot counts and competitive hourly rates see a <span className="font-bold text-[#1E293B]">40% higher booking rate</span> within the first week.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AddParking;
