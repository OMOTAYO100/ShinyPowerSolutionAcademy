import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import ShinyLogo from '../assets/shiny-logo-1.png';
import footerImg1 from '../assets/footer-img1.webp';
import footerImg2 from '../assets/footer-img2.webp'; 
import footerImg3 from '../assets/footer-img3.webp';

const iconClass = "w-6 h-6 hover:text-[#00A859] transition-colors cursor-pointer";

function Footer() {
  return (
    <div id="footer" className="flex flex-col w-full font-lato">
      
      {/* Top CTA Banner Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="bg-[#EEF7F2] dark:bg-[#0d2818] relative overflow-hidden flex items-center min-h-[450px] transition-colors duration-300"
      >
        <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24 w-full grid grid-cols-1 md:grid-cols-2 z-10 relative">
          <div className="flex flex-col justify-center gap-8 max-w-lg">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-black dark:text-gray-100 leading-snug transition-colors duration-300">
              Nigeria's energy transition is happening now. Get your seat before the next cohort fills up.
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#00A859] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-sm">
                Enroll Now
              </button>
              <button className="border-2 border-[#00A859] text-[#00A859] dark:text-[#00C96B] dark:border-[#00C96B] px-8 py-3.5 rounded-full font-semibold hover:bg-green-50 dark:hover:bg-[#00A859]/10 transition-colors bg-transparent">
                View Curriculum
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Graphics */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block pointer-events-none">
          <div className="absolute top-[-20%] right-[20%] w-[300px] h-[300px] rounded-full overflow-hidden shadow-md">
            <img src={footerImg1} alt="Solar Panels" className="w-full h-full object-cover" />
          </div>
          <div className="absolute top-[25%] right-[18%] w-[340px] h-[340px] rounded-full overflow-hidden shadow-md z-10">
            <img src={footerImg2} alt="Solar Panels Grid" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-[-30%] right-[23%] w-[250px] h-[250px]  shadow-sm z-20">
            <img src={footerImg3} alt="Solar Installation" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Main Footer Links */}
      <footer className="bg-white dark:bg-[#0f1117] pt-20 pb-10 transition-colors duration-300">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
        >
          {/* Logo */}
          <div className="flex flex-col items-start">
            <img src={ShinyLogo} alt="Shiny Power Solution" className="w-32 object-contain" />
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-6 text-lg transition-colors duration-300">Quick Links</h3>
            <ul className="space-y-4 text-gray-700 dark:text-gray-400 font-medium">
              <li><a href="#curriculum" className="hover:text-[#00A859] transition-colors">Curriculum</a></li>
              <li><a href="#why-choose-us" className="hover:text-[#00A859] transition-colors">How It Works</a></li>
              <li><a href="#about" className="hover:text-[#00A859] transition-colors">About Us</a></li>
              <li><a href="#enrol" className="hover:text-[#00A859] transition-colors">Enrolment</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-6 text-lg transition-colors duration-300">Contact</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-400 font-medium text-sm leading-relaxed transition-colors duration-300">
              <p>Address: Exotic filling station, opposite<br/>Cheshire Sango, Eleyele Express, Ibadan</p>
              <p>Email: shinymediaempire@gmail.com</p>
              <p>Phone: +234 904 858 3593</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col">
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-6 text-lg transition-colors duration-300">Social Media</h3>
            <div className="flex gap-5 text-gray-500 dark:text-gray-400">
              <a href="https://www.instagram.com/shinypowersolution" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={iconClass} />
              </a>
              <a href="https://www.facebook.com/shinypowersolution" target="_blank" rel="noopener noreferrer">
                <FaFacebook className={iconClass} />
              </a>
              <a href="https://www.linkedin.com/company/shinypowersolution" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className={iconClass} />
              </a>
              <a href="https://twitter.com/shinypowersolution" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className={iconClass} />
              </a>
            </div>
          </div>
        </motion.div>
        
        {/* Giant SHINY Text & Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative mt-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300"
        >
          {/* Grid Background */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none z-0" 
            style={{ 
              backgroundImage: 'linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)', 
              backgroundSize: '80px 80px',
              backgroundPosition: 'center top'
            }}
          ></div>
          
          <div className="relative z-10 w-full overflow-hidden flex flex-col items-center justify-center pt-16 md:pt-24 pb-8">
            <h1 className="text-[33vw] md:text-[clamp(200px,33vw,490px)] leading-[0.8] font-bold text-[#75D099] dark:text-[#1a5c38] select-none text-center tracking-tight transition-colors duration-300">
              SHINY
            </h1>
            
            {/* Bottom Copyright Row */}
            <div className="w-full max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center mt-12 md:mt-20 z-20">
              <div className="flex gap-5 text-gray-500 dark:text-gray-400 mb-4 md:mb-0 bg-white/60 dark:bg-[#1a1d27]/60 p-2 rounded-xl backdrop-blur-sm transition-colors duration-300">
                <a href="https://www.instagram.com/shinypowersolution" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className={iconClass} />
                </a>
                <a href="https://www.facebook.com/shinypowersolution" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className={iconClass} />
                </a>
                <a href="https://www.linkedin.com/company/shinypowersolution" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className={iconClass} />
                </a>
                <a href="https://twitter.com/shinypowersolution" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter className={iconClass} />
                </a>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold tracking-wide bg-white/60 dark:bg-[#1a1d27]/60 p-2 rounded-xl backdrop-blur-sm transition-colors duration-300">
                © 2025 Shiny Power Solution Academy. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default Footer;
