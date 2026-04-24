import React from 'react';

const AuthLeftPanel = () => {
  return (
    <div className="h-full w-full relative bg-[#0047FF] overflow-hidden flex flex-col justify-center px-12 lg:px-20">
      {/* Background Overlay Pattern/Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0036CC] to-[#0047FF] opacity-90"></div>
      <div className="absolute inset-0 opacity-100 bg-[url('https://i.pinimg.com/1200x/bf/b4/47/bfb447bf3bf8ea25b0d8a9ded8332ca8.jpg')] bg-cover bg-center mix-blend-overlay"></div>

      <div className="relative z-10 max-w-lg">
        <h2 className="text-4xl font-bold text-white mb-6">Spotly</h2>
        <p className="text-xl text-blue-100 leading-relaxed">
          Find the perfect spot, every time. Experience the future of urban mobility 
          with smart, real-time parking solutions.
        </p>
      </div>

      {/* Floating Info Card */}
      <div className="absolute bottom-12 left-12 lg:left-20 z-10">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl flex items-center gap-4 max-w-xs shadow-2xl">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <div>
            <div className="text-white font-bold text-sm">Premium Spot #402</div>
            <div className="text-blue-200 text-xs mb-2">Available Now • 2 mins away</div>
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#00E0FF] h-full w-[85%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blur Circles */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl"></div>
    </div>
  );
};

export default AuthLeftPanel;
