const Stats = () => {
  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "5M+", label: "Transactions Analyzed" },
    { value: "99.9%", label: "Uptime" },
    { value: "50+", label: "Bank Integrations" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-purple-600/20 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[150px] bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none mix-blend-screen"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent scale-100 group-hover:scale-110 group-active:scale-110 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                {stat.value}
              </div>
              <div className="text-gray-400 mt-2 font-medium group-hover:text-white group-active:text-white transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
