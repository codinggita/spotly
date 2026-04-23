import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold text-[#0047FF] mb-4">Spotly</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Simplifying urban mobility through smarter parking solutions for everyone.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8 text-sm font-medium text-gray-500">
            <Link to="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link to="/help" className="hover:text-gray-900 transition-colors">Help Center</Link>
            <Link to="/careers" className="hover:text-gray-900 transition-colors">Careers</Link>
            <Link to="/press" className="hover:text-gray-900 transition-colors">Press</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Spotly Smart Parking. All rights reserved.</p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#0047FF] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#0047FF] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#0047FF] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#0047FF] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
