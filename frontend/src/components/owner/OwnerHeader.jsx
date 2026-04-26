import React, { useState, useEffect } from 'react';
import { Search, Bell, User, LogOut, ChevronDown } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { getCurrentUser, logoutUser } from '../../services/authService';

const OwnerHeader = () => {
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  const getFirstLetter = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'U';
  };

  return (
    <header className="bg-white border-b border-gray-100 px-8 py-4 flex items-center justify-between sticky top-0 z-40">
      <div className="flex-1 max-w-xl">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#0047FF] transition-colors" />
          <input 
            type="text" 
            placeholder="Search spaces or bookings..."
            className="w-full bg-gray-50 border-none rounded-xl py-2.5 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-blue-100 transition-all outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-[#0047FF] transition-all relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>
        </div>

        <div className="h-8 w-[1px] bg-gray-100" />

        <div className="relative">
          <button 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-3 p-1 rounded-2xl hover:bg-gray-50 transition-all"
          >
            <div className="text-right hidden sm:block px-1">
              <p className="text-sm font-bold text-[#1E293B]">{user?.fullName?.split(' ')[0] || 'User'}</p>
              <p className="text-[10px] font-bold text-gray-400">{user?.role || 'Owner'}</p>
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#0047FF] flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-blue-500/20">
              {getFirstLetter(user?.fullName)}
            </div>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
          </button>

          {showProfileMenu && (
            <>
              <div 
                className="fixed inset-0 z-30" 
                onClick={() => setShowProfileMenu(false)} 
              />
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-blue-900/10 z-40 overflow-hidden py-2 animate-in fade-in zoom-in duration-200">
                <Link 
                  to="/profile"
                  className="flex items-center gap-3 px-6 py-4 text-sm font-bold text-[#1E293B] hover:bg-gray-50 transition-all"
                >
                  <User className="w-4 h-4 text-[#0047FF]" />
                  View Profile
                </Link>
                <button 
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-6 py-4 text-sm font-bold text-red-500 hover:bg-red-50 transition-all border-t border-gray-50"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default OwnerHeader;
