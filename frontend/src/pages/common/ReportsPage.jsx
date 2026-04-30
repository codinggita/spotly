import React, { useState } from 'react';
import { 
  BarChart3, Calendar, Download, Filter, 
  MoreVertical, Search, Users, Clock, 
  ChevronLeft, ChevronRight, TrendingUp,
  MapPin
} from 'lucide-react';
import { DashboardNavbar } from '../../components/dashboard/DashboardComponents';
import Footer from '../../components/layout/Footer';

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState('All Bookings');

  const stats = [
    { label: "Active Bookings", value: "124", icon: Calendar, trend: "+12%", color: "blue" },
    { label: "Monthly Spent", value: "₹4,250", icon: BarChart3, trend: "+8%", color: "green" },
    { label: "Avg. Duration", value: "4.2 Hrs", icon: Clock, trend: null, color: "orange" },
    { label: "Unique Users", value: "892", icon: Users, trend: null, color: "purple" }
  ];

  const bookings = [
    {
      parking: "Plaza Central Garage",
      location: "Downtown District",
      user: "Alex Thompson",
      vehicle: "BMW M3 • ABC-1234",
      slot: "A-24",
      type: "Paid",
      duration: "Oct 24, 02:00 PM - 05:00 PM",
      status: "ACTIVE",
      img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=100&q=80"
    },
    {
      parking: "Riverview Open Lot",
      location: "East Riverside",
      user: "Sarah Jenkins",
      vehicle: "Tesla Model Y • XYZ-9876",
      slot: "C-12",
      type: "Free",
      duration: "Oct 23, 09:00 AM - 11:30 AM",
      status: "COMPLETED",
      img: "https://images.unsplash.com/photo-1531850095821-39d91b3924f3?auto=format&fit=crop&w=100&q=80"
    },
    {
      parking: "Corporate Park Valet",
      location: "Tech Hub",
      user: "Michael Chen",
      vehicle: "Audi Q7 • MCH-5522",
      slot: "V-09",
      type: "Paid",
      duration: "Oct 24, 04:30 PM - 08:00 PM",
      status: "SCHEDULED",
      img: "https://images.unsplash.com/photo-1590674899484-13da0d1b58f5?auto=format&fit=crop&w=100&q=80"
    },
    {
      parking: "Plaza Central Garage",
      location: "Downtown District",
      user: "Emily Ross",
      vehicle: "Honda Civic • ROS-1122",
      slot: "B-05",
      type: "Paid",
      duration: "Oct 23, 01:00 PM - 04:00 PM",
      status: "CANCELLED",
      img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=100&q=80"
    },
    {
      parking: "North Tower Garage",
      location: "Financial District",
      user: "David Miller",
      vehicle: "Mercedes GLB • DVM-9911",
      slot: "F-18",
      type: "Paid",
      duration: "Oct 24, 11:00 AM - 01:30 PM",
      status: "ACTIVE",
      img: "https://images.unsplash.com/photo-1545179605-1296651e9d43?auto=format&fit=crop&w=100&q=80"
    }
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'ACTIVE': return 'bg-green-50 text-green-600 border-green-100';
      case 'COMPLETED': return 'bg-gray-50 text-gray-500 border-gray-100';
      case 'SCHEDULED': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'CANCELLED': return 'bg-red-50 text-red-600 border-red-100';
      default: return 'bg-gray-50 text-gray-500 border-gray-100';
    }
  };

  const filteredBookings = bookings.filter(item => {
    if (activeTab === 'All Bookings') return true;
    if (activeTab === 'Active Only') return item.status === 'ACTIVE';
    if (activeTab === 'Completed') return item.status === 'COMPLETED';
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <DashboardNavbar />
      
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-[#1E293B] mb-2 tracking-tight">Booking History</h1>
            <p className="text-gray-400 font-bold">Manage and monitor all vehicle reservations across your locations.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl font-black text-[#1E293B] hover:bg-gray-50 transition-all shadow-sm">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 bg-white border border-gray-200 px-6 py-3 rounded-2xl font-black text-[#1E293B] hover:bg-gray-50 transition-all shadow-sm">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl hover:shadow-blue-500/5 transition-all">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${
                  stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  stat.color === 'green' ? 'bg-green-50 text-green-600' :
                  stat.color === 'orange' ? 'bg-orange-50 text-orange-600' :
                  'bg-purple-50 text-purple-600'
                }`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                {stat.trend && (
                  <div className="flex items-center gap-1 text-[10px] font-black text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                    <TrendingUp className="w-3 h-3" />
                    {stat.trend}
                  </div>
                )}
              </div>
              <p className="text-xs font-black text-gray-300 uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-[#1E293B]">{stat.value}</h3>
            </div>
          ))}
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
          {/* Table Tabs */}
          <div className="px-8 py-6 border-b border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100">
              {['All Bookings', 'Active Only', 'Completed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    activeTab === tab 
                      ? 'bg-[#1E293B] text-white shadow-lg' 
                      : 'text-gray-400 hover:text-[#1E293B]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="text-sm font-bold text-gray-400">
              Showing <span className="text-[#1E293B]">1-{filteredBookings.length}</span> of {filteredBookings.length}
            </div>
          </div>

          {/* Real Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Parking Name</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">User</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Slot Number</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Type</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Duration</th>
                  <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredBookings.length > 0 ? (
                  filteredBookings.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50/30 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <img src={item.img} alt="" className="w-12 h-12 rounded-xl object-cover shadow-sm" />
                          <div>
                            <p className="text-sm font-black text-[#1E293B]">{item.parking}</p>
                            <p className="text-[10px] font-bold text-gray-400">{item.location}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div>
                          <p className="text-sm font-black text-[#1E293B]">{item.user}</p>
                          <p className="text-[10px] font-bold text-gray-400">{item.vehicle}</p>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="bg-gray-100 text-gray-600 text-[10px] font-black px-3 py-1.5 rounded-lg border border-gray-200">
                          {item.slot}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`text-[10px] font-black px-3 py-1.5 rounded-lg border ${
                          item.type === 'Paid' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-gray-50 text-gray-500 border-gray-100'
                        }`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-[10px] font-bold text-gray-500 w-32">{item.duration}</p>
                      </td>
                      <td className="px-8 py-6">
                        <span className={`text-[10px] font-black px-3 py-1.5 rounded-full border flex items-center gap-1.5 w-fit ${getStatusStyle(item.status)}`}>
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            item.status === 'ACTIVE' ? 'bg-green-500 animate-pulse' : 
                            item.status === 'CANCELLED' ? 'bg-red-500' : 
                            item.status === 'SCHEDULED' ? 'bg-blue-500' : 'bg-gray-400'
                          }`} />
                          {item.status}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <button className="p-2 text-gray-300 hover:text-[#1E293B] transition-colors">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="px-8 py-20 text-center">
                      <p className="text-gray-400 font-bold">No {activeTab.toLowerCase()} found.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-8 py-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <button className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#1E293B] transition-all">
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <div className="flex items-center gap-2">
              {[1, 2, 3, '...', 12].map((page, i) => (
                <button
                  key={i}
                  className={`w-10 h-10 rounded-xl text-sm font-bold transition-all ${
                    page === 1 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                      : 'text-gray-400 hover:bg-gray-50 hover:text-[#1E293B]'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#1E293B] transition-all">
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <p className="text-center mt-12 text-gray-400 text-xs font-bold">
          Powered by Spotly Intelligence Platform • © {new Date().getFullYear()}
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default ReportsPage;
