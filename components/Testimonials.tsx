
import React from 'react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "Computer Science Major",
    content: "Lumina explained Data Structures in 20 minutes better than my professor did in a whole semester. The adaptive learning is no joke.",
    avatar: "https://picsum.photos/seed/alex/100/100"
  },
  {
    name: "Dr. Elena Vance",
    role: "Education Specialist",
    content: "The pedagogical approach used by Lumina's AI is world-class. It doesn't just give answers; it fosters genuine understanding.",
    avatar: "https://picsum.photos/seed/elena/100/100"
  },
  {
    name: "Marcus Chen",
    role: "High School Senior",
    content: "I went from a C to an A in Calculus thanks to nightly sessions with Lumina. It's like having a patient genius friend.",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Loved by Students & Teachers</h2>
            <p className="text-xl text-slate-600">Don't just take our word for it. Join thousands of successful learners.</p>
          </div>
          <div className="flex space-x-2">
            <button className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-600 transition-all">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 mb-4">
                  {[1,2,3,4,5].map(i => <i key={i} className="fas fa-star text-xs"></i>)}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>
              </div>
              <div className="flex items-center">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full mr-4" />
                <div>
                  <h5 className="font-bold text-slate-900">{t.name}</h5>
                  <p className="text-slate-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
