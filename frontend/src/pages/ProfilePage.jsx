import React from 'react';
import { 
  User, Mail, Phone, MapPin, 
  Car, CreditCard, Shield, Bell,
  ChevronRight, Camera, LogOut,
  Edit3, Verified, Star
} from 'lucide-react';
import { DashboardNavbar } from '../components/dashboard/DashboardComponents';
import Footer from '../components/layout/Footer';

import { getCurrentUser, logoutUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    const data = getCurrentUser();
    setCurrentUser(data);
  }, []);

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  const getFirstLetter = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'U';
  };

  const menuItems = [
    { label: "Personal Information", icon: User, color: "text-blue-500", bg: "bg-blue-50" },
    ...(currentUser?.role !== 'owner' ? [{ label: "Vehicle Management", icon: Car, color: "text-purple-500", bg: "bg-purple-50" }] : []),
    { label: "Payment Methods", icon: CreditCard, color: "text-green-500", bg: "bg-green-50" },
    { label: "Security & Password", icon: Shield, color: "text-orange-500", bg: "bg-orange-50" },
    { label: "Notifications", icon: Bell, color: "text-pink-500", bg: "bg-pink-50" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <DashboardNavbar />
      
      <main className="max-w-5xl mx-auto px-6 py-10">
        {/* Profile Header */}
        <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl shadow-blue-500/5 relative overflow-hidden mb-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full -mr-48 -mt-48 blur-3xl" />
          
          <div className="relative flex flex-col md:flex-row items-center gap-10">
            <div className="relative">
              <div className="w-40 h-40 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl bg-[#0047FF] flex items-center justify-center text-white font-black text-6xl shadow-blue-500/20">
                {currentUser?.avatar ? (
                  <img src={currentUser.avatar} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  getFirstLetter(currentUser?.fullName)
                )}
              </div>
              <button className="absolute bottom-2 -right-2 p-3 bg-[#0047FF] text-white rounded-2xl shadow-lg hover:scale-110 transition-all border-4 border-white">
                <Camera className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4 justify-center md:justify-start">
                <h1 className="text-4xl font-black text-[#1E293B] tracking-tight">{currentUser?.fullName || 'User'}</h1>
                <div className="flex items-center gap-1 bg-blue-50 text-[#0047FF] px-4 py-1.5 rounded-full text-xs font-black border border-blue-100 shadow-sm self-center uppercase tracking-widest">
                  <Verified className="w-3.5 h-3.5" />
                  VERIFIED {currentUser?.role || 'DRIVER'}
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gray-50/50 p-4 rounded-3xl border border-gray-100">
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Rating</p>
                  <div className="flex items-center gap-1 text-[#1E293B] font-black text-lg">
                    <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                    {currentUser?.rating || '4.9'}
                  </div>
                </div>
                <div className="bg-gray-50/50 p-4 rounded-3xl border border-gray-100">
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Total Trips</p>
                  <p className="text-[#1E293B] font-black text-lg">{currentUser?.trips || '154'}</p>
                </div>
                <div className="bg-gray-50/50 p-4 rounded-3xl border border-gray-100 hidden md:block">
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Member Since</p>
                  <p className="text-[#1E293B] font-black text-lg">2024</p>
                </div>
                <div className="bg-gray-50/50 p-4 rounded-3xl border border-gray-100 hidden md:block">
                  <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Impact</p>
                  <p className="text-[#1E293B] font-black text-lg">12kg CO2</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <button className="bg-[#1E293B] text-white px-8 py-3.5 rounded-2xl font-black text-sm shadow-xl shadow-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2">
                  <Edit3 className="w-4 h-4" />
                  Edit Profile
                </button>
                <button 
                  onClick={handleLogout}
                  className="bg-white border border-gray-200 text-gray-400 px-8 py-3.5 rounded-2xl font-black text-sm transition-all hover:text-red-500 hover:border-red-100 hover:bg-red-50 flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Menu */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
              <div className="p-8 border-b border-gray-50">
                <h3 className="text-xl font-black text-[#1E293B]">Account Settings</h3>
              </div>
              <div className="divide-y divide-gray-50">
                {menuItems.map((item, i) => (
                  <button key={i} className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-all group">
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center border-2 border-white shadow-sm`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-black text-[#1E293B]">{item.label}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#0047FF] transition-all group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle Card (Featured) - Only show for drivers */}
            {currentUser?.role !== 'owner' && (
              <div className="bg-[#1E293B] rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-900/10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                
                <div className="relative flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl font-black mb-1">My Active Vehicle</h3>
                    <p className="text-blue-400 font-bold text-sm">Primary transport for all bookings</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-2xl">
                    <Car className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="relative grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Vehicle Model</p>
                    <p className="font-black text-lg">Tesla Model 3</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Plate Number</p>
                    <p className="font-black text-lg tracking-widest">ABC-1234</p>
                  </div>
                </div>

                <button className="relative w-full bg-white/10 hover:bg-white/20 py-4 rounded-2xl font-black transition-all border border-white/10">
                  Manage All Vehicles
                </button>
              </div>
            )}
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-black text-[#1E293B] mb-8">Quick Info</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-[#0047FF] rounded-2xl">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Email Address</p>
                    <p className="font-bold text-[#1E293B] text-sm">{currentUser?.email || 'N/A'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-50 text-purple-500 rounded-2xl">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Phone Number</p>
                    <p className="font-bold text-[#1E293B] text-sm">{currentUser?.phone || '+91 98765 43210'}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 text-green-500 rounded-2xl">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Main City</p>
                    <p className="font-bold text-[#1E293B] text-sm">New York City, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0047FF] to-blue-700 rounded-[2.5rem] p-8 text-white shadow-xl shadow-blue-500/20 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Verified className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-black mb-2">Spotly Pro</h3>
              <p className="text-blue-100 text-sm font-bold mb-6">You're currently on the professional driver plan.</p>
              <button className="w-full bg-white text-[#0047FF] py-3 rounded-2xl font-black hover:scale-105 transition-all shadow-lg">
                View Benefits
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;
