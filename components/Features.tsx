
import React from 'react';
import { Feature } from '../types';

const FEATURES: Feature[] = [
  {
    title: "100% Personalized",
    description: "Lumina identifies your knowledge gaps and creates a unique curriculum just for you.",
    icon: "fa-user-graduate",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Instant Explanations",
    description: "Get immediate answers and step-by-step breakdowns for any problem, anytime.",
    icon: "fa-bolt",
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Exam Ready",
    description: "Our AI generates practice tests based on your specific exam board and history.",
    icon: "fa-file-signature",
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Voice Interaction",
    description: "Talk to your tutor naturally. Perfect for language learning and hands-free study.",
    icon: "fa-microphone",
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Progress Analytics",
    description: "Detailed insights into your mastery levels across every subject and topic.",
    icon: "fa-chart-pie",
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Multi-Language",
    description: "Study in over 50 languages. From Spanish to Mandarin, Lumina is your global tutor.",
    icon: "fa-globe",
    color: "bg-rose-50 text-rose-600"
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-4">Why Choose Lumina</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Built for the Modern Student</h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Traditional tutoring is expensive and inflexible. Lumina gives you high-quality instruction at a fraction of the cost.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group">
              <div className={`${feature.color} h-14 w-14 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform`}>
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
