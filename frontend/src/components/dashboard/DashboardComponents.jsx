import React, { useState } from 'react';
import { Search, MapPin, Bell, MessageSquare, User, LogOut, UserCircle } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logoutUser, getCurrentUser } from '../../services/authService';

const DashboardNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const user = getCurrentUser();
  
  const isBookingsPage = location.pathname === '/bookings';
  const isReportsPage = location.pathname === '/reports';

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  const getFirstLetter = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'U';
  };

  const isOwner = user?.role === 'owner';

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <Link to={isOwner ? "/owner" : "/driver"} className="flex items-center gap-2">
        <span className="text-2xl font-extrabold text-[#0047FF]">Spotly</span>
      </Link>
      
      <div className="flex items-center gap-8">
        {!isOwner && (
          <div className="hidden md:flex items-center gap-6 text-sm font-bold text-[#1E293B]">
            <Link 
              to="/bookings" 
              className={`transition-all pb-1 ${isBookingsPage ? 'text-[#0047FF] border-b-2 border-[#0047FF]' : 'text-gray-500 hover:text-[#0047FF]'}`}
            >
              Bookings
            </Link>
            <Link 
              to="/reports" 
              className={`transition-all pb-1 ${isReportsPage ? 'text-[#0047FF] border-b-2 border-[#0047FF]' : 'text-gray-500 hover:text-[#0047FF]'}`}
            >
              Reports
            </Link>
          </div>
        )}
        
        <div className="flex items-center gap-4">
          <Link 
            to="/notifications" 
            className={`p-2 rounded-xl transition-all relative ${location.pathname === '/notifications' ? 'bg-blue-50 text-[#0047FF]' : 'text-gray-400 hover:text-[#0047FF] hover:bg-gray-50'}`}
          >
            <Bell className="w-5 h-5" />
            <div className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </Link>

          {!isOwner && (
            <Link 
              to="/messages" 
              className={`p-2 rounded-xl transition-all relative ${location.pathname === '/messages' ? 'bg-blue-50 text-[#0047FF]' : 'text-gray-400 hover:text-[#0047FF] hover:bg-gray-50'}`}
            >
              <MessageSquare className="w-5 h-5" />
            </Link>
          )}
          
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className={`flex items-center gap-2 p-1 rounded-2xl transition-all ${location.pathname === '/profile' || showProfileMenu ? 'bg-blue-50 border border-blue-100 shadow-sm' : 'hover:bg-gray-50'}`}
            >
              <div className="w-9 h-9 rounded-xl overflow-hidden border-2 border-white shadow-sm bg-[#0047FF] flex items-center justify-center text-white font-bold text-sm">
                {user?.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  getFirstLetter(user?.fullName)
                )}
              </div>
            </button>

            {showProfileMenu && (
              <>
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowProfileMenu(false)} 
                />
                <div className="absolute right-0 mt-3 w-56 bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-blue-900/10 z-50 overflow-hidden py-2 animate-in fade-in zoom-in duration-200">
                  <Link 
                    to="/profile"
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-3 px-6 py-4 text-sm font-bold text-[#1E293B] hover:bg-gray-50 transition-all"
                  >
                    <UserCircle className="w-5 h-5 text-blue-500" />
                    View Profile
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-6 py-4 text-sm font-bold text-red-500 hover:bg-red-50 transition-all border-t border-gray-50"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const ParkingCard = ({ id, image, title, address, price, slots, isPaid }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
          <div className={`w-1.5 h-1.5 rounded-full ${(slots || 0) < 5 ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`} />
          {slots || 0} slots left
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
            <span className="text-xl font-bold text-[#1E293B]">
              ₹{(typeof price === 'number' ? price : 0).toFixed(2)}
            </span>
            <span className="text-xs text-gray-400 font-medium ml-1">/hour</span>
          </div>
          <Link 
            to={`/parking/${id}`}
            className="bg-[#0047FF] hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-blue-500/10 active:scale-[0.98]"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParkingCard;
export { DashboardNavbar };
