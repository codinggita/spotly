import React from 'react';
import { 
  Clock, MapPin, Navigation, Phone, 
  ShieldCheck, AlertCircle, ChevronRight,
  Car, CreditCard, Calendar
} from 'lucide-react';
import { DashboardNavbar } from '../../components/dashboard/DashboardComponents';
import Footer from '../../components/layout/Footer';

const BookingDetailsPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <DashboardNavbar />
      
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Booking Header Card */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-32 -mt-32 blur-3xl" />
              
              <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-[1.5rem] overflow-hidden shadow-lg border-2 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=200&q=80" 
                      alt="Parking"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-black text-[#1E293B] mb-2 tracking-tight">Urban Flow Plaza</h1>
                    <div className="flex items-center gap-2 text-gray-400 font-bold">
                      <MapPin className="w-4 h-4 text-[#0047FF]" />
                      <span>Downtown district, Sector 45</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-3">
                  <div className="bg-green-50 text-green-600 px-6 py-2 rounded-full font-black text-sm border border-green-100 flex items-center gap-2 shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    ACTIVE
                  </div>
                  <p className="text-xs font-black text-gray-300 uppercase tracking-widest">Slot: B-12</p>
                </div>
              </div>
            </div>

            {/* Timeline Stepper */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-black text-[#1E293B] mb-8">Booking Journey</h2>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100" />
                
                <div className="space-y-12 relative">
                  {/* Step 1 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0047FF] flex items-center justify-center relative z-10 border-2 border-white shadow-sm">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#1E293B]">Booked</h4>
                      <p className="text-sm text-gray-400 font-bold">Oct 24, 2024 • 10:30 AM</p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-[#0047FF] text-white flex items-center justify-center relative z-10 shadow-xl shadow-blue-500/20 border-2 border-white">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#1E293B]">Active</h4>
                      <p className="text-sm text-[#0047FF] font-bold">In Progress • 2h 45m left</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 text-gray-300 flex items-center justify-center relative z-10 border-2 border-white shadow-sm">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-300">Completed</h4>
                      <p className="text-sm text-gray-200 font-bold">Estimated 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Duration & Price */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm group hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-orange-50 text-orange-500 rounded-2xl">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#1E293B]">Duration & Pricing</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-gray-400 font-bold">Total Duration</span>
                    <span className="text-[#1E293B] font-black">4 Hours</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-gray-400 font-bold">Hourly Rate</span>
                    <span className="text-[#1E293B] font-black">₹30.00/hr</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-gray-400 font-bold">Total Paid</span>
                    <span className="text-2xl font-black text-[#0047FF]">₹120.00</span>
                  </div>
                </div>
              </div>

              {/* Vehicle Info */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm group hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-purple-50 text-purple-500 rounded-2xl">
                    <Car className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#1E293B]">Vehicle Details</h3>
                </div>
                <div className="space-y-4 text-center p-4 bg-gray-50 rounded-3xl">
                  <p className="text-sm font-black text-[#1E293B]">Tesla Model 3</p>
                  <p className="text-3xl font-black text-[#1E293B] tracking-widest uppercase">ABC-1234</p>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">White Metallic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-[380px] space-y-8">
            {/* Map Preview */}
            <div className="bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-sm overflow-hidden">
              <div className="h-48 rounded-[1.5rem] bg-blue-100 mb-6 relative overflow-hidden border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&q=80" 
                  alt="Map"
                  className="w-full h-full object-cover opacity-50 grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#0047FF] rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/50 relative">
                    <div className="absolute inset-0 bg-[#0047FF] rounded-full animate-ping opacity-25" />
                    <Navigation className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#0047FF] hover:bg-blue-700 text-white py-4 rounded-2xl font-black transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] flex items-center justify-center gap-3">
                <Navigation className="w-5 h-5" />
                Navigate to Slot
              </button>
            </div>

            {/* Security & Help */}
            <div className="bg-[#1E293B] rounded-[2.5rem] p-8 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              
              <h3 className="text-xl font-black mb-6 relative">Security & Support</h3>
              <div className="space-y-4 relative">
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="w-5 h-5 text-green-400" />
                    <span className="font-bold text-sm">Security Hotline</span>
                  </div>
                  <Phone className="w-4 h-4 text-gray-500 group-hover:text-white" />
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all group">
                  <div className="flex items-center gap-4">
                    <AlertCircle className="w-5 h-5 text-orange-400" />
                    <span className="font-bold text-sm">Report Issue</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingDetailsPage;
