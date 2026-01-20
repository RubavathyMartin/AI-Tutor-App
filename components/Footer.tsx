
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-600 h-8 w-8 rounded-lg flex items-center justify-center">
                <i className="fas fa-brain text-white text-sm"></i>
              </div>
              <span className="ml-2 text-xl font-bold text-slate-900 tracking-tight">Lumina</span>
            </div>
            <p className="text-slate-500 mb-6 max-w-xs">
              Democratizing education through personalized, accessible, and high-quality AI-driven learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"><i className="fab fa-twitter"></i></a>
              <a href="#" className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="h-10 w-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Platform</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm">How it Works</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm">Pricing</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm">Subjects</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm">App</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Resources</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm">Blog</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm">Community</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm">Support</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm">Developers</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm">About</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm">Careers</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm">Privacy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 text-sm">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm">
            &copy; 2024 Lumina AI Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-xs text-slate-400 font-medium">Built with <i className="fas fa-heart text-rose-400 mx-1"></i> for learners globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
