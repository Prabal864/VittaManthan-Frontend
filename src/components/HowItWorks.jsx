import React, { useState, useEffect } from 'react';
import { Link2, Database, BrainCircuit, MessageSquareText, ShieldCheck, CheckCircle2, Building2, Loader2 } from 'lucide-react';
import Reveal from './Reveal';

const PhoneScreen = ({ isDark }) => {
  const [currentStage, setCurrentStage] = useState(0);

  // Cycle through animation stages
  useEffect(() => {
    const intervals = [2000, 2000, 2000, 3000]; // Durations for each stage
    
    const nextStage = () => {
      setCurrentStage((prev) => (prev + 1) % 4);
    };

    const timer = setTimeout(nextStage, intervals[currentStage]);
    return () => clearTimeout(timer);
  }, [currentStage]);

  return (
    <div className={`w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col relative ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
      
      {/* Fake Status Bar */}
      <div className="h-8 w-full flex justify-between items-center px-6 pt-2 z-20">
        <div className="text-[10px] font-semibold">9:41</div>
        <div className="flex gap-1.5">
          <div className="w-4 h-2.5 bg-current rounded-sm opacity-80"></div>
          <div className="w-2.5 h-2.5 bg-current rounded-full opacity-80"></div>
        </div>
      </div>

      {/* Screen Content Transition Group */}
      <div className="flex-1 relative p-6 flex flex-col items-center">
        
        {/* STAGE 0: CONNECT */}
        <div className={`absolute inset-0 p-6 flex flex-col items-center transition-all duration-500 ease-in-out transform ${currentStage === 0 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}>
             <div className="w-full text-left mb-6 mt-4">
                <h4 className="text-xl font-bold mb-1">Select Bank</h4>
                <p className="text-xs text-gray-500">Choose primary account</p>
             </div>
             
             {['HDFC Bank', 'ICICI Bank', 'SBI'].map((bank, i) => (
               <div key={bank} className="w-full bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-3 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i===0 ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`}>
                        <Building2 size={16} />
                    </div>
                    <span className="font-medium text-sm text-slate-700">{bank}</span>
                 </div>
                 <div className={`w-4 h-4 rounded-full border ${i === 1 ? 'bg-blue-500 border-blue-500' : 'border-slate-300'}`}></div>
               </div>
             ))}
             
             <div className="mt-auto w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-sm text-center shadow-lg shadow-blue-200">
                Connect Account
             </div>
        </div>

        {/* STAGE 1: VERIFYING */}
        <div className={`absolute inset-0 p-6 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform ${currentStage === 1 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}>
            <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center text-blue-600">
                    <ShieldCheck size={40} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white border-2 border-white shadow-lg">
                    <Loader2 size={16} className="animate-spin" />
                </div>
            </div>
            <h4 className="text-lg font-bold mb-2 text-slate-800">Verifying Consent</h4>
            <p className="text-center text-xs text-slate-500 max-w-[200px]">Securely exchanging tokens with Setu AA...</p>
        </div>

        {/* STAGE 2: SUCCESS */}
        <div className={`absolute inset-0 p-6 flex flex-col items-center justify-center transition-all duration-500 ease-in-out transform ${currentStage === 2 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}>
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 animate-bounce">
                <CheckCircle2 size={48} />
            </div>
            <h4 className="text-2xl font-bold mb-2 text-slate-800">Connected!</h4>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-green-700 text-xs font-medium border border-green-100">
                <ShieldCheck size={12} />
                <span>Bank Grade Security</span>
            </div>
        </div>

        {/* STAGE 3: DASHBOARD */}
        <div className={`absolute inset-0 p-6 flex flex-col transition-all duration-500 ease-in-out transform ${currentStage === 3 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95 pointer-events-none'}`}>
            <div className="w-full flex justify-between items-end mb-6 mt-4">
                <div>
                    <p className="text-xs text-slate-500 mb-1">Total Balance</p>
                    <h4 className="text-3xl font-bold text-slate-900">₹42,850</h4>
                </div>
                <div className="w-10 h-10 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
                </div>
            </div>

            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Recent Transactions</p>
            
            <div className="space-y-3">
                {[
                    { name: 'Uber Trip', amount: '-₹340', date: 'Today, 2:30 PM', icon: '🚗' },
                    { name: 'Salary Credit', amount: '+₹45,000', date: 'Yesterday', icon: '💰', highlight: true },
                    { name: 'Spotify', amount: '-₹119', date: 'Oct 24', icon: '🎵' },
                ].map((t, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-xl border ${t.highlight ? 'bg-green-50 border-green-200' : 'bg-white border-slate-100'} shadow-sm`}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-lg border border-slate-100 shadow-sm">
                                {t.icon}
                            </div>
                            <div>
                                <div className="text-sm font-semibold text-slate-800">{t.name}</div>
                                <div className="text-[10px] text-slate-500">{t.date}</div>
                            </div>
                        </div>
                        <div className={`text-sm font-bold ${t.amount.startsWith('+') ? 'text-green-600' : 'text-slate-800'}`}>
                            {t.amount}
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>

      {/* Navigation Bar */}
      <div className="h-1 bg-slate-900 mx-auto w-1/3 rounded-full mb-2 opacity-20"></div>
    </div>
  );
};

const HowItWorks = ({ theme }) => {
  const isDark = theme === 'dark';
  
  const steps = [
    {
      id: "01",
      title: "Connect",
      subtitle: "Link Bank Accounts",
      description: "Secure, consent-based linking via Setu AA.",
      icon: <Link2 size={20} />,
      colorClass: "bg-blue-50 text-blue-600",
      position: "lg:top-[15%] lg:left-[5%]",
      rotation: "lg:-rotate-6"
    },
    {
      id: "02",
      title: "Aggregate",
      subtitle: "Fetch Transactions",
      description: "Real-time data fetching from all sources.",
      icon: <Database size={20} />,
      colorClass: "bg-cyan-50 text-cyan-600",
      position: "lg:top-[20%] lg:right-[5%]",
      rotation: "lg:rotate-6"
    },
    {
      id: "03",
      title: "Analyze",
      subtitle: "AI Processing",
      description: "Spending patterns & income detection.",
      icon: <BrainCircuit size={20} />,
      colorClass: "bg-purple-50 text-purple-600",
      position: "lg:bottom-[20%] lg:left-[8%]",
      rotation: "lg:rotate-3"
    },
    {
      id: "04",
      title: "Chat",
      subtitle: "Ask Anything",
      description: "Natural language financial insights.",
      icon: <MessageSquareText size={20} />,
      colorClass: "bg-pink-50 text-pink-600",
      position: "lg:bottom-[15%] lg:right-[8%]",
      rotation: "lg:-rotate-3"
    },
  ];

  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? 'bg-[#050505]' : 'bg-[#F8FAFC]'}`}>
      
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]"></div>
          <div className={`absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay`}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <Reveal>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-500 text-sm font-bold tracking-wide uppercase mb-4">
               Process
            </span>
            <h2 className={`text-5xl md:text-7xl font-black tracking-tighter mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
               How it works
            </h2>
            <p className={`text-xl max-w-2xl mx-auto font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
               Experience the future of financial data in 4 simple steps.
            </p>
          </Reveal>
        </div>

        {/* Layout Container */}
        <div className="relative w-full flex flex-col items-center lg:h-[700px]">
            
            {/* Center Phone Mockup */}
            <Reveal delay={200} className="z-20">
            <div className="relative w-[300px] h-[600px] md:w-[320px] md:h-[650px] bg-gray-900 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25)] border-[8px] border-gray-800 transition-transform duration-500 hover:scale-[1.02]">
                {/* Outer Ring */}
                <div className="absolute -inset-[2px] rounded-[3.2rem] border border-gray-700 opacity-50 pointer-events-none"></div>
                
                {/* Screen Container */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 rounded-b-2xl z-30"></div>
                    
                    {/* Dynamic Screen Component */}
                    <PhoneScreen isDark={false} />
                </div>
            </div>
            </Reveal>

            {/* Floating Orbit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 lg:mt-0 lg:block w-full text-left">
                {steps.map((step, index) => (
                    <Reveal key={index} delay={400 + (index * 100)} className={`lg:absolute ${step.position} z-10`}>
                    <div 
                        className={`
                            relative p-6 rounded-3xl border backdrop-blur-sm transition-all duration-500 group cursor-default
                            ${isDark 
                                ? 'bg-[#121212]/80 border-white/10 hover:bg-[#1a1a2e]' 
                                : 'bg-white border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]'
                            }
                            ${step.rotation}
                            lg:w-[340px] lg:hover:scale-110 lg:hover:z-30 block
                        `}
                    >
                        {/* Connecting Line (Decorative, hidden on mobile) */}
                         <div className={`hidden lg:block absolute w-24 h-[1px] bg-gradient-to-r from-transparent to-slate-300 -z-10
                            ${index % 2 === 0 ? 'left-full top-1/2' : 'right-full top-1/2 rotate-180'}
                         `}/>

                        <div className="flex items-center justify-between mb-4">
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${step.colorClass}`}>
                                {step.icon}
                            </div>
                            <span className={`text-4xl font-black opacity-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                {step.id}
                            </span>
                        </div>
                        
                        <h3 className={`text-xl font-bold mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {step.title}
                        </h3>
                        <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                            {step.subtitle}
                        </p>
                        
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {step.description}
                        </p>
                    </div>
                    </Reveal>
                ))}
            </div>

        </div>
        
      </div>
    </section>
  );
};

export default HowItWorks;
