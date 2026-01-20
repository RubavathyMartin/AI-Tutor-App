
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-indigo-600 h-10 w-10 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <i className="fas fa-brain text-white text-xl"></i>
            </div>
            <span className={`ml-3 text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Lumina
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Features</a>
            <a href="#demo" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Try Demo</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Pricing</a>
            <div className="h-6 w-px bg-slate-200"></div>
            <button className="text-slate-600 hover:text-indigo-600 font-semibold px-4 transition-colors">
              Login
            </button>
            <button className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-2.5 rounded-full font-bold shadow-md shadow-indigo-100 transition-all transform hover:scale-105 active:scale-95">
              Sign Up
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 p-2">
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b absolute top-full left-0 w-full p-4 space-y-4 shadow-xl">
          <a href="#" className="block text-slate-600 font-medium">Features</a>
          <a href="#demo" className="block text-slate-600 font-medium">Try Demo</a>
          <a href="#" className="block text-slate-600 font-medium">Pricing</a>
          <div className="flex flex-col space-y-3 pt-4 border-t">
            <button className="w-full text-center py-2 text-slate-600 font-semibold">Login</button>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
