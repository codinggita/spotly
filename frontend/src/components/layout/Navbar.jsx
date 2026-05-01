import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ authMode = false, rightText, rightLink }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-[#0047FF]">
            Spotly
          </Link>
        </div>

        {/* Desktop Navigation */}
        {!authMode && (
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
        )}

        {/* Actions */}
        <div className="hidden md:flex items-center space-x-6">
          {authMode ? (
            path === '/login' ? (
              <Link
                to="/register"
                className="bg-[#0047FF] hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                Sign Up
              </Link>
            ) : (
              <Link
                to="/login"
                className="bg-[#0047FF] hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                Log In
              </Link>
            )
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-[#0047FF] hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-900 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 space-y-4 border-t border-gray-100 mt-4 animate-in slide-in-from-top-2 duration-200">
          {!authMode && (
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium text-base block px-2 ${
                  path === '/' ? 'text-[#0047FF]' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Find Parking
              </Link>
              <Link 
                to="/host" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium text-base block px-2 ${
                  path === '/host' ? 'text-[#0047FF]' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                List Your Spot
              </Link>
              <Link 
                to="/how-it-works" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium text-base block px-2 ${
                  path === '/how-it-works' ? 'text-[#0047FF]' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                How It Works
              </Link>
              <Link 
                to="/pricing" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`font-medium text-base block px-2 ${
                  path === '/pricing' ? 'text-[#0047FF]' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Pricing
              </Link>
            </nav>
          )}
          
          <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
            {authMode ? (
              path === '/login' ? (
                <Link
                  to="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center bg-[#0047FF] hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition-colors"
                >
                  Sign Up
                </Link>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center bg-[#0047FF] hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition-colors"
                >
                  Log In
                </Link>
              )
            ) : (
              <>
                <Link 
                  to="/login" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center bg-[#0047FF] hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition-colors shadow-md shadow-blue-500/20"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
