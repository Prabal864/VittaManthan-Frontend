import Reveal from './Reveal';

const Stats = ({ theme }) => {
  const isDark = theme === 'dark';
  const stats = [
    { value: "10K+", label: "Active Users" },
    { value: "5M+", label: "Transactions Analyzed" },
    { value: "99.9%", label: "Uptime" },
    { value: "50+", label: "Bank Integrations" },
  ];

  return (
    <section className={`py-24 px-4 sm:px-6 lg:px-8 border-y bg-[#F8FAFC] border-gray-100 relative overflow-hidden`}>
      {/* Subtle Background Glow - Red/Blue Watery Theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-pink-200/40 blur-[100px] rounded-full mix-blend-multiply"></div>
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-200/40 blur-[100px] rounded-full mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 100}>
            <div className="text-center group">
              <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent scale-100 group-hover:scale-105 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="text-gray-600 mt-2 font-medium tracking-wide transition-colors">{stat.label}</div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
