import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="bg-white sticky top-0 z-50 px-6 py-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-[#0047FF]">
            Spotly
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`pb-1 font-medium text-sm transition-colors ${
              path === '/' ? 'text-[#0047FF] border-b-2 border-[#0047FF]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Find Parking
          </Link>
          <Link 
            to="/host" 
            className={`pb-1 font-medium text-sm transition-colors ${
              path === '/host' ? 'text-[#0047FF] border-b-2 border-[#0047FF]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            List Your Spot
          </Link>
          <Link 
            to="/how-it-works" 
            className={`pb-1 font-medium text-sm transition-colors ${
              path === '/how-it-works' ? 'text-[#0047FF] border-b-2 border-[#0047FF]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            How It Works
          </Link>
          <Link 
            to="/pricing" 
            className={`pb-1 font-medium text-sm transition-colors ${
              path === '/pricing' ? 'text-[#0047FF] border-b-2 border-[#0047FF]' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Pricing
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
            Sign In
          </Link>
          <Link
            to="/register"
            className="bg-[#0047FF] hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button (placeholder) */}
        <button className="md:hidden text-gray-500 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
