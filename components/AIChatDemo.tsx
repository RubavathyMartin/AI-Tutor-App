
import React, { useState, useRef, useEffect } from 'react';
import { getTutorResponse } from '../services/geminiService';
import { Message } from '../types';

const AIChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi there! I'm Lumina. I can help you with math, science, history, or anything else you're curious about. What should we learn today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await getTutorResponse(input);
    const assistantMessage: Message = { role: 'assistant', content: responseText };
    
    setMessages(prev => [...prev, assistantMessage]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-800">
        {/* Chat Header */}
        <div className="bg-slate-800/50 p-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="h-10 w-10 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                <i className="fas fa-robot text-white"></i>
              </div>
              <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Lumina AI Tutor</p>
              <p className="text-green-400 text-[10px] font-bold uppercase tracking-widest">Online Now</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700">
              <i className="fas fa-cog"></i>
            </button>
          </div>
        </div>

        {/* Chat Body */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-6 bg-slate-900 scrollbar-hide">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {msg.content}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-slate-800 text-slate-100 rounded-2xl rounded-tl-none p-4 border border-slate-700">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-slate-800/30 border-t border-slate-700">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything (e.g., Explain Quantum Physics like I'm 10)"
              className="w-full bg-slate-800 text-white border border-slate-700 rounded-2xl px-6 py-4 pr-14 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className={`absolute right-2 top-2 h-12 w-12 rounded-xl flex items-center justify-center transition-all ${
                input.trim() && !isLoading 
                ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30' 
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'
              }`}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
          <div className="mt-4 flex items-center justify-center space-x-6 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
            <span className="flex items-center"><i className="fas fa-bolt text-amber-400 mr-2"></i> Powered by Gemini 3</span>
            <span className="flex items-center"><i className="fas fa-shield-alt text-indigo-400 mr-2"></i> Safe Learning Environment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChatDemo;
