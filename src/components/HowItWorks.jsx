import GlowCurvedLine from './GlowCurvedLine';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect Your Accounts",
      description: "Securely link your bank accounts through Setu Account Aggregator. Your consent controls everything.",
    },
    {
      number: "02",
      title: "Data Aggregation",
      description: "We fetch and organize your transaction data from all connected accounts in one place.",
    },
    {
      number: "03",
      title: "AI Analysis",
      description: "Our AI processes your data, categorizes spending, and identifies patterns and insights.",
    },
    {
      number: "04",
      title: "Ask Anything",
      description: "Chat with your financial data using natural language and get instant, intelligent answers.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Stronger Background Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0f] via-purple-900/10 to-[#0a0a0f] pointer-events-none"></div>
      
      {/* Large Glow Orbs */}
      <div className="absolute top-1/4 -left-64 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-64 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Background Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none">
         <GlowCurvedLine className="absolute top-0 left-0 h-full w-32 -translate-x-1/2 rotate-12" color="cyan" />
         <GlowCurvedLine className="absolute top-0 right-0 h-full w-32 translate-x-1/2 -rotate-12" color="purple" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            How it{" "}
            <span className="bg-linear-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]">
              works
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From connecting your accounts to getting insights, it's all seamless.
          </p>
        </div>
        
        {/* Central Connector Line (Desktop) */}
        <div className="hidden lg:block absolute top-[55%] left-0 w-full h-0.5 bg-gray-800/50 -translate-y-1/2 z-0">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-50 animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div 
                key={index} 
                className={`relative group ${index % 2 === 0 ? 'lg:mb-32' : 'lg:mt-32'}`}
            >
              {/* Vertical Connector to Center Line (Desktop) */}
              <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-700 group-hover:bg-purple-500/50 transition-colors duration-500 -z-10
                  ${index % 2 === 0 ? 'h-32 -bottom-32 bg-linear-to-b from-gray-800 to-purple-500/20' : 'h-32 -top-32 bg-linear-to-t from-gray-800 to-purple-500/20'}
              `}></div>

              {/* Connector Dot on Line */}
              <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gray-800 border border-purple-500/50 group-hover:bg-purple-500 group-hover:shadow-[0_0_10px_rgba(168,85,247,0.8)] transition-all duration-500 z-0
                  ${index % 2 === 0 ? '-bottom-[134px]' : '-top-[134px]'}
              `}></div>

              {/* Card */}
              <div className="relative h-full p-px rounded-2xl overflow-hidden">
                {/* Animated Gradient Border - The "Wave" */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-600 via-cyan-500 to-purple-600 opacity-0 group-hover:opacity-100 animate-border-wave transition-opacity duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-linear-to-r from-purple-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>

                {/* Card Content */}
                <div className="relative h-full bg-[#13131f]/90 backdrop-blur-md rounded-2xl p-8 border border-white/5 group-hover:border-transparent transition-colors z-10">
                
                {/* Number Background - Gradient Effect Restored */}
                <div className="absolute -right-4 -top-4 text-9xl font-bold text-white/5 select-none transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-br group-hover:from-purple-600/30 group-hover:to-cyan-600/30 group-hover:scale-110 origin-top-right">
                    {step.number}
                </div>

                {/* Icon Placeholder (Dynamic based on index) */}
                <div className="relative w-12 h-12 mb-6 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-all duration-500">
                    {index === 0 && (
                        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    )}
                    {index === 1 && (
                        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                    )}
                    {index === 2 && (
                        <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    )}
                    {index === 3 && (
                        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                    )}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors relative z-10">
                    {step.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors relative z-10">
                    {step.description}
                </p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
