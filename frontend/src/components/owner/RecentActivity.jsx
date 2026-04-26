import React from 'react';
import { Car } from 'lucide-react';

const RecentActivity = () => {
  const activities = [
    {
      vehicle: 'MH 12 AB 4567',
      spot: 'Skyline Residency, Wing B',
      time: 'Today, 10:30 AM',
      status: 'ACTIVE',
      earnings: '₹250.00',
    },
    {
      vehicle: 'MH 01 XY 1234',
      spot: 'Green Valley, Slot 14',
      time: 'Today, 09:15 AM',
      status: 'COMPLETED',
      earnings: '₹80.00',
    },
    {
      vehicle: 'MH 04 PK 8899',
      spot: 'Downtown Plaza, Basement',
      time: 'Today, 08:45 AM',
      status: 'EXTENDED',
      earnings: '₹450.00',
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'bg-green-50 text-green-600';
      case 'COMPLETED': return 'bg-gray-50 text-gray-500';
      case 'EXTENDED': return 'bg-orange-50 text-orange-600';
      default: return 'bg-gray-50 text-gray-500';
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-[#1E293B]">Recent Activity</h3>
        <button className="text-[#0047FF] text-xs font-bold hover:underline">View All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-gray-50">
              <th className="pb-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Vehicle</th>
              <th className="pb-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Parking Spot</th>
              <th className="pb-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Time</th>
              <th className="pb-4 text-[10px] font-bold text-gray-400 uppercase tracking-wider">Status</th>
              <th className="pb-4 text-right text-[10px] font-bold text-gray-400 uppercase tracking-wider">Earnings</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {activities.map((activity, index) => (
              <tr key={index} className="group hover:bg-gray-50 transition-colors">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors">
                      <Car className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="text-sm font-bold text-[#1E293B]">{activity.vehicle}</span>
                  </div>
                </td>
                <td className="py-4">
                  <p className="text-sm font-bold text-[#1E293B]">{activity.spot.split(',')[0]}</p>
                  <p className="text-[10px] text-gray-400">{activity.spot.split(',')[1]}</p>
                </td>
                <td className="py-4 text-xs font-medium text-gray-500">{activity.time}</td>
                <td className="py-4">
                  <span className={`text-[10px] font-extrabold px-2 py-1 rounded-md tracking-wider ${getStatusColor(activity.status)}`}>
                    {activity.status}
                  </span>
                </td>
                <td className="py-4 text-right text-sm font-extrabold text-[#1E293B]">{activity.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;
