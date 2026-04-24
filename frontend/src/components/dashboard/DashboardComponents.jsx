import React from 'react';
import { Search, MapPin, Bell, MessageSquare, User } from 'lucide-react';

const DashboardNavbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-[#0047FF]">Spotly</span>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="hidden md:flex items-center gap-6 text-sm font-bold text-[#1E293B]">
          <button className="hover:text-[#0047FF] transition-colors">Bookings</button>
          <button className="hover:text-[#0047FF] transition-colors">Reports</button>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <MessageSquare className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

const ParkingCard = ({ image, title, address, price, slots, isPaid }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${slots < 5 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
          {slots} slots left
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-[#1E293B] leading-snug">{title}</h3>
          <span className={`text-[10px] font-extrabold px-2 py-1 rounded-md tracking-wider ${isPaid ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'}`}>
            {isPaid ? 'PAID' : 'FREE'}
          </span>
        </div>
        
        <div className="flex items-center gap-1.5 text-gray-400 mb-6">
          <MapPin className="w-3.5 h-3.5" />
          <span className="text-xs font-medium">{address}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
          <div>
            <span className="text-xl font-bold text-[#1E293B]">${price.toFixed(2)}</span>
            <span className="text-xs text-gray-400 font-medium ml-1">/hour</span>
          </div>
          <button className="bg-[#0047FF] hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/10 active:scale-[0.98]">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParkingCard;
export { DashboardNavbar };
