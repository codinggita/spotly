import React, { useState, useEffect } from 'react';

const ParkingMap = () => {
  const [location, setLocation] = useState({ lat: 37.7749, lng: -122.4194 }); // Default to SF
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLoading(false);
        },
        () => {
          setLoading(false); // Fallback to default
        }
      );
    } else {
      setLoading(false);
    }
  }, []);

  // Construct the Google Maps Embed URL dynamically
  const googleMapsUrl = `https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`;

  return (
    <div className="h-full w-full relative bg-gray-100 flex items-center justify-center overflow-hidden">
      {loading ? (
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#0047FF] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium">Locating you on Google Maps...</p>
        </div>
      ) : (
        <iframe
          title="Google Maps"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={googleMapsUrl}
          className="grayscale-0 contrast-125"
        ></iframe>
      )}

      {/* Spotly Management Overlay (Stays on top of iframe) */}
      <div className="absolute top-6 left-6 z-10 bg-white/95 backdrop-blur-md p-4 rounded-3xl border border-white shadow-2xl pointer-events-none">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="font-bold text-[#1E293B]">Google Live View</div>
        </div>
        <div className="text-xs text-gray-500 font-medium">Showing spots near your current position</div>
      </div>
    </div>
  );
};

export default ParkingMap;
