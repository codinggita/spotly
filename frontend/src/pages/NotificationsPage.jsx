import React, { useState } from 'react';
import { 
  Bell, CheckCircle2, AlertCircle, Info, 
  Trash2, MoreHorizontal, Settings,
  Clock, MapPin, Calendar
} from 'lucide-react';
import { DashboardNavbar } from '../components/dashboard/DashboardComponents';
import Footer from '../components/layout/Footer';

const NotificationsPage = () => {
  const [filter, setFilter] = useState('All');

  const notifications = [
    {
      id: 1,
      type: 'booking',
      title: 'Booking Confirmed!',
      message: 'Your slot at Plaza Central Garage (A-24) is successfully reserved for today at 2:00 PM.',
      time: '5 mins ago',
      isUnread: true,
      icon: CheckCircle2,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 2,
      type: 'system',
      title: 'New Feature Available',
      message: 'You can now filter parking spots by "Free" vs "Paid" directly from your dashboard map.',
      time: '2 hours ago',
      isUnread: true,
      icon: Info,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 3,
      type: 'alert',
      title: 'Parking Session Ending',
      message: 'Your session at Urban Flow Plaza will expire in 15 minutes. Would you like to extend?',
      time: '4 hours ago',
      isUnread: false,
      icon: AlertCircle,
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 4,
      type: 'booking',
      title: 'Payment Successful',
      message: '₹120.00 has been debited for your booking at North Tower Garage.',
      time: '1 day ago',
      isUnread: false,
      icon: CheckCircle2,
      iconColor: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 5,
      type: 'system',
      title: 'Account Update',
      message: 'Your vehicle details for "Tesla Model 3" have been successfully updated.',
      time: '2 days ago',
      isUnread: false,
      icon: Settings,
      iconColor: 'text-gray-500',
      bgColor: 'bg-gray-50'
    }
  ];

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'All') return true;
    if (filter === 'Unread') return n.isUnread;
    return n.type === filter.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <DashboardNavbar />
      
      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black text-[#1E293B] mb-2 tracking-tight">Notifications</h1>
            <p className="text-gray-400 font-bold">Stay updated with your bookings and platform activity.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-3 bg-white border border-gray-200 rounded-2xl text-gray-400 hover:text-[#1E293B] hover:border-gray-300 transition-all shadow-sm">
              <Trash2 className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white border border-gray-200 rounded-2xl text-gray-400 hover:text-[#1E293B] hover:border-gray-300 transition-all shadow-sm">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm w-fit mb-8">
          {['All', 'Unread', 'Booking', 'System'].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all ${
                filter === t 
                  ? 'bg-[#1E293B] text-white shadow-lg' 
                  : 'text-gray-400 hover:text-[#1E293B]'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((n) => (
              <div 
                key={n.id} 
                className={`group bg-white p-6 rounded-[2rem] border transition-all hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer relative overflow-hidden ${
                  n.isUnread ? 'border-blue-100 shadow-md shadow-blue-500/5' : 'border-gray-100 shadow-sm'
                }`}
              >
                {n.isUnread && (
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0047FF]" />
                )}
                
                <div className="flex gap-6 items-start">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border-2 border-white shadow-sm ${n.bgColor}`}>
                    <n.icon className={`w-6 h-6 ${n.iconColor}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className={`font-black tracking-tight truncate ${n.isUnread ? 'text-[#1E293B] text-lg' : 'text-gray-500'}`}>
                        {n.title}
                      </h3>
                      <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded-lg">
                        {n.time}
                      </span>
                    </div>
                    <p className={`text-sm leading-relaxed mb-4 ${n.isUnread ? 'text-[#64748B] font-bold' : 'text-gray-400'}`}>
                      {n.message}
                    </p>
                    
                    <div className="flex items-center gap-4 text-[11px] font-black text-gray-300 uppercase tracking-widest">
                      <div className="flex items-center gap-1.5 hover:text-blue-500 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Mark as Read
                      </div>
                      <div className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />
                        Delete
                      </div>
                    </div>
                  </div>
                  
                  <button className="opacity-0 group-hover:opacity-100 p-2 text-gray-300 hover:text-[#1E293B] transition-all">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-[2.5rem] border border-dashed border-gray-200">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="w-8 h-8 text-gray-200" />
              </div>
              <h3 className="text-xl font-black text-[#1E293B] mb-2">All caught up!</h3>
              <p className="text-gray-400 font-bold">No {filter.toLowerCase()} notifications found.</p>
            </div>
          )}
        </div>
        
        <div className="mt-12 text-center">
          <button className="text-sm font-black text-[#0047FF] hover:underline bg-blue-50 px-6 py-3 rounded-2xl transition-all">
            View All History
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotificationsPage;
