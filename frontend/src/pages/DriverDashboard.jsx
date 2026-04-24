import React from 'react';
import { Search, Compass } from 'lucide-react';
import ParkingCard, { DashboardNavbar } from '../components/dashboard/DashboardComponents';

const DriverDashboard = () => {
  const parkingSpots = [
    {
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Grand Plaza Underground",
      address: "450 Market St, Financial District",
      price: 6.50,
      slots: 4,
      isPaid: true
    },
    {
      image: "https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "City Park Surface Lot",
      address: "822 Mission St, SoMa",
      price: 0.00,
      slots: 15,
      isPaid: false
    },
    {
      image: "https://images.unsplash.com/photo-1532054231014-63309a96e959?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Nexus Smart Garage",
      address: "112 Embarcadero, Waterfront",
      price: 8.25,
      slots: 1,
      isPaid: true
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <DashboardNavbar />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-[#1E293B] mb-2">Nearby Parking</h1>
            <p className="text-gray-500 font-medium">Discover the best spots in San Francisco, CA</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative flex-grow md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search location..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500/10 focus:border-[#0047FF] outline-none transition-all"
              />
            </div>
            
            <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm">
              <button className="px-5 py-2 bg-[#0047FF] text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/20">All</button>
              <button className="px-5 py-2 text-gray-500 hover:text-gray-900 rounded-xl text-sm font-bold transition-colors">Paid</button>
              <button className="px-5 py-2 text-gray-500 hover:text-gray-900 rounded-xl text-sm font-bold transition-colors">Free</button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden mb-12 border border-gray-100 shadow-xl shadow-gray-200/50">
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Map" 
            className="w-full h-full object-cover grayscale opacity-80"
          />
          {/* Map Overlay Elements */}
          <div className="absolute inset-0 bg-blue-500/5" />
          
          {/* Live View Badge */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-xl p-4 rounded-3xl border border-white shadow-2xl">
            <div className="font-bold text-[#1E293B] mb-0.5">Live View</div>
            <div className="text-xs text-gray-500 font-medium">32 spots available nearby</div>
          </div>
          
          {/* Map Pins */}
          <div className="absolute top-1/3 left-1/4 bg-[#0047FF] text-white px-3 py-1.5 rounded-xl font-bold text-xs shadow-lg transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform">
            $4.50
          </div>
          <div className="absolute bottom-1/3 right-1/4 bg-[#10B981] text-white px-3 py-1.5 rounded-xl font-bold text-xs shadow-lg transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform uppercase">
            Free
          </div>
          
          {/* Re-center button */}
          <button className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-xl rounded-full border border-white shadow-2xl text-[#0047FF] hover:bg-white transition-all active:scale-95">
            <Compass className="w-6 h-6" />
          </button>
        </div>

        {/* Parking Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {parkingSpots.map((spot, index) => (
            <ParkingCard key={index} {...spot} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default DriverDashboard;
