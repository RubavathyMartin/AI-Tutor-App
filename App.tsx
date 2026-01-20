
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIChatDemo from './components/AIChatDemo';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="demo" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
                Experience the <span className="gradient-text">Future</span> of Learning
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Try asking Lumina a question right now. See how our AI adapts to your learning style.
              </p>
            </div>
            <AIChatDemo />
          </div>
        </section>

        <Features />
        
        <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
             <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500 rounded-full blur-[120px]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to accelerate your learning?</h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Join 50,000+ students who are mastering new subjects 3x faster with Lumina.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-indigo-900 hover:bg-indigo-50 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl">
                Get Started for Free
              </button>
              <button className="border-2 border-indigo-200 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-all">
                View Pricing
              </button>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;
