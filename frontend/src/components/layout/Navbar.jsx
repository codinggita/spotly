import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
          <Link to="#" className="text-[#0047FF] border-b-2 border-[#0047FF] pb-1 font-medium text-sm">
            Find Parking
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900 pb-1 font-medium text-sm transition-colors">
            List Your Spot
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900 pb-1 font-medium text-sm transition-colors">
            How It Works
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-900 pb-1 font-medium text-sm transition-colors">
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
