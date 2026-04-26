import { LayoutDashboard, ParkingCircle, PlusCircle, Calendar, HelpCircle, LogOut } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/authService';

const OwnerSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/owner' },
    { icon: ParkingCircle, label: 'My Parking', path: '/owner/parking' },
    { icon: PlusCircle, label: 'Add Parking', path: '/owner/add-parking' },
    { icon: Calendar, label: 'Bookings', path: '/owner/bookings' },
  ];

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0">
      <div className="p-8">
        <Link to="/owner" className="flex flex-col">
          <span className="text-2xl font-extrabold text-[#0047FF]">Spotly</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all relative ${
                isActive 
                  ? 'bg-blue-50 text-[#0047FF]' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-[#0047FF]'
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#0047FF] rounded-r-full" />
              )}
              <item.icon className={`w-5 h-5 ${isActive ? 'text-[#0047FF]' : 'text-gray-400'}`} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-50 space-y-2">
        <Link
          to="/help"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 hover:text-[#0047FF] transition-all"
        >
          <HelpCircle className="w-5 h-5 text-gray-400" />
          Help
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-gray-500 hover:bg-red-50 hover:text-red-500 transition-all"
        >
          <LogOut className="w-5 h-5 text-gray-400" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default OwnerSidebar;
