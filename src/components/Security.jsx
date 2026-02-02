import React from 'react';
import Reveal from './Reveal';
import { Lock, CheckCircle, Landmark, Ban, ShieldCheck } from 'lucide-react';

const Security = ({ theme }) => {
  const isDark = theme === 'dark';
  const features = [
    {
      icon: <Lock className="w-8 h-8 text-orange-500" strokeWidth={1.5} />,
      bg: isDark ? "bg-orange-900/20" : "bg-orange-50",
      title: "End-to-End Encryption",
      description: "Your data is encrypted at rest and in transit",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-500" strokeWidth={1.5} />,
      bg: isDark ? "bg-emerald-900/20" : "bg-emerald-50",
      title: "Consent-Based Access",
      description: "You control what data is shared and for how long",
    },
    {
      icon: <Landmark className="w-8 h-8 text-blue-500" strokeWidth={1.5} />,
      bg: isDark ? "bg-blue-900/20" : "bg-blue-50",
      title: "RBI Approved",
      description: "Built on the official Account Aggregator framework",
    },
    {
      icon: <Ban className="w-8 h-8 text-red-500" strokeWidth={1.5} />,
      bg: isDark ? "bg-red-900/20" : "bg-red-50",
      title: "No Data Storage",
      description: "We never store your raw financial data",
    },
  ];

  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 ${isDark ? 'bg-[#0f1014]' : 'bg-[#eef2ff]'}`}>
      
      {/* Background Decor - Extremely subtle beams matching original design */}
      <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent ${isDark ? 'via-white/5' : 'via-blue-200/40'} to-transparent`}></div>
          <div className={`absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent ${isDark ? 'via-white/5' : 'via-blue-200/40'} to-transparent`}></div>
          
          {/* Soft diagonal faint glow */}
          <div className={`absolute -bottom-1/4 -left-20 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 ${isDark ? 'bg-purple-900/20' : 'bg-purple-200/40'}`}></div>
          <div className={`absolute -top-1/4 -right-20 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 ${isDark ? 'bg-blue-900/20' : 'bg-blue-200/40'}`}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <Reveal>
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 transition-colors ${
              isDark 
                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' 
                : 'bg-blue-50 text-blue-600 border border-blue-100'
            }`}>
              <ShieldCheck className="w-4 h-4" />
              Bank-Grade Security
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Your Data, <span className="bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Your Control</span>
            </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              Built on the RBI-approved Account Aggregator framework. All data access is 
              consent-based, time-bound, and fully encrypted.
            </p>
          </Reveal>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 100 + 300}>
              <div className={`h-full group p-8 md:p-12 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden ${
                isDark 
                  ? 'bg-[#18181b] border border-white/5 hover:border-white/10' 
                  : 'bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-blue-500/10'
              }`}>
                <div className="flex flex-col items-center text-center space-y-6">
                  {/* Icon Container with soft background */}
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${feature.bg}`}>
                    {feature.icon}
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Security;
