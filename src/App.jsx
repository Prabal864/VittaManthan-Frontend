import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import HowItWorks from "./components/HowItWorks";
import ChatDemo from "./components/ChatDemo";
import Security from "./components/Security";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import GlowCurvedLine from "./components/GlowCurvedLine";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import CursorGlow from "./components/CursorGlow";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  
  // Theme State (Forced to Light/White based on user request)
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    // Theme toggle disabled for now to enforce white theme
    setTheme("light");
  };

  useEffect(() => {
    // Force slate-50 background (F8FAFC)
    document.body.style.backgroundColor = '#F8FAFC';
  }, []);

  const LandingPage = () => {
    const params = new URLSearchParams(window.location.search);
    if (isAuthenticated && params.get("success") === "true") {
      return <Navigate to={`/dashboard${window.location.search}`} replace />;
    }
    
    return (
      <>
        <CursorGlow />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="relative z-10 transition-colors duration-300">
          <Hero theme={theme} />
          <Features theme={theme} />
          <UseCases theme={theme} />
          <HowItWorks theme={theme} />
          <ChatDemo theme={theme} />
          <Security theme={theme} />
          <CTA theme={theme} />
        </main>
        <Footer theme={theme} />
      </>
    );
  };

  return (
    <Router>
      <div className={`min-h-screen relative overflow-hidden transition-colors duration-300 ${
        theme === "dark" ? "bg-[#0a0a0f] text-white" : "bg-gray-50 text-gray-900"
      }`}>
        {/* Side Glow Effects - Helper to adjust opacity/color based on theme */}
        <GlowCurvedLine 
          className="fixed top-0 left-0 h-screen w-24 -translate-x-1/2 z-0" 
          color="purple" 
          opacity={theme === "light" ? 0.4 : 1}
        />
        <GlowCurvedLine 
          className="fixed top-0 right-0 h-screen w-24 translate-x-1/2 rotate-180 z-0" 
          color="cyan" 
          opacity={theme === "light" ? 0.4 : 1}
        />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashboard setAuthenticated={setAuthenticated} />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated} />} />
          <Route path="/signup" element={<Signup setAuthenticated={setAuthenticated} />} />
          <Route
            path="/"
            element={<LandingPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
