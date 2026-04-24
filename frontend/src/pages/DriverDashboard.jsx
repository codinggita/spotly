import React, { useState, useEffect } from 'react';
import { Search, Compass } from 'lucide-react';
import ParkingCard, { DashboardNavbar } from '../components/dashboard/DashboardComponents';
import ParkingMap from '../components/dashboard/ParkingMap';
import { getParkingSpots } from '../services/parkingService';
import Footer from '../components/layout/Footer';

const DriverDashboard = () => {
  const [parkingSpots, setParkingSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'paid', 'free'

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const data = await getParkingSpots();
        console.log('--- REAL DATABASE DATA ---');
        console.log(data);
        console.log('--------------------------');
        setParkingSpots(data);
      } catch (err) {
        console.error('Failed to load parking spots');
      } finally {
        setLoading(false);
      }
    };
    fetchSpots();
  }, []);

  const filteredSpots = parkingSpots.filter(spot => {
    if (filter === 'all') return true;
    return spot.type?.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <DashboardNavbar />
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-[#1E293B] mb-2">Nearby Parking</h1>
            <p className="text-gray-500 font-medium">Discover the best spots in San Francisco, CA</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative flex-grow md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search location..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500/10 focus:border-[#0047FF] outline-none transition-all"
              />
            </div>
            
            <div className="flex bg-white p-1.5 rounded-2xl border border-gray-100 shadow-sm">
              <button 
                onClick={() => setFilter('all')}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${filter === 'all' ? 'bg-[#0047FF] text-white shadow-lg shadow-blue-500/20' : 'text-gray-500 hover:text-gray-900'}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('paid')}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${filter === 'paid' ? 'bg-[#0047FF] text-white shadow-lg shadow-blue-500/20' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Paid
              </button>
              <button 
                onClick={() => setFilter('free')}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${filter === 'free' ? 'bg-[#0047FF] text-white shadow-lg shadow-blue-500/20' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Free
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden mb-12 border border-white shadow-2xl shadow-blue-500/10">
          <ParkingMap />
        </div>

        {/* Parking Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            [1, 2, 3].map((i) => (
              <div key={i} className="h-80 bg-white rounded-[2rem] animate-pulse border border-gray-100" />
            ))
          ) : filteredSpots.length > 0 ? (
            filteredSpots.map((spot, index) => (
              <ParkingCard 
                key={index} 
                id={spot._id || spot.id}
                image={spot.image || spot.img_url || "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80"}
                title={spot.name || spot.title}
                address={spot.address}
                price={spot.price_per_hour}
                slots={spot.slots_left}
                isPaid={spot.type === 'PAID'}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-500 font-medium">No {filter !== 'all' ? filter : ''} parking spots found.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DriverDashboard;
