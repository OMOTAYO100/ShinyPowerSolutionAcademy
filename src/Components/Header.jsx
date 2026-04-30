import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AvatarImg1 from "../assets/Avatar-1.webp";
import AvatarImg2 from "../assets/Avatar-2.webp";
import AvatarImg3 from "../assets/Avatar-3.webp";
import AvatarImg4 from "../assets/Avatar-4.webp";
import HeroImg from "../assets/Hero-image.webp";
import HeroImg1 from "../assets/Hero-image1.jpg";
import HeroImg2 from "../assets/Hero-image2.jpg";
import HeroImg3 from "../assets/Hero-image3.jpg";
import ShinyLogo from "../assets/shiny-logo-1.png";

const heroImages = [HeroImg, HeroImg1, HeroImg2, HeroImg3];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => 
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : false
  );
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Cycle hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Dark mode toggle pill component
  const DarkModeToggle = ({ className = "" }) => (
    <button
      onClick={toggleDarkMode}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex items-center w-[56px] h-[28px] rounded-full cursor-pointer transition-colors duration-300 ${
        isDark ? "bg-[#1a1d27] border border-[#00A859]/40" : "bg-[#E6F6EE] border border-[#00A859]/20"
      } ${className}`}
    >
      {/* Sun icon */}
      <span className={`absolute left-1.5 text-xs transition-opacity duration-300 ${isDark ? "opacity-30" : "opacity-100"}`}>
        ☀️
      </span>
      {/* Moon icon */}
      <span className={`absolute right-1.5 text-xs transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-30"}`}>
        🌙
      </span>
      {/* Sliding knob */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`absolute w-[22px] h-[22px] rounded-full shadow-md ${
          isDark ? "left-[30px] bg-[#00A859]" : "left-[3px] bg-white"
        }`}
      />
    </button>
  );

  return (
    <header
      className="relative min-h-screen py-6 overflow-hidden bg-black"
    >
      {/* ===== BACKGROUND IMAGES ===== */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out z-0 ${
            index === currentHeroIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* ===== DARK OVERLAY ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60 z-0 pointer-events-none" />

      {/* ===== NAVBAR ===== */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-50 w-full sm:w-[65%] md:w-[70%] lg:w-[55%] sm:mx-auto flex items-center justify-between px-6 sm:bg-white/95 dark:sm:bg-[#1a1d27]/90 sm:backdrop-blur-md rounded-full sm:py-1 transition-colors duration-300"
      >
        {/* Logo */}
        <img
          className="size-14 sm:size-16 rounded-full object-cover"
          src={ShinyLogo}
          alt="Shiny Logo"
        />

        {/* Desktop Nav Links */}
        <ul className="hidden sm:flex sm:flex-row sm:gap-6 items-center">
          <li>
            <a href="#home" className="text-[#737373] dark:text-[#a0a0b0] hover:text-[#00A859] transition-colors duration-200 font-lato text-sm">About</a>
          </li>
          <li>
            <a href="#about" className="text-[#737373] dark:text-[#a0a0b0] hover:text-[#00A859] transition-colors duration-200 font-lato text-sm">Curriculum</a>
          </li>
          <li>
            <a href="#services" className="text-[#737373] dark:text-[#a0a0b0] hover:text-[#00A859] transition-colors duration-200 font-lato text-sm">How it Works</a>
          </li>
          <li>
            <a href="#contact" className="text-[#737373] dark:text-[#a0a0b0] hover:text-[#00A859] transition-colors duration-200 font-lato text-sm">Register</a>
          </li>
        </ul>

        {/* Desktop: Dark Mode Toggle + Enrol Button */}
        <div className="hidden sm:flex items-center gap-3">
          <DarkModeToggle />
          <a href="#contact" className="bg-[#00A859] text-white px-5 py-2 rounded-full font-lato font-semibold text-sm hover:bg-[#008c4a] transition-all duration-300 shadow-md hover:shadow-lg">
            Enrol Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden flex flex-col items-center justify-center cursor-pointer z-50 bg-white dark:bg-[#1a1d27] p-3 rounded-full shadow-md gap-[5px] transition-colors duration-300"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[2px] bg-[#00A859] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#00A859] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-[#00A859] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </motion.nav>

      {/* ===== MOBILE MENU ===== */}
      <div
        className={`sm:hidden fixed top-0 right-0 h-full w-[70%] bg-white/95 dark:bg-[#0f1117]/95 backdrop-blur-lg z-40 p-10 pt-24 flex flex-col gap-6 shadow-2xl transition-all duration-300 origin-right ${
          menuOpen ? "scale-x-100" : "scale-x-0"
        }`}
      >
        <a href="#home" onClick={() => setMenuOpen(false)} className="text-[#333] dark:text-gray-200 text-lg font-lato font-medium hover:text-[#00A859] transition-colors">About</a>
        <a href="#about" onClick={() => setMenuOpen(false)} className="text-[#333] dark:text-gray-200 text-lg font-lato font-medium hover:text-[#00A859] transition-colors">Curriculum</a>
        <a href="#services" onClick={() => setMenuOpen(false)} className="text-[#333] dark:text-gray-200 text-lg font-lato font-medium hover:text-[#00A859] transition-colors">How it Works</a>
        <a href="#contact" onClick={() => setMenuOpen(false)} className="text-[#333] dark:text-gray-200 text-lg font-lato font-medium hover:text-[#00A859] transition-colors">Register</a>
        
        {/* Mobile Dark Mode Toggle */}
        <div className="flex items-center gap-3 mt-2">
          <span className="text-sm font-lato text-[#737373] dark:text-[#a0a0b0]">{isDark ? "Dark" : "Light"}</span>
          <DarkModeToggle />
        </div>

        <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-4 text-center bg-[#00A859] text-white px-5 py-3 rounded-full font-lato font-semibold hover:bg-[#008c4a] transition-all duration-300">
          Enrol Now
        </a>
      </div>

      {/* Mobile menu backdrop */}
      {menuOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/40 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ===== HERO CONTENT ===== */}
      <section className="relative z-10">
        {/* RENEWABLE ENERGY Watermark */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="mt-16 sm:mt-4 md:mt-2 text-center text-[38px] sm:text-[80px] md:text-[100px] lg:text-[130px] font-bold uppercase tracking-wide "
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.2)",
            WebkitTextFillColor: "#4c4c4c",
            color: "transparent",
          }}
        >
          Renewable Energy
        </motion.h1>

        {/* Main Content Area */}
        <div className="flex flex-col gap-5 mt-25 sm:mt-14 lg:mt-20 px-6 sm:px-10 lg:px-14 overflow-hidden">
          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="text-[40px] sm:text-5xl md:text-[55px] lg:text-7xl text-white font-bold font-grotesk leading-[1.1] md:w-[85%] lg:w-[80%]"
          >
            Learn Solar. <br />
            Build A Career. <br />
            Power The Future.
          </motion.h2>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="text-white/85 sm:w-[50%] md:w-[60%] lg:w-[40%] text-md sm:text-base md:text-sm font-lato leading-relaxed"
          >
            Shiny Power Solution Academy gives you hands-on solar installation
            training, from zero to job-ready. Launch your own business or join
            Nigeria's fastest-growing energy sector.
          </motion.p>

          {/* CTA Buttons + Social Proof */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-start sm:items-center md:items-start md:flex-col lg:flex-row lg:justify-between mt-2"
          >
            {/* Buttons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="bg-[#00A859] text-white px-14 sm:px-8 md:px-10 py-3 rounded-full font-lato font-semibold text-sm sm:text-base md:text-sm hover:bg-[#008c4a] hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Enrol Now
              </a>
              <a
                href="#"
                className="px-14 sm:px-8 md:px-10 py-3 rounded-full text-white border-2 border-white font-lato font-semibold text-sm sm:text-base md:text-sm hover:bg-white hover:text-[#333] transition-all duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 bg-transparent border border-white/30 px-4 py-2.5 rounded-full md:mt-4 md:w-fit">
              {/* Avatars */}
              <div className="flex -space-x-3">
                <img src={AvatarImg1} alt="Student" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                <img src={AvatarImg2} alt="Student" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                <img src={AvatarImg3} alt="Student" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                <img src={AvatarImg4} alt="Student" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white text-[#00A859] border-2 border-white font-bold text-sm">
                  +
                </div>
              </div>

              {/* Stars + Text */}
              <div className="flex flex-col leading-tight">
                <div className="flex items-center text-yellow-400 text-sm tracking-wider">
                  ★★★★★
                </div>
                <p className="text-[11px] sm:text-xs text-white/85 font-lato mt-0.5">
                  1200+ Students in Africa
                </p>
              </div>
            </div>

          </motion.div>
          
        </div>
      </section>
    </header>
  );
}

export default Header;;
