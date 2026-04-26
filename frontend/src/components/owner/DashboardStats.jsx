import React from 'react';
import { Car, LayoutGrid, Calendar, Wallet } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, trend, trendType, iconBg }) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${iconBg}`}>
        <Icon className="w-6 h-6 text-[#1E293B]" />
      </div>
      {trend && (
        <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${
          trendType === 'positive' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
        }`}>
          {trend}
        </span>
      )}
    </div>
    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{label}</p>
    <p className="text-3xl font-extrabold text-[#1E293B]">{value}</p>
  </div>
);

const DashboardStats = () => {
  const stats = [
    {
      icon: Car,
      label: 'Total Parking Spaces',
      value: '14',
      trend: '+2 New',
      trendType: 'positive',
      iconBg: 'bg-blue-50'
    },
    {
      icon: LayoutGrid,
      label: 'Total Slots',
      value: '128',
      trend: '85% Occupied',
      trendType: 'positive',
      iconBg: 'bg-indigo-50'
    },
    {
      icon: Calendar,
      label: 'Active Bookings',
      value: '42',
      trend: '12 Imminent',
      trendType: 'warning',
      iconBg: 'bg-orange-50'
    },
    {
      icon: Wallet,
      label: 'Monthly Earnings',
      value: '₹48,250',
      trend: '+18% MoM',
      trendType: 'positive',
      iconBg: 'bg-blue-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default DashboardStats;
