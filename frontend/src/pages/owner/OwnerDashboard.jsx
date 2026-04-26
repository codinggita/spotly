import React from 'react';
import OwnerSidebar from '../../components/owner/OwnerSidebar';
import OwnerHeader from '../../components/owner/OwnerHeader';
import DashboardStats from '../../components/owner/DashboardStats';
import RevenueAnalytics from '../../components/owner/RevenueAnalytics';
import RecentActivity from '../../components/owner/RecentActivity';
import { BoostEarnings, PayoutInfo } from '../../components/owner/PayoutInfo';
import { Download, Plus } from 'lucide-react';
import Footer from '../../components/layout/Footer';
import { getCurrentUser } from '../../services/authService';

const OwnerDashboard = () => {
  const user = getCurrentUser();
  return (
    <div className="flex h-screen bg-[#F8FAFC] overflow-hidden">
      <OwnerSidebar activePage="dashboard" />
      
      <div className="flex-1 flex flex-col min-w-0">
        <OwnerHeader />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-[1400px] mx-auto space-y-8">
            {/* Page Title & Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-[#1E293B] mb-2">Dashboard Overview</h1>
                <p className="text-sm font-medium text-gray-400">Welcome back, {user?.fullName?.split(' ')[0] || 'User'}. Here's what's happening with your spots today.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-[#1E293B] hover:bg-gray-50 transition-all shadow-sm">
                  <Download className="w-4 h-4" /> Export Report
                </button>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0047FF] rounded-xl text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                  <Plus className="w-4 h-4" /> New Listing
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <DashboardStats />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column (Charts & Activity) */}
              <div className="lg:col-span-2 space-y-8">
                <RevenueAnalytics />
                <RecentActivity />
              </div>

              {/* Right Column (Boost, Payout) */}
              <div className="space-y-8">
                <BoostEarnings />
                <PayoutInfo />
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default OwnerDashboard;
