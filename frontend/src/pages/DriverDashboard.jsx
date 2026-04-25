import React, { useState, useEffect } from 'react';
import { Search, Compass, MapPin } from 'lucide-react';
import ParkingCard, { DashboardNavbar } from '../components/dashboard/DashboardComponents';
import ParkingMap from '../components/dashboard/ParkingMap';
import { getParkingSpots } from '../services/parkingService';
import Footer from '../components/layout/Footer';

const DriverDashboard = () => {
  const [parkingSpots, setParkingSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'paid', 'free'
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [mapQuery, setMapQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

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

  // Fetch suggestions from Nominatim API (OpenStreetMap)
  useEffect(() => {
    if (searchInput.length < 3) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchInput)}&addressdetails=1&limit=5`);
        const data = await response.json();
        setSuggestions(data);
      } catch (err) {
        console.error('Error fetching suggestions:', err);
      }
    }, 500); // Debounce for 500ms

    return () => clearTimeout(timer);
  }, [searchInput]);

  const handleSelectSuggestion = (suggestion) => {
    const address = suggestion.display_name;
    setSearchInput(address);
    setMapQuery(address);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setMapQuery(searchInput);
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const filteredSpots = parkingSpots.filter(spot => {
    if (filter === 'all') return true;
    if (filter === 'free') return parseFloat(spot.price_per_hour) === 0;
    if (filter === 'paid') return parseFloat(spot.price_per_hour) > 0;
    return true;
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
                placeholder="Search location (e.g. Ahmedabad, NY, etc.)"
                value={searchInput}
                onChange={(e) => {
                  setSearchInput(e.target.value);
                  setShowSuggestions(true);
                }}
                onKeyDown={handleKeyDown}
                onFocus={() => setShowSuggestions(true)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500/10 focus:border-[#0047FF] outline-none transition-all"
              />
              
              {/* Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-[100]">
                  {suggestions.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectSuggestion(item)}
                      className="w-full px-5 py-4 text-left hover:bg-blue-50 transition-colors border-b last:border-0 border-gray-50 flex items-start gap-3 group"
                    >
                      <MapPin className="w-5 h-5 text-gray-400 mt-0.5 group-hover:text-blue-600" />
                      <div>
                        <div className="text-sm font-bold text-[#1E293B] group-hover:text-blue-600 transition-colors">
                          {item.display_name.split(',')[0]}
                        </div>
                        <div className="text-[10px] text-gray-400 font-medium truncate max-w-[240px]">
                          {item.display_name.split(',').slice(1).join(',')}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
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
          <ParkingMap searchQuery={mapQuery} />
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
                isPaid={parseFloat(spot.price_per_hour) > 0}
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
