import React from 'react';
import Reveal from './Reveal';
import { BadgeDollarSign, BarChart3, ArrowRight } from 'lucide-react';

const CTA = ({ theme }) => {
  const isDark = theme === 'dark';
  return (
    <section className={`relative py-32 px-4 overflow-hidden ${isDark ? 'bg-[#050507]' : 'bg-[#fff]'}`}>
      {/* Background - Clean gradient like the design */}
      <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-300 pointer-events-none ${
        isDark 
          ? 'from-[#0a0a0f] via-[#050507] to-[#0a0a0f]' 
          : 'from-blue-50/50 via-white to-purple-50/50'
       }`}></div>

       {/* Subtle Beam Lines matching the image structure */}
       <div className={`absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30`}>
          <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
          <div className="absolute top-[80%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
          <div className="absolute left-[50%] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-indigo-200 to-transparent"></div>
       </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="relative py-24 px-6 md:px-16 text-center">
            
            {/* Corner Brackets exactly as in Design */}
            
            {/* Top Left */}
            <div className="absolute top-0 left-0">
               <div className="relative">
                  <div className={`w-16 h-16 rounded-tl-[2rem] border-l-2 border-t-2 ${isDark ? 'border-blue-500/30' : 'border-blue-200'}`}></div>
                  <div className="absolute top-6 left-6 animate-float">
                     <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border ${
                        isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-white border-blue-100 text-blue-300'
                     }`}>
                        <BadgeDollarSign size={24} strokeWidth={1.5} />
                     </div>
                  </div>
               </div>
            </div>

            {/* Top Right */}
            <div className="absolute top-0 right-0">
                <div className={`w-16 h-16 rounded-tr-[2rem] border-r-2 border-t-2 ${isDark ? 'border-blue-500/30' : 'border-blue-200'}`}></div>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0">
                <div className={`w-16 h-16 rounded-bl-[2rem] border-l-2 border-b-2 ${isDark ? 'border-blue-500/30' : 'border-cyan-200'}`}></div>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0">
               <div className="relative">
                  <div className={`w-16 h-16 rounded-br-[2rem] border-r-2 border-b-2 ${isDark ? 'border-blue-500/30' : 'border-blue-200'}`}></div>
                  <div className="absolute bottom-6 right-6 animate-float" style={{ animationDelay: '1.5s' }}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border ${
                          isDark ? 'bg-blue-500/10 border-blue-500/30 text-blue-400' : 'bg-white border-blue-100 text-blue-300'
                      }`}>
                          <BarChart3 size={24} strokeWidth={1.5} />
                      </div>
                  </div>
               </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 pt-8 pb-8">
                <h2 className={`text-5xl md:text-7xl font-bold mb-8 tracking-tight ${isDark ? 'text-white' : 'text-[#0B0F19]'}`}>
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Master Your Money?</span>
                </h2>
                
                <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                  Join thousands of users who are already making smarter financial decisions with VittaManthan. No credit card required.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                  <button className={`group px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 ${
                    isDark
                      ? 'bg-white text-black hover:bg-gray-100'
                      : 'bg-[#0f172a] text-white hover:bg-[#1e293b] shadow-xl shadow-slate-200'
                  }`}>
                      Get Started Free
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <button className={`px-8 py-4 rounded-full font-medium transition-all text-lg border ${
                    isDark
                      ? 'text-gray-300 hover:text-white border-white/10 hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-900 border-slate-200 bg-white hover:border-slate-300'
                  }`}>
                    Schedule a Demo
                  </button>
                </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTA;
