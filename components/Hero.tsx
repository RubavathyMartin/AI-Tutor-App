
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-200 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-200 rounded-full blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              <span className="text-indigo-700 text-sm font-bold uppercase tracking-wider">New: Adaptive Audio Lessons</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              The AI Tutor that <span className="gradient-text">Actually</span> Understands You.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Personalized 1-on-1 tutoring available 24/7. From calculus to creative writing, Lumina tailors every lesson to your unique learning pace and goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-1">
                Start Learning Now
              </button>
              <button className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">
                <i className="fas fa-play-circle mr-2 text-indigo-600"></i>
                Watch Demo
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+10}/100/100`} className="h-10 w-10 rounded-full border-2 border-white" alt="User" />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                <span className="text-indigo-600 font-bold">4.9/5</span> from 2,000+ student reviews
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl transform rotate-3"></div>
            <div className="relative glass-card p-4 rounded-3xl shadow-2xl border border-white/50 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Student studying" 
                className="rounded-2xl w-full h-[450px] object-cover shadow-inner"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 text-green-600 p-1.5 rounded-lg text-xs mr-2">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase">Weekly Progress</span>
                </div>
                <div className="text-2xl font-bold text-slate-800">+42%</div>
                <div className="text-xs text-slate-500">Learning speed increase</div>
              </div>
              
              <div className="absolute top-12 -left-10 bg-indigo-600 p-4 rounded-2xl shadow-xl transform -rotate-6 hidden sm:block">
                <i className="fas fa-quote-left text-white/50 text-xl absolute top-2 left-2"></i>
                <p className="text-white text-sm font-medium pt-2 italic">"Finally, a tutor that gets me!"</p>
                <p className="text-indigo-200 text-xs mt-2">— Sarah K., Math Student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
