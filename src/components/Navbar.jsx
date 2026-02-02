
const Navbar = ({ theme = 'light', toggleTheme }) => {
  const isDark = false; // Forced light mode

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-300 bg-[#F8FAFC]/80 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              VittaManthan
            </span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#features" className="transition-colors text-gray-600 hover:text-gray-900 font-medium">
                Features
              </a>
              <a href="#how-it-works" className="transition-colors text-gray-600 hover:text-gray-900 font-medium">
                How It Works
              </a>
              <a href="#demo" className="transition-colors text-gray-600 hover:text-gray-900 font-medium">
                Demo
              </a>
              <a href="/login" className="font-medium px-4 py-2 transition-colors text-gray-600 hover:text-gray-900">
                Login
              </a>
              <a href="/signup" className="relative group">
                <span className="relative block px-5 py-2 rounded-lg font-bold transition-colors text-white bg-slate-900 hover:bg-slate-800 shadow-md">
                  Signup
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
