import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  MapPin, Clock, Shield, Zap, ArrowLeft, 
  Navigation, Info, CheckCircle, Car, 
  ChevronRight, Calendar, User, Settings, Bell
} from 'lucide-react';
import { DashboardNavbar } from '../../components/dashboard/DashboardComponents';
import Footer from '../../components/layout/Footer';

const ParkingDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState('B4');
  const [duration, setDuration] = useState(2);
  const [parkingSpot, setParkingSpot] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock slots data
  const slots = {
    A: ['A1', 'A2', 'A3', 'A4', 'A5'],
    B: ['B1', 'B2', 'B3', 'B4', 'B5'],
    C: ['C1', 'C2', 'C3', 'C4', 'C5'],
    D: ['A6', 'A7', 'A8', 'A9'],
    E: ['B6', 'B7', 'B8', 'B9'],
    F: ['C6', 'C7', 'C8', 'C9']
  };

  const occupiedSlots = ['A2', 'A4', 'A5', 'B1', 'B2', 'B9', 'C3', 'C4', 'A8', 'C7', 'C8'];

  useEffect(() => {
    // In a real app, fetch from /api/parking/:id
    // For now, we fetch all and find by ID or use fallback
    const fetchSpot = async () => {
      try {
        const response = await fetch('/api/parking');
        const result = await response.json();
        const spot = result.data.find(s => s._id === id || s.id === parseInt(id));
        setParkingSpot(spot || result.data[0]);
      } catch (err) {
        console.error("Error fetching spot");
      } finally {
        setLoading(false);
      }
    };
    fetchSpot();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center font-bold text-blue-600">Loading...</div>;

  const hourlyRate = parkingSpot?.price_per_hour !== undefined ? parkingSpot.price_per_hour : 8.50;
  const totalAmount = (hourlyRate * duration).toFixed(2);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <DashboardNavbar />
      
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Back Link */}
        <button 
          onClick={() => navigate('/driver')}
          className="flex items-center gap-2 text-blue-600 font-bold mb-6 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Search
        </button>

        <div className="mb-8">
          <h1 className="text-4xl font-black text-[#1E293B] mb-3 tracking-tight">
            {parkingSpot?.name || "Harbor View Plaza Garage"}
          </h1>
          <div className="flex items-center gap-2 text-gray-500 font-medium">
            <MapPin className="w-5 h-5 text-blue-600" />
            {parkingSpot?.address || "452 Waterfront Way, San Francisco, CA 94105"}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Image Section */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px]">
              <img 
                src={parkingSpot?.image || "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1920&q=80"} 
                className="w-full h-full object-cover" 
                alt="Parking" 
              />
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-white shadow-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-black text-[#1E293B]">Verified Provider</span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Total Capacity', value: parkingSpot?.totalSlots || 120 },
                { label: 'Available Now', value: parkingSpot?.slots_left || 42, color: 'text-blue-600' },
                { label: 'Hourly Rate', value: `₹${hourlyRate.toFixed(2)}` }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center">
                  <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">{stat.label}</div>
                  <div className={`text-3xl font-black ${stat.color || 'text-[#1E293B]'}`}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Slot Map Section */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden p-8">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-black text-[#1E293B]">Real-time Slot Map</h2>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#10B981] rounded-sm" />
                    <span className="text-xs font-bold text-gray-500">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-[#EF4444] rounded-sm" />
                    <span className="text-xs font-bold text-gray-500">Occupied</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#F1F5F9] p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-12">
                  <div className="grid grid-cols-5 gap-3">
                    {Object.entries(slots).slice(0, 3).map(([row, items]) => (
                      items.map(slot => (
                        <button
                          key={slot}
                          disabled={occupiedSlots.includes(slot)}
                          onClick={() => setSelectedSlot(slot)}
                          className={`h-12 rounded-lg text-[10px] font-black transition-all ${
                            occupiedSlots.includes(slot) 
                              ? 'bg-[#EF4444] text-white opacity-60 cursor-not-allowed' 
                              : selectedSlot === slot
                                ? 'bg-[#0047FF] text-white shadow-lg ring-4 ring-blue-500/20'
                                : 'bg-[#10B981] text-white hover:scale-105'
                          }`}
                        >
                          {slot}
                        </button>
                      ))
                    ))}
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {Object.entries(slots).slice(3, 6).map(([row, items]) => (
                      items.map(slot => (
                        <button
                          key={slot}
                          disabled={occupiedSlots.includes(slot)}
                          onClick={() => setSelectedSlot(slot)}
                          className={`h-12 rounded-lg text-[10px] font-black transition-all ${
                            occupiedSlots.includes(slot) 
                              ? 'bg-[#EF4444] text-white opacity-60 cursor-not-allowed' 
                              : selectedSlot === slot
                                ? 'bg-[#0047FF] text-white shadow-lg ring-4 ring-blue-500/20'
                                : 'bg-[#10B981] text-white hover:scale-105'
                          }`}
                        >
                          {slot}
                        </button>
                      ))
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-8 text-xs text-gray-400 font-medium italic">
                  <Info className="w-3.5 h-3.5" />
                  Click an available green slot to pre-select your preferred parking position.
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Location Map Box */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-black text-[#1E293B] mb-6">Location Map</h3>
              <div className="h-48 bg-blue-50 rounded-3xl mb-6 relative overflow-hidden flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover opacity-20 grayscale" alt="Mini Map" />
                <div className="absolute inset-0 bg-blue-600/5" />
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-20" />
                  <MapPin className="w-10 h-10 text-blue-600 drop-shadow-xl relative z-10" />
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-400">Distance from you</span>
                  <span className="text-sm font-black text-[#1E293B]">0.8 miles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-400">Estimated drive time</span>
                  <span className="text-sm font-black text-[#1E293B]">4 mins</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  const address = parkingSpot?.address || "452 Waterfront Way, San Francisco, CA 94105";
                  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
                  window.open(googleMapsUrl, '_blank');
                }}
                className="w-full py-4 border-2 border-blue-600 text-blue-600 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
              >
                <Navigation className="w-5 h-5" />
                Open in Maps
              </button>

            </div>

            {/* Booking Summary Box */}
            <div className="bg-[#0047FF] rounded-[2.5rem] shadow-2xl shadow-blue-500/40 p-10 text-white relative overflow-hidden">
               {/* Decorative Circle */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
               
               <h3 className="text-2xl font-black mb-8 relative z-10 text-white">Booking Summary</h3>
               
               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6 relative z-10">
                 <div className="text-[10px] font-black uppercase tracking-widest text-blue-100 mb-1">Selected Slot</div>
                 <div className="text-3xl font-black">Slot {selectedSlot}</div>
               </div>

               <div className="space-y-4 mb-8 relative z-10">
                 <div>
                   <label className="text-[10px] font-black uppercase tracking-widest text-blue-100 mb-2 block">Check-in Time</label>
                   <input 
                    type="datetime-local" 
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-white/30"
                    defaultValue={new Date().toISOString().slice(0, 16)}
                   />
                 </div>
                 
                 <div>
                   <label className="text-[10px] font-black uppercase tracking-widest text-blue-100 mb-2 block">Duration (Hours)</label>
                   <div className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-xl p-2">
                     <button 
                      onClick={() => setDuration(Math.max(1, duration - 1))}
                      className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg hover:bg-white/30 transition-all"
                     >-</button>
                     <span className="flex-1 text-center font-black text-xl">{duration}</span>
                     <button 
                      onClick={() => setDuration(duration + 1)}
                      className="w-10 h-10 flex items-center justify-center bg-white/20 rounded-lg hover:bg-white/30 transition-all"
                     >+</button>
                   </div>
                 </div>
               </div>

               <div className="flex justify-between items-end mb-10 relative z-10">
                 <div className="text-2xl font-black">Total</div>
                 <div className="text-5xl font-black tracking-tighter">₹{totalAmount}</div>
               </div>

               <button 
                onClick={() => navigate('/checkout', { 
                  state: { 
                    parkingSpot, 
                    selectedSlot, 
                    duration, 
                    totalAmount,
                    type: parkingSpot?.type || 'Standard EV'
                  } 
                })}
                className="w-full py-5 bg-white text-[#0047FF] rounded-2xl font-black shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all relative z-10"
               >
                 Confirm & Pay Now
               </button>

            </div>

            {/* Amenities Box */}
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8">
              <h3 className="text-xl font-black text-[#1E293B] mb-8">Garage Amenities</h3>
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                {[
                  { icon: <Shield className="w-6 h-6 text-blue-600" />, title: '24/7 Security' },
                  { icon: <Zap className="w-6 h-6 text-blue-600" />, title: 'EV Charging' },
                  { icon: <ArrowLeft className="w-6 h-6 text-blue-600 transform rotate-90" />, title: 'Lift Access' },
                  { icon: <User className="w-6 h-6 text-blue-600" />, title: 'Disabled Access' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 rounded-xl">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-gray-500 leading-tight">{item.title}</span>
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

export default ParkingDetailsPage;
