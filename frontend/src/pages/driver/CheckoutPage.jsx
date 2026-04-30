import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, MapPin, Calendar, Car, 
  Shield, Clock, Lock, ArrowRight, CheckCircle2,
  Settings, Bell, MessageSquare
} from 'lucide-react';
import { DashboardNavbar } from '../../components/dashboard/DashboardComponents';
import Footer from '../../components/layout/Footer';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || {
    parkingSpot: {
      name: "Skyline Premium Parking",
      address: "122 High Street, North District",
      image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
      price_per_hour: 4.50
    },
    selectedSlot: "A-402",
    duration: 8,
    totalAmount: 33.48,
    type: "Standard EV"
  };

  const { parkingSpot, selectedSlot, duration, totalAmount, type } = bookingData;

  const priceSummary = {
    hourlyRate: parkingSpot.price_per_hour || 0,
    hours: duration,
    subtotal: ((parkingSpot.price_per_hour || 0) * duration).toFixed(2),
    serviceFee: 1.20,
    promoCode: {
      code: "SPOT10",
      discount: 3.72
    },
    total: totalAmount
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      <DashboardNavbar />
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header & Back Button */}
        <div className="flex items-center gap-4 mb-10">
          <button 
            onClick={() => navigate(-1)}
            className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:bg-gray-50 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-[#0047FF]" />
          </button>
          <h1 className="text-3xl font-black text-[#1E293B]">Confirm your stay</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Parking Spot Card */}
            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-48 h-32 rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
                <img 
                  src={parkingSpot.image} 
                  alt={parkingSpot.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-2xl font-black text-[#1E293B]">{parkingSpot.name}</h2>
                  <span className="bg-blue-50 text-blue-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">
                    Level 4
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-400 font-medium mb-6">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span className="text-sm">{parkingSpot.address}</span>
                </div>
                <div className="grid grid-cols-2 gap-8 border-t border-gray-50 pt-6">
                  <div>
                    <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Slot Number</div>
                    <div className="text-lg font-black text-blue-600">{selectedSlot}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Type</div>
                    <div className="text-lg font-black text-[#1E293B]">{type || "Standard EV"}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Date & Time Card */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-blue-50 rounded-2xl">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-black text-[#1E293B]">Date & Time</h3>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-400">Entry</span>
                    <span className="text-sm font-black text-[#1E293B]">Oct 24, 2023 • 09:00 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-400">Exit</span>
                    <span className="text-sm font-black text-[#1E293B]">Oct 24, 2023 • 05:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Vehicle Details Card */}
              <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-blue-50 rounded-2xl">
                    <Car className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-black text-[#1E293B]">Vehicle Details</h3>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <Car className="w-8 h-8 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-black text-[#1E293B]">Tesla Model 3</div>
                    <div className="text-xs font-bold text-gray-400">ABC-1234 • White</div>
                  </div>
                  <button className="text-sm font-black text-blue-600 hover:underline">Change</button>
                </div>
              </div>
            </div>

            {/* Partner Banner */}
            <div className="relative rounded-[2.5rem] overflow-hidden h-64 shadow-lg group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" 
                className="w-full h-full object-cover opacity-20 grayscale"
                alt="Map Background"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-blue-900/40" />
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md px-6 py-3 rounded-2xl border border-white flex items-center gap-3 shadow-xl transition-transform group-hover:scale-105">
                <div className="bg-blue-600 p-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-black text-[#1E293B]">Certified Spotly Partner</span>
              </div>
            </div>
          </div>

          {/* Right Column: Price Summary & Payment */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-xl shadow-blue-500/5">
              <h3 className="text-xl font-black text-[#1E293B] mb-8">Price Summary</h3>
              
              <div className="space-y-6 mb-8 pb-8 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-gray-400">Hourly Rate (₹{priceSummary.hourlyRate.toFixed(2)} × {priceSummary.hours}h)</span>
                  <span className="text-[#1E293B]">₹{priceSummary.subtotal}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-gray-400">Service Fee</span>
                  <span className="text-[#1E293B]">₹{priceSummary.serviceFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-[#0047FF]">Promo Code ({priceSummary.promoCode.code})</span>
                  <span className="text-[#0047FF]">-₹{priceSummary.promoCode.discount.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-10">
                <div>
                  <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">Total Price</div>
                  <div className="text-4xl font-black text-[#1E293B] tracking-tighter">₹{priceSummary.total}</div>
                </div>
                <span className="text-sm font-bold text-gray-400 mb-1">INR</span>
              </div>

              <button className="w-full py-5 bg-[#0047FF] text-white rounded-3xl font-black flex items-center justify-center gap-3 shadow-xl shadow-blue-500/30 hover:bg-blue-700 hover:scale-[1.02] active:scale-[0.98] transition-all mb-8">
                Confirm Booking
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-400">
                  <Lock className="w-3.5 h-3.5" />
                  Secure 256-bit SSL Payment
                </div>
                <p className="text-[10px] text-center text-gray-400 font-medium leading-relaxed px-4">
                  You won't be charged until the booking is confirmed by the owner.
                </p>
              </div>
            </div>

            {/* Why book with Spotly? */}
            <div className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-black text-[#1E293B] mb-8">Why book with Spotly?</h3>
              <div className="space-y-8">
                {[
                  { icon: <Shield className="w-5 h-5" />, text: "Insurance coverage included for all bookings" },
                  { icon: <Clock className="w-5 h-5" />, text: "Free cancellation up to 2 hours before arrival" },
                  { icon: <MessageSquare className="w-5 h-5" />, text: "24/7 dedicated customer support" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="text-blue-600 mt-0.5">
                      {item.icon}
                    </div>
                    <p className="text-sm font-bold text-gray-500 leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
