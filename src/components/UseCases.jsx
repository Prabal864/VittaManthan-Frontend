import React from 'react';
import Reveal from './Reveal';
import { 
  Bot, 
  PieChart, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Check, 
  MessageSquare,
  AlertTriangle,
  Wallet,
  ArrowRight,
  Fingerprint,
  Lock,
  FileText,
  Download,
  CreditCard,
  Building2,
  Landmark,
  FileCheck,
  Search,
  Target,
  Activity,
  PiggyBank,
  Crosshair,
  Zap,
  Plus,
  Layout,
  Smartphone,
  Terminal,
  Code2
} from 'lucide-react';
import { RadialBarChart, RadialBar, ResponsiveContainer, AreaChart, Area, BarChart, Bar, Tooltip, XAxis } from 'recharts';

/**
 * FEATURE 1: AI Financial Advisor
 * Layout: "The Spiral Stack" - Abstract 3D Layers (Kotlin Ecosystem Style)
 */
const SectionAI = ({ theme }) => {
  const isDark = theme === 'dark';
  
  return (
    <section className={`py-32 flex items-center justify-center ${
        isDark ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 w-full">
        
        {/* The Card Container - Rounded & Dark */}
        <div className="relative overflow-hidden bg-black rounded-[3.5rem] flex flex-col lg:flex-row items-center min-h-[700px] shadow-2xl">
          
            {/* Ambient background noise/texture inside the card */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
            <div className="absolute -left-[10%] top-[20%] w-[800px] h-[800px] bg-indigo-900/40 blur-[150px] rounded-full pointer-events-none"></div>

            {/* Left Content */}
            <Reveal className="relative z-10 w-full lg:w-1/2 p-12 lg:p-20 space-y-10">
                <div>
                  <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 uppercase mb-5">
                      The Vitta Ecosystem
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                      Ask a <br/>
                      Genius CFO.
                  </h2>
                  <p className="text-lg leading-relaxed text-slate-400 font-medium max-w-md mb-8">
                      A powerful set of intelligent tools crafted to modernize your wealth. From instant forecasts to plain-English advice, we help you develop financial freedom efficiently.
                  </p>
                  
                  {/* Detailed Description List */}
                  <div className="space-y-4">
                      {[
                          "Instant answers across all your bank accounts.",
                          "Predictive forecasts based on your spending habits.",
                          "Plain English advice, zero jargon."
                      ].map((text, i) => (
                          <div key={i} className="flex items-center gap-3 text-slate-300">
                              <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center">
                                  <Check size={12} className="text-white" strokeWidth={3} />
                              </div>
                              <span className="text-sm font-medium">{text}</span>
                          </div>
                      ))}
                  </div>
                </div>
            </Reveal>

            {/* Right Visual - The Spiral Stack */}
            <Reveal className="relative w-full lg:w-1/2 h-[600px] lg:h-full flex items-center justify-center perspective-[1000px] overflow-hidden">
                 
                 <div className="relative w-[500px] h-[500px] flex items-center justify-center scale-[0.85] lg:translate-x-12">
                     {/* The Layers - Fanning out like petals */}
                     
                     {/* Layer 1 (Back-most, Deep Indigo) */}
                     <div className="absolute w-[400px] h-[400px] bg-[#1e1b4b] rounded-[3.5rem] rotate-[-45deg] translate-x-[-100px] opacity-60"></div>

                     {/* Layer 2 (Deep Violet) */}
                     <div className="absolute w-[400px] h-[400px] bg-[#2e1065] rounded-[3.5rem] rotate-[-30deg] translate-x-[-60px] translate-y-[-20px] opacity-80 shadow-2xl"></div>

                     {/* Layer 3 (Purple) */}
                     <div className="absolute w-[400px] h-[400px] bg-[#4c1d95] rounded-[3.5rem] rotate-[-15deg] translate-x-[-20px] translate-y-[-10px] shadow-2xl"></div>

                     {/* Layer 4 (Fuchsia) */}
                     <div className="absolute w-[400px] h-[400px] bg-[#701a75] rounded-[3.5rem] rotate-[0deg] shadow-2xl z-10 border border-white/5"></div>

                     {/* Layer 5 (Magenta) */}
                     <div className="absolute w-[400px] h-[400px] bg-[#be185d] rounded-[3.5rem] rotate-[15deg] translate-x-[40px] translate-y-[20px] shadow-2xl z-20 border border-white/10"></div>

                     {/* Layer 6 (Bright Pink/Red) */}
                     <div className="absolute w-[400px] h-[400px] bg-[#db2777] rounded-[3.5rem] rotate-[30deg] translate-x-[80px] translate-y-[50px] shadow-2xl z-30 border border-white/10"></div>

                     {/* Layer 7 (Top, Vibrant Gradient) */}
                     <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-[#f43f5e] to-[#e11d48] rounded-[3.5rem] rotate-[45deg] translate-x-[120px] translate-y-[80px] shadow-2xl z-40 border-t border-white/20">
                          {/* Internal Grain Texture */}
                          <div className="absolute inset-0 opacity-40 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] rounded-[3.5rem]"></div>
                     </div>

                     {/* The "Core" - Orange Square Floating on Top */}
                     <div className="absolute z-50 transform translate-x-[100px] translate-y-[100px] rotate-[45deg]">
                         <div className="w-36 h-36 bg-gradient-to-br from-orange-500 to-red-600 rounded-[2rem] shadow-[0_20px_50px_rgba(239,68,68,0.5)] flex items-center justify-center border-t border-white/30 p-2">
                             <div className="w-full h-full border border-white/20 rounded-[1.5rem] flex items-center justify-center bg-black/10 backdrop-blur-sm">
                                  <Bot size={56} className="text-white drop-shadow-lg" />
                             </div>
                         </div>
                     </div>

                 </div>

            </Reveal>

        </div>
      </div>
    </section>
  );
};


/**
 * FEATURE 2: Smart Budgeting
 * Layout: "Target. Track. Save." - Three Pillar Dashboard
 */
const SectionBudget = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? 'bg-[#0B0B15]' : 'bg-[#F8FAFC]'}`}>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-20">
          <Reveal>
          <span className="inline-block py-1 px-3 rounded-full bg-rose-500/10 text-rose-500 text-sm font-bold tracking-wide uppercase mb-4">
            Complete Control
          </span>
          <h2 className={`text-4xl md:text-6xl font-black tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Target. Track. Save.
          </h2>
          <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            The holy trinity of financial health. Set your goals, watch your spending in real-time, and automate your savings without lifting a finger.
          </p>
          </Reveal>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Target (Goal Setting) */}
          <Reveal className="h-full">
            <div className={`h-full group relative rounded-[2.5rem] p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${isDark ? 'bg-[#12121e] border border-white/5' : 'bg-white border border-slate-100 shadow-xl shadow-slate-200/50'}`}>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Target size={120} className={isDark ? 'text-white' : 'text-slate-900'} />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-rose-500/30">
                      <Crosshair size={24} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Target</h3>
                  <p className={`text-sm mb-8 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Set smart monthly limits for every category.</p>
                  
                  {/* Visual: Goal Card */}
                  <div className={`mt-auto rounded-3xl p-5 ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
                      <div className="flex justify-between items-center mb-4">
                          <span className="text-sm font-bold text-slate-500">Monthly Cap</span>
                          <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>₹50,000</span>
                      </div>
                      <div className="relative h-32 flex items-center justify-center">
                           {/* Circular Progress Mockup */}
                           <svg className="w-28 h-28 transform -rotate-90">
                              <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="8" fill="transparent" className={isDark ? 'text-slate-700' : 'text-slate-200'} />
                              <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="300" strokeDashoffset="60" className="text-rose-500" />
                           </svg>
                           <div className="absolute text-center">
                               <span className={`block text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>80%</span>
                               <span className="text-[10px] text-slate-500 uppercase font-bold">Used</span>
                           </div>
                      </div>
                  </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Track (Real-time Feed) */}
          <Reveal delay={100} className="h-full">
            <div className={`h-full group relative rounded-[2.5rem] p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 delay-100 ${isDark ? 'bg-[#12121e] border border-white/5' : 'bg-white border border-slate-100 shadow-xl shadow-slate-200/50'}`}>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Activity size={120} className={isDark ? 'text-white' : 'text-slate-900'} />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-amber-500/30">
                      <Zap size={24} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Track</h3>
                  <p className={`text-sm mb-8 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Monitor transactions in real-time across all accounts.</p>
                  
                  {/* Visual: Transaction List */}
                  <div className={`mt-auto rounded-3xl p-2 space-y-2 ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
                      {[
                        { name: 'Starbucks', amount: '-₹350', time: '2m ago', icon: '☕' },
                        { name: 'Uber Trip', amount: '-₹420', time: '2h ago', icon: '🚗' },
                        { name: 'Spotify', amount: '-₹119', time: '1d ago', icon: '🎵' }
                      ].map((t, i) => (
                        <div key={i} className={`flex items-center justify-between p-3 rounded-2xl ${isDark ? 'bg-slate-700/50' : 'bg-white shadow-sm'}`}>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm">{t.icon}</div>
                                <div>
                                    <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.name}</div>
                                    <div className="text-[10px] text-slate-500">{t.time}</div>
                                </div>
                            </div>
                            <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.amount}</span>
                        </div>
                      ))}
                  </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Save (Autosave) */}
          <Reveal delay={200} className="h-full">
            <div className={`h-full group relative rounded-[2.5rem] p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 delay-200 ${isDark ? 'bg-[#12121e] border border-white/5' : 'bg-white border border-slate-100 shadow-xl shadow-slate-200/50'}`}>
              <div className="absolute top-0 right-0 p-8 opacity-10">
                  <PiggyBank size={120} className={isDark ? 'text-white' : 'text-slate-900'} />
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                      <TrendingUp size={24} />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Save</h3>
                  <p className={`text-sm mb-8 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Autosave spare change and hit your goals faster.</p>
                  
                  {/* Visual: Savings Card */}
                  <div className={`mt-auto rounded-3xl p-5 relative overflow-hidden ${isDark ? 'bg-slate-800' : 'bg-slate-50'}`}>
                       <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
                       <div className="text-center pt-2 pb-6">
                           <div className="text-xs font-bold text-slate-500 uppercase mb-1">Total Saved</div>
                           <div className={`text-3xl font-black ${isDark ? 'text-white' : 'text-emerald-600'}`}>₹1,24,500</div>
                       </div>
                       <div className="flex gap-2 mt-2">
                           <div className="h-10 flex-1 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-xs font-bold gap-1 shadow-lg shadow-emerald-500/20">
                               Auto <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                           </div>
                           <div className="h-10 w-10 bg-slate-200 text-slate-500 rounded-xl flex items-center justify-center">
                               <Plus size={16} />
                           </div>
                       </div>
                  </div>
              </div>
            </div>
          </Reveal>

      </div>

    </section>
  );
};


/**
 * FEATURE 3: Portfolio & Wealth
 * Layout: "The Block Stack" - Reference Image Layout
 * Concepts: NBFC, Real Estate, Stocks separated into Cards + Process Flow
 */
const SectionPortfolio = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className={`py-32 relative overflow-hidden ${isDark ? 'bg-[#0B0B15]' : 'bg-white'}`}>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
            
            {/* --- PART 1: The "Safe & Convenient" Block Layout (Top Half of Reference) --- */}
            <div className="rounded-[3rem] p-8 md:p-16 mb-32 relative overflow-hidden bg-[#111] text-white">
                {/* Dark Background Texture */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150"></div>
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/30 blur-[120px] rounded-full mix-blend-screen pointer-events-none"></div>

                {/* Section Header */}
                <div className="relative z-10 max-w-2xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Complete Asset Registry.
                        <br />
                        <span className="text-gray-400">Track every penny.</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        From traditional Fixed Deposits to modern P2P Lending and Real Estate. 
                        We bring <span className="text-white font-bold">NBFCs</span>, <span className="text-white font-bold">Gold</span>, and <span className="text-white font-bold">Stocks</span> under one roof.
                    </p>
                </div>

                {/* The 3 Block Cards */}
                <div className="relative z-10 grid lg:grid-cols-3 gap-6">
                    
                    {/* Card 1: Market Assets */}
                    <div className="bg-white rounded-[2rem] p-6 text-slate-900 flex flex-col h-[500px] transition-transform hover:-translate-y-2 duration-300">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-2">Stocks & Mutual Funds</h3>
                            <p className="text-slate-500 text-sm">Real-time tracking of NIFTY 50 and small-cap portfolios.</p>
                        </div>
                        {/* Phone Mockup 1 */}
                        <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden relative group">
                             <div className="absolute top-4 left-4 right-4 bg-white p-3 rounded-xl shadow-sm border border-slate-100/50 flex items-center justify-between z-10">
                                 <div className="flex items-center gap-2">
                                     <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs">R</div>
                                     <span className="font-bold text-sm">Reliance</span>
                                 </div>
                                 <span className="text-green-500 font-bold text-sm">+2.4%</span>
                             </div>
                             <div className="absolute top-20 left-4 right-4 bottom-0 bg-white rounded-t-xl shadow-[0_-5px_20px_rgba(0,0,0,0.05)] p-4">
                                 <div className="h-20 w-full bg-gradient-to-t from-blue-50 to-transparent rounded-lg mb-3 flex items-end px-1 gap-1">
                                      {[40, 60, 45, 70, 65, 80, 75].map((h, i) => (
                                          <div key={i} className="flex-1 bg-blue-500 rounded-t-sm" style={{height: `${h}%`}}></div>
                                      ))}
                                 </div>
                                 <div className="flex justify-between text-xs text-slate-400 font-medium">
                                     <span>1D</span><span>1W</span><span>1M</span><span className="text-blue-600">1Y</span><span>All</span>
                                 </div>
                             </div>
                        </div>
                    </div>

                    {/* Card 2: NBFC & Fixed Income */}
                    <div className="bg-white rounded-[2rem] p-6 text-slate-900 flex flex-col h-[500px] transition-transform hover:-translate-y-2 duration-300 delay-100">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-2">NBFC & P2P Lending</h3>
                            <p className="text-slate-500 text-sm">Monitor corporate FDs and high-yield operational debt.</p>
                        </div>
                        {/* Phone Mockup 2 */}
                        <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden relative p-4 flex flex-col gap-3">
                             {/* List Items */}
                             {[
                                 { name: 'Bajaj Finance FD', rate: '8.10%', color: 'bg-yellow-500' },
                                 { name: 'Shriram Transport', rate: '8.50%', color: 'bg-orange-500' },
                                 { name: 'P2P LiquiLoans', rate: '10.2%', color: 'bg-indigo-500' },
                             ].map((item, i) => (
                                 <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex items-center justify-between">
                                     <div className="flex items-center gap-3">
                                         <div className={`w-8 h-8 rounded-lg ${item.color} text-white flex items-center justify-center font-bold text-xs`}>{item.name[0]}</div>
                                         <span className="font-bold text-sm text-slate-700">{item.name}</span>
                                     </div>
                                     <div className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-bold">{item.rate}</div>
                                 </div>
                             ))}
                             <div className="mt-auto bg-slate-900 text-white text-center py-3 rounded-xl text-sm font-bold">Invest Now</div>
                        </div>
                    </div>

                    {/* Card 3: Real Estate & Gold */}
                    <div className="bg-white rounded-[2rem] p-6 text-slate-900 flex flex-col h-[500px] transition-transform hover:-translate-y-2 duration-300 delay-200">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-2">Real Estate & Gold</h3>
                            <p className="text-slate-500 text-sm">Track property valuation trends and sovereign gold bonds.</p>
                        </div>
                        {/* Phone Mockup 3 (Visual Block) */}
                        <div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden relative">
                             {/* Map / Property Visual */}
                             <div className="absolute inset-x-0 top-0 h-32 bg-emerald-500/10 border-b border-emerald-500/20">
                                 <div className="w-full h-full opacity-30" style={{backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-lg text-xs font-bold text-emerald-600 flex items-center gap-1">
                                     <Building2 size={12}/> ₹1.2 Cr
                                 </div>
                             </div>
                             {/* Gold Bars Visual */}
                             <div className="absolute bottom-0 inset-x-0 p-4">
                                 <div className="bg-gradient-to-br from-yellow-100 to-amber-50 rounded-xl p-4 border border-amber-100 flex items-center gap-3">
                                     <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white shadow-lg shadow-yellow-500/40">G</div>
                                     <div>
                                         <div className="text-xs text-amber-800 font-bold uppercase">Sovereign Gold</div>
                                         <div className="text-lg font-black text-amber-900">₹6,240/g</div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>

                </div>
            </div>


            {/* --- PART 2: Steps Layout (Bottom Half of Reference) --- */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                
                {/* Left: Floating Phone with Orbit */}
                <div className="relative h-[600px] flex items-center justify-center">
                    {/* Orbit Circles */}
                    <div className="absolute w-[400px] h-[400px] border border-slate-200 rounded-full animate-spin-slow opacity-50" style={{animationDuration: '20s'}}></div>
                    <div className="absolute w-[550px] h-[550px] border border-dashed border-slate-200 rounded-full animate-reverse-spin opacity-30"></div>
                    
                    {/* The Phone */}
                    <div className="relative w-[300px] h-[580px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden z-10 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                        {/* Screen Content */}
                        <div className="h-full bg-white w-full flex flex-col">
                            <div className="h-24 bg-slate-50 p-6 flex items-end">
                                <h4 className="font-bold text-xl text-slate-800">Your Net Worth</h4>
                            </div>
                            <div className="flex-1 p-6 space-y-4">
                                <div className="h-32 rounded-2xl bg-slate-900 w-full flex items-center justify-center flex-col text-white">
                                    <span className="text-xs opacity-60">Total Assets</span>
                                    <span className="text-3xl font-bold">₹42.5L</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="h-24 rounded-2xl bg-green-50 border border-green-100"></div>
                                    <div className="h-24 rounded-2xl bg-blue-50 border border-blue-100"></div>
                                    <div className="h-24 rounded-2xl bg-amber-50 border border-amber-100"></div>
                                    <div className="h-24 rounded-2xl bg-purple-50 border border-purple-100"></div>
                                </div>
                            </div>
                        </div>
                        {/* Dynamic Island */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
                    </div>

                    {/* Checkmark Badge */}
                    <div className="absolute top-1/2 -right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow z-20">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                            <Check size={16} strokeWidth={4} />
                        </div>
                        <span className={`font-bold ${isDark ? 'text-black' : 'text-slate-900'}`}>Synced</span>
                    </div>
                </div>

                {/* Right: Step List */}
                <div className={`space-y-12 pl-0 lg:pl-10 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">4 Steps To<br/>Wealth Freedom</h2>
                        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Connect disparate assets into one cohesive financial picture.
                        </p>
                    </div>

                    <div className="space-y-10">
                        {[
                            { title: 'Connect Accounts', desc: 'Link Bank, Demat, and digilocker instantly.', icon: <Smartphone size={20}/> },
                            { title: 'Fetch & Analyze', desc: 'Our engine categorizes disparate assets.', icon: <Search size={20}/> },
                            { title: 'Get Insights', desc: 'AI identifies underperforming real estate or funds.', icon: <Zap size={20}/> },
                            { title: 'Optimize Wealth', desc: 'Rebalance portfolio with one-click actions.', icon: <TrendingUp size={20}/> },
                        ].map((step, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="relative">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10 
                                        ${i === 0 ? 'bg-slate-900' : 'bg-slate-200 text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-colors'}`}>
                                        {/* {i + 1} */}
                                        {step.icon}
                                    </div>
                                    {/* Connector Line */}
                                    {i !== 3 && <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-slate-200"></div>}
                                </div>
                                <div className="pt-2">
                                    <h4 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>{step.title}</h4>
                                    <p className={`max-w-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    </section>
  );
};


/**
 * FEATURE 4: Lender Portal
 * Layout: "The Desktop" - Massive Mac-style screen containing all features as widgets.
 */
const SectionLender = ({ theme }) => {
    const isDark = theme === 'dark';
    
    return (
        <section className={`py-32 relative ${isDark ? 'bg-[#0f0a1e]' : 'bg-[#F8FAFC]'}`}>
             
             {/* Header */}
             <div className="text-center max-w-4xl mx-auto px-6 mb-12 relative z-10">
                 <span className="text-violet-500 font-bold uppercase tracking-widest text-xs mb-3 block">For Lenders & Fintechs</span>
                 <h2 className={`text-5xl md:text-7xl font-black mb-6 tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Automated Underwriting. <br/>
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-500 via-violet-500 to-blue-500">Instant Decisions.</span>
                 </h2>
             </div>

             {/* The BIG Screen Visual - Half Mac Screen Size */}
             <div className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 relative z-10">
                 {/* Monitor Frame */}
                 <div className="relative rounded-t-[2.5rem] rounded-b-[1.5rem] border-x-[16px] border-t-[16px] border-b-[40px] border-[#1a1c23] bg-[#1a1c23] shadow-2xl overflow-hidden aspect-16/10 mx-auto">
                     
                     {/* Top Bar (Bezel UI) */}
                     <div className="absolute top-0 left-0 w-full h-10 bg-[#1a1c23] z-20 flex items-center justify-between px-8 text-neutral-500">
                        <div className="flex gap-6 font-medium text-xs">
                             <span className="text-white hover:text-blue-400 cursor-pointer">File</span>
                             <span className="hover:text-blue-400 cursor-pointer">Edit</span>
                             <span className="hover:text-blue-400 cursor-pointer">View</span>
                        </div>
                        <div className="hidden md:flex w-32 h-6 bg-black rounded-b-xl absolute left-1/2 -translate-x-1/2 top-0 items-end justify-center pb-1">
                             <div className="w-12 h-1 rounded-full bg-gray-800/50"></div>
                        </div>
                        <div className="text-xs font-mono">100% 🔋</div>
                     </div>

                     {/* Screen Wallpaper (Red -> Blue Vibrant Gradient) */}
                     <div className="absolute inset-0 bg-linear-to-br from-rose-600 via-indigo-600 to-cyan-500 w-full h-full">
                          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-120 contrast-120 mix-blend-overlay"></div>
                     </div>

                     {/* Main Content Container (Desktop Environment) */}
                     <div className="relative z-10 w-full h-full p-8 md:p-12 pt-16 flex flex-col gap-8">
                          
                          {/* Upper Deck: The App/Terminal Windows */}
                          <div className="flex flex-col lg:flex-row gap-8 flex-1 min-h-0">
                               
                               {/* Window 1: Contextual Info (Pitch for Lenders) */}
                               <div className="flex-1 flex flex-col justify-center space-y-8 p-4">
                                   <div>
                                       <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wider uppercase mb-5 border border-blue-500/20">
                                          <TrendingUp size={12} /> Reduce Default Rates
                                       </div>
                                       <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                           Credit Risk Intelligence <br/>
                                           <span className="text-blue-200 opacity-80">at Scale.</span>
                                       </h3>
                                       <p className="text-slate-200 text-lg leading-relaxed max-w-lg font-medium">
                                           Stop relying on outdated bureau data. Get real-time cash flow analysis, income verification, and spending behavior to approve more borrowers with less risk.
                                       </p>
                                   </div>
                                   
                                   <div className="flex flex-wrap gap-3">
                                       <div className="px-5 py-3 bg-white/10 rounded-xl border border-white/20 text-white text-sm font-bold flex items-center gap-3 shadow-lg backdrop-blur-md">
                                           <CheckCircle2 size={18} className="text-green-400" /> Income Verification
                                       </div>
                                       <div className="px-5 py-3 bg-white/10 rounded-xl border border-white/20 text-white text-sm font-bold flex items-center gap-3 shadow-lg backdrop-blur-md">
                                           <Activity size={18} className="text-amber-400" /> Cash-Flow Analysis
                                       </div>
                                   </div>
                               </div>

                               {/* Window 2: Interactive Loan Processing Dashboard */}
                               <div className="w-full lg:w-[480px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden border border-white/40">
                                   
                                   {/* Dashboard Header */}
                                   <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
                                       <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold">
                                                JD
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900 leading-tight">John Doe</h4>
                                                <p className="text-xs text-slate-500">Loan ID: #LN-88392</p>
                                            </div>
                                       </div>
                                       <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full animate-pulse">
                                           Processing Live...
                                       </div>
                                   </div>

                                   {/* Live Processing Steps */}
                                   <div className="p-6 bg-slate-50/80 flex-1 flex flex-col gap-5 relative">
                                        
                                        {/* Step 1: Bank Analysis */}
                                        <div className="flex items-center gap-4 group">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                                <Target size={14} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                                                    <span>Analyzing Bank Stmt</span>
                                                    <span className="text-blue-600">Complete</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                                    <div className="h-full bg-blue-500 w-full"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Step 2: Risk Scoring (Interactive) */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                                                <Zap size={14} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                                                    <span>Calculating Risk</span>
                                                    <span className="text-purple-600">Complete</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                                    <div className="h-full bg-purple-500 w-full"></div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* NEW: Live Insights Grid */}
                                        <div className="grid grid-cols-2 gap-3 my-1">
                                            <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">DTI Ratio</div>
                                                <div className="text-lg font-bold text-slate-700">28.4% <span className="text-xs font-normal text-green-500 bg-green-50 px-1 rounded ml-1">Healthy</span></div>
                                            </div>
                                            <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Avg. Balance</div>
                                                <div className="text-lg font-bold text-slate-700">₹42.5k <span className="text-xs font-normal text-green-500 bg-green-50 px-1 rounded ml-1">↑ 12%</span></div>
                                            </div>
                                        </div>

                                        {/* Result Card (Floating Overlay) */}
                                        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl relative overflow-hidden">
                                             <div className="absolute right-0 top-0 p-4 opacity-10">
                                                 <CheckCircle2 size={80} className="text-emerald-600" />
                                             </div>
                                             <div className="relative z-10 flex justify-between items-end">
                                                 <div>
                                                     <div className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-1">Recommendation</div>
                                                     <div className="text-2xl font-black text-slate-900">Approve Loan</div>
                                                 </div>
                                                 <div className="text-right">
                                                     <div className="text-xs font-bold text-slate-500 mb-1">Confidence</div>
                                                     <div className="text-xl font-bold text-emerald-600">98.4%</div>
                                                 </div>
                                             </div>
                                        </div>
                                        
                                        {/* NEW: System Logs - Fills the bottom with techy details */}
                                        <div className="mt-auto pt-3 border-t border-slate-200/60">
                                            <div className="font-mono text-[10px] text-slate-400 space-y-1.5">
                                                <div className="flex gap-2"><span className="text-slate-300">10:42:01</span> <span>Fetching bureau report (CIBIL)...</span></div>
                                                <div className="flex gap-2"><span className="text-slate-300">10:42:02</span> <span>Analyzing 6 months bank stmt...</span></div>
                                                <div className="flex gap-2"><span className="text-slate-300">10:42:03</span> <span className="text-emerald-600 font-bold">✔ Fraud checks passed</span></div>
                                            </div>
                                        </div>

                                   </div>
                               </div>

                          </div>

                          {/* Bottom Dock: Lender Benefits */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                               {[
                                 { 
                                     icon: <Building2 size={20} />, 
                                     title: "Bank Statement Analyzer", 
                                     desc: "Convert PDFs to actionable JSON data instantly.",
                                     color: "bg-indigo-500"
                                 },
                                 { 
                                     icon: <ShieldCheck size={20} />, 
                                     title: "Fraud Detection Engine", 
                                     desc: "Identify circular lending and fake distincts.",
                                     color: "bg-rose-500"
                                 },
                                 { 
                                     icon: <CheckCircle2 size={20} />, 
                                     title: "Automated Origination", 
                                     desc: "Zero-touch underwriting workflows.",
                                     color: "bg-emerald-500"
                                 }
                               ].map((feat, i) => (
                                   <div key={i} className="group p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all cursor-default flex items-center gap-4">
                                        <div className={`p-3 rounded-lg ${feat.color} text-white shadow-lg`}>
                                            {feat.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-sm leading-tight mb-1">{feat.title}</h4>
                                            <p className="text-blue-100/80 text-xs leading-tight">{feat.desc}</p>
                                        </div>
                                   </div>
                               ))}
                          </div>

                     </div>
                 </div>
                 
                 {/* Monitor Stand */}
                 <div className="mx-auto w-[200px] md:w-[300px] h-8 md:h-12 bg-[#2d303a] rounded-b-3xl shadow-2xl relative z-0">
                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/50 to-transparent rounded-b-3xl"></div>
                 </div>
                 {/* Desk Reflection */}
                 <div className="mx-auto w-[80%] h-4 bg-black/20 blur-xl rounded-[100%]"></div>
             </div>
        </section>
    );
};


/**
 * FEATURE 5: Compliance/Docs
 * Layout: "Split Feature Grid" - Richer content, checklist, and dynamic visuals.
 */
const SectionDocs = ({ theme }) => {
    const isDark = theme === 'dark';

    const features = [
        { title: "80C Deductions", desc: "LIC, PPF, ELSS auto-detected" },
        { title: "Medical (80D)", desc: "Health insurance premiums" },
        { title: "Capital Gains", desc: "Realized profit/loss statements" },
        { title: "HRA Exemption", desc: "Rent payment tracking" }
    ];

    return (
        <section className={`py-32 relative overflow-hidden flex items-center ${isDark ? 'bg-linear-to-b from-[#1c1917] to-black' : 'bg-[#F8FAFC]'}`}>
            <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                
                {/* Left Content */}
                <div className="order-2 lg:order-1">
                     <div className="inline-block p-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500 mb-6">
                        <FileText size={20} />
                    </div>
                    <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Tax Season? <br/>
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-600">Done in 5 mins.</span>
                    </h2>
                    <p className={`text-lg mb-8 leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                        Stop scrambling for receipts. We automatically identify tax-saving investments and expenses from your transaction history to generate ready-to-file reports.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 mb-10">
                        {features.map((f, i) => (
                            <div key={i} className="flex gap-3">
                                <div className={`mt-1 shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${isDark ? 'bg-orange-900/30 text-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                                    <CheckCircle2 size={16} />
                                </div>
                                <div>
                                    <h4 className={`font-bold text-base ${isDark ? 'text-gray-200' : 'text-slate-900'}`}>{f.title}</h4>
                                    <p className={`text-sm mt-1 ${isDark ? 'text-gray-500' : 'text-slate-500'}`}>{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="group flex items-center gap-3 px-8 py-4 bg-linear-to-r from-orange-600 to-red-600 text-white rounded-full font-bold shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 transition-all duration-300">
                         <Download size={20} /> 
                         <span>Download Sample Report</span>
                         <ArrowRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    </button>
                </div>

                {/* Right Visual */}
                <div className="relative h-[500px] flex items-center justify-center order-1 lg:order-2 perspective-1000">
                    {/* Background blob */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-40 blur-[90px] rounded-full pointer-events-none ${isDark ? 'bg-orange-900/20' : 'bg-orange-200/50'}`}></div>

                     {/* Fan of Cards */}
                     <div className="relative w-full max-w-sm h-full flex items-center justify-center">
                        
                        {/* Floating Notification - Left */}
                         <div className={`absolute -left-4 sm:-left-12 top-20 z-30 p-4 pr-8 rounded-2xl shadow-2xl backdrop-blur-md border animate-float ${isDark ? 'bg-gray-800/90 border-gray-700' : 'bg-white/90 border-slate-200'}`} style={{ animationDuration: '4s' }}>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-green-100 text-green-600 rounded-xl">
                                    <TrendingUp size={24} />
                                </div>
                                <div>
                                    <p className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>Tax Saved</p>
                                    <p className={`text-xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>₹42,500</p>
                                </div>
                            </div>
                         </div>

                        {[0, 1, 2].map((i) => (
                             <div 
                                key={i}
                                className={`absolute w-72 h-96 rounded-3xl border shadow-2xl flex flex-col p-8 transition-all duration-700 ease-out origin-bottom-left
                                    ${isDark ? 'bg-[#1a1a1a] border-gray-700' : 'bg-white border-orange-100'}
                                    hover:scale-105 hover:rotate-3
                                `}
                                style={{
                                    transform: `rotate(${(i) * 6}deg) translate(${i * 30}px, ${i * -20}px)`,
                                    zIndex: 10 - i,
                                    // left: '20%'
                                }}
                             >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
                                        <FileText size={24} />
                                    </div>
                                    <div className="px-2 py-1 rounded bg-slate-100 text-slate-500 text-[10px] font-mono font-bold tracking-wider">PDF</div>
                                </div>
                                
                                <div className="space-y-4 mb-8">
                                    <div className={`h-3 w-32 rounded-full ${isDark ? 'bg-gray-800' : 'bg-slate-100'}`}></div>
                                    <div className={`h-3 w-48 rounded-full ${isDark ? 'bg-gray-800' : 'bg-slate-100'}`}></div>
                                    <div className={`h-3 w-40 rounded-full ${isDark ? 'bg-gray-800' : 'bg-slate-100'}`}></div>
                                </div>
                                
                                <div className={`mt-auto p-4 rounded-xl border border-dashed flex justify-between items-center ${isDark ? 'border-gray-700 bg-gray-800/50' : 'border-orange-200 bg-orange-50/50'}`}>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-400 uppercase font-bold">Total Deduction</span>
                                        <span className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>₹1,50,000</span>
                                    </div>
                                    <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center text-white">
                                        <CheckCircle2 size={12} />
                                    </div>
                                </div>
                             </div>
                         ))}
                     </div>
                </div>

            </div>
        </section>
    );
};


/**
 * FEATURE 6: Security
 * Layout: "Bento Grid Control Center" - Asymmetric, high-tech, dashboard feel.
 */
const SectionSecurity = ({ theme }) => {
    const isDark = theme === 'dark';
    
    return (
        <section className={`py-32 relative overflow-hidden border-t ${isDark ? 'border-gray-800 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-gray-900 via-[#020617] to-black' : 'border-slate-200 bg-[#F8FAFC]'}`}>
            
             {/* Tech Background */}
             <div className="absolute inset-0 opacity-[0.03]" 
                  style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
             </div>
             
             <div className="max-w-6xl mx-auto px-4 relative z-10">
                 
                 <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 font-bold tracking-wider text-xs uppercase mb-6">
                        <Lock size={14} /> Maximum Security
                    </div>
                    <h2 className={`text-5xl md:text-7xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Fort Knox. <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">Reimagined.</span>
                    </h2>
                    <p className={`max-w-2xl mx-auto text-xl ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                        Your financial data is more valuable than gold. We protect it with the same technology used by the world's largest banks.
                    </p>
                 </div>
                 
                 {/* Main Bento Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                     
                     {/* Card 1: Main Encryption (Span 8) */}
                     <div className={`md:col-span-8 p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
                        ${isDark ? 'bg-[#151b2b] border border-gray-800' : 'bg-white border border-slate-200 shadow-xl shadow-slate-200/50'}
                     `}>
                        <div className="relative z-10">
                             <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-6">
                                <ShieldCheck size={32} />
                             </div>
                             <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>Secure Data Handshake</h3>
                             <p className={`text-lg max-w-md ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                                 We use industry-standard secure tokens for session management. Your consent data is handled safely via SETU Account Aggregator.
                             </p>
                        </div>

                        {/* Decorative animated lock visual */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Lock size={300} strokeWidth={0.5} />
                        </div>
                        <div className="absolute bottom-8 right-8 flex gap-2">
                             {[1,2,3].map(i => (
                                 <div key={i} className={`w-2 h-2 rounded-full bg-emerald-500 animate-pulse`} style={{animationDelay: `${i*200}ms`}}></div>
                             ))}
                        </div>
                     </div>

                     {/* Card 2: Compliance Badge (Span 4) */}
                     <div className={`md:col-span-4 p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
                        ${isDark ? 'bg-[#151b2b] border border-gray-800' : 'bg-linear-to-br from-emerald-500 to-teal-600 text-white shadow-xl shadow-emerald-500/20'}
                     `}>
                        <div className="relative z-10">
                            <h3 className="text-6xl font-black mb-2 tracking-tighter opacity-90">100%</h3>
                            <p className="font-medium text-lg opacity-90">RBI Compliant</p>
                            <div className="mt-6 inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-sm font-bold border border-white/30">
                                Account Aggregator
                            </div>
                        </div>
                     </div>

                     {/* Card 3: Privacy/Selling (Span 4) */}
                     <div className={`md:col-span-4 p-8 rounded-[2.5rem] relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
                        ${isDark ? 'bg-[#151b2b] border border-gray-800' : 'bg-white border border-slate-200 shadow-xl shadow-slate-200/50'}
                     `}>
                        <div className="flex justify-between items-start mb-12">
                            <div className={`p-3 rounded-xl ${isDark ? 'bg-red-500/10 text-red-400' : 'bg-red-50 text-red-500'}`}>
                                <AlertTriangle size={24} />
                            </div>
                            <div className={`text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-slate-100 text-slate-500'}`}>Promise</div>
                        </div>
                        <h3 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>No Data Selling.</h3>
                         <p className={`${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                             Your data belongs to you. We don't sell it to advertisers. Ever.
                         </p>
                     </div>

                     {/* Card 4: Biometrics (Span 8) */}
                     <div className={`md:col-span-8 p-8 md:p-12 rounded-[2.5rem] flex items-center justify-between relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1
                        ${isDark ? 'bg-[#151b2b] border border-gray-800' : 'bg-[#0f172a] text-white shadow-xl shadow-slate-900/20'}
                     `}>
                        <div className="relative z-10 max-w-md">
                             <div className="flex items-center gap-3 mb-4">
                                <Fingerprint size={28} className="text-emerald-400" />
                                <span className="text-emerald-400 font-bold uppercase tracking-wider text-sm">Secure Access</span>
                             </div>
                             <h3 className="text-3xl font-bold mb-4 text-white">Your Privacy First.</h3>
                             <p className="text-slate-400 text-lg">
                                 Seamless login and robust session management ensure your financial data is accessible only to you.
                             </p>
                        </div>

                        {/* Visual Fingerprint */}
                        <div className="hidden md:block opacity-30 group-hover:opacity-50 transition-opacity">
                            <Fingerprint size={160} className="text-emerald-500" />
                        </div>
                     </div>

                 </div>

             </div>
        </section>
    );
};


const UseCases = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="flex flex-col w-full overflow-hidden">
       {/* New Heading Section */}
       <div className={`py-20 lg:py-32 text-center relative ${
           isDark ? 'bg-linear-to-b from-slate-900 via-[#0f172a] to-[#0f172a]' : 'bg-[#F8FAFC]'
       }`}>
           <Reveal className="max-w-4xl mx-auto px-4 relative z-10">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-600 text-xs font-bold tracking-wider uppercase mb-6 border border-pink-500/20">
                  <Layout size={14} /> Use Cases
               </div>
               <h1 className={`text-5xl md:text-7xl font-black tracking-tight mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                   Built for <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500">Everyone.</span> 
                   <br/> Optimized for <span className="underline decoration-purple-500/40 decoration-4 underline-offset-4">Results.</span>
               </h1>
               <p className={`text-xl md:text-2xl max-w-2xl mx-auto font-light ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                   Whether you are tracking daily expenses or managing complex portfolios, our platform adapts to your unique financial journey.
               </p>
           </Reveal>
           
           {/* Decorational Background Elements */}
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-96 opacity-30 blur-[100px] rounded-full pointer-events-none ${
              isDark ? 'bg-purple-900/40' : 'bg-purple-200/50'
           }`}></div>
       </div>

       <SectionAI theme={theme} />
       <SectionBudget theme={theme} />
       <SectionPortfolio theme={theme} />
       <SectionLender theme={theme} />
       <SectionDocs theme={theme} />
       <SectionSecurity theme={theme} />
    </div>
  );
};

export default UseCases;
