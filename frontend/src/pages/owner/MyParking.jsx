import React, { useState, useEffect } from 'react';
import { 
  Plus, Search, Filter, MoreHorizontal, 
  MapPin, Car, Info, ChevronLeft, 
  ChevronRight, Building2, CheckCircle2,
  BarChart3
} from 'lucide-react';
import OwnerSidebar from '../../components/owner/OwnerSidebar';
import OwnerHeader from '../../components/owner/OwnerHeader';
import Footer from '../../components/layout/Footer';
import { getCurrentUser } from '../../services/authService';

const MyParking = () => {
  const [user, setUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  const stats = [
    { label: 'Total Locations', value: '12', icon: Building2, color: 'text-blue-500', bg: 'bg-blue-50' },
    { label: 'Active Slots', value: '458', icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50' },
    { label: 'Avg. Occupancy', value: '82%', icon: BarChart3, color: 'text-orange-500', bg: 'bg-orange-50' },
  ];

  const parkingSpaces = [
    {
      id: 1,
      name: 'Central Plaza Hub',
      address: '45 Main St, Downtown',
      type: 'Paid',
      totalSlots: 120,
      availableSlots: 45,
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      name: 'Green Valley Open Lot',
      address: '12 North Park Ave',
      type: 'Free',
      totalSlots: 50,
      availableSlots: 8,
      image: 'https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      name: 'Metro Underground',
      address: '88 Station Square',
      type: 'Paid',
      totalSlots: 250,
      availableSlots: 192,
      image: 'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 4,
      name: 'Sunset Blvd Station',
      address: '210 Westside Dr',
      type: 'Paid',
      totalSlots: 75,
      availableSlots: 12,
      image: 'https://images.unsplash.com/photo-1545179605-1296651e9d43?auto=format&fit=crop&w=100&q=80'
    }
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <OwnerSidebar activePage="parking" />
      
      <div className="flex-1 flex flex-col min-w-0">
        <OwnerHeader />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
            
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-[#1E293B] mb-2">My Parking Spaces</h1>
                <p className="text-sm font-medium text-gray-400">Manage and monitor all your listed parking locations from one place.</p>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-[#0047FF] text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all active:scale-[0.98]">
                <Plus className="w-5 h-5" />
                Add New Space
              </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-all">
                  <div className={`w-14 h-14 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center shadow-sm`}>
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-2xl font-black text-[#1E293B]">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Main Table Card */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-6 md:p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-xl font-black text-[#1E293B]">All Locations</h2>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search spaces..." 
                      className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:bg-white focus:ring-2 focus:ring-blue-500/20 outline-none w-full md:w-64 transition-all"
                    />
                  </div>
                  <button className="p-2 bg-gray-50 text-gray-400 rounded-xl hover:text-blue-500 transition-all">
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-8 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Parking Name</th>
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Type</th>
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Slots</th>
                      <th className="px-6 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Available</th>
                      <th className="px-8 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {parkingSpaces.map((space) => (
                      <tr key={space.id} className="hover:bg-gray-50/50 transition-all group">
                        <td className="px-8 py-6">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                              <img src={space.image} alt={space.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="font-bold text-[#1E293B] text-sm group-hover:text-[#0047FF] transition-colors">{space.name}</p>
                              <p className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                                <MapPin className="w-3 h-3" /> {space.address}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-6">
                          <span className={`text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase ${
                            space.type === 'Paid' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {space.type}
                          </span>
                        </td>
                        <td className="px-6 py-6 text-sm font-bold text-[#1E293B]">
                          {space.totalSlots}
                        </td>
                        <td className="px-6 py-6">
                          <div className="flex flex-col gap-1.5 min-w-[120px]">
                            <div className="flex justify-between items-center text-xs font-black">
                              <span className={space.availableSlots < 15 ? 'text-red-500' : 'text-green-500'}>
                                {space.availableSlots} <span className="text-gray-300">/ {space.totalSlots}</span>
                              </span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-1000 ${
                                  (space.availableSlots / space.totalSlots) < 0.2 ? 'bg-red-500' : 'bg-green-500'
                                }`}
                                style={{ width: `${(space.availableSlots / space.totalSlots) * 100}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="px-4 py-2 bg-white border border-gray-200 text-[#1E293B] text-xs font-bold rounded-xl hover:bg-gray-50 hover:border-blue-200 hover:text-[#0047FF] transition-all shadow-sm">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-6 border-t border-gray-50 flex items-center justify-between">
                <p className="text-xs font-bold text-gray-400">
                  Showing <span className="text-[#1E293B]">1-4</span> of <span className="text-[#1E293B]">12</span> locations
                </p>
                <div className="flex items-center gap-2">
                  <button className="p-2 border border-gray-100 rounded-xl text-gray-300 cursor-not-allowed">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {[1, 2, 3].map(page => (
                    <button key={page} className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                      page === 1 ? 'bg-[#0047FF] text-white shadow-lg shadow-blue-500/20' : 'text-gray-400 hover:bg-gray-50'
                    }`}>
                      {page}
                    </button>
                  ))}
                  <button className="p-2 border border-gray-100 rounded-xl text-gray-400 hover:bg-gray-50 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Optimization Tip */}
            <div className="bg-red-50/50 border border-red-100/50 p-6 rounded-[2rem] flex items-start gap-4">
              <div className="p-3 bg-red-100 text-red-600 rounded-2xl">
                <Info className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-[#1E293B] mb-1">Optimization Tip</h4>
                <p className="text-xs font-medium text-gray-500 leading-relaxed">
                  Properties with over 90% occupancy for 3 consecutive days are eligible for "Premium Hub" status. 
                  You have 2 properties nearing this threshold.
                </p>
              </div>
            </div>

          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MyParking;
