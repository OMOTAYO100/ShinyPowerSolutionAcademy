import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Enrol() {
  return (
    <section id="enrol" className="p-6 mt-12 flex flex-col gap-6 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col justify-center items-center"
      >
        <h3 className="uppercase text-xs font-bold px-4 py-2 bg-[#E6F6EE] dark:bg-[#0d2818] text-[#00A859] dark:text-[#00C96B] rounded-full tracking-wider mb-6 transition-colors duration-300">
          Registration
        </h3>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-black dark:text-gray-100 tracking-tight text-center transition-all duration-300">
          Ready To Enroll? <span className="text-[#00A859] dark:text-[#00C96B]">Here's How.</span>
        </h2>
      </motion.div>
      
      <div className="relative flex flex-col md:flex-row justify-center items-start gap-6 md:gap-10 p-6 md:p-16 font-lato max-w-[1200px] mx-auto w-full mt-8">
        
        {/* Dotted curve background for Desktop */}
        <div className="absolute top-[40%] left-[10%] w-[80%] h-[100px] z-0 hidden md:block pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 0,20 C 30,20 30,80 50,80 C 70,80 70,20 100,20" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="1, 1.5" strokeLinecap="round" className="text-[#00A859] dark:text-[#00C96B]" />
          </svg>
        </div>

        {/* Step 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 w-full md:w-1/3 p-8 md:p-10 rounded-2xl bg-[#F2F2F2] dark:bg-[#1a1d27] flex flex-col gap-4 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300"
        >
          <p className="text-[#00A859] dark:text-[#00C96B] text-5xl font-bold italic">01</p>
          <p className="font-bold text-xl text-black dark:text-gray-100 transition-colors duration-300">Make Payment To The Account Below</p>
          <ul className="flex flex-col gap-3 mt-4 text-sm">
            <li className="flex justify-between items-center text-gray-700 dark:text-gray-300 transition-colors duration-300">
               <div className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                 <span>Bank</span>
               </div>
               <span className="font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">Access Bank</span>
            </li>
            <li className="flex justify-between items-center text-gray-700 dark:text-gray-300 transition-colors duration-300">
               <div className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                 <span>Account Name</span>
               </div>
               <span className="font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">Shiny Power Solution</span>
            </li>
            <li className="flex justify-between items-center text-gray-700 dark:text-gray-300 transition-colors duration-300">
               <div className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>
                 <span>Account Number</span>
               </div>
               <span className="font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300">1896935030</span>
            </li>
          </ul>
        </motion.div>

        {/* Step 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 w-full md:w-1/3 p-8 md:p-10 rounded-2xl bg-[#F2F2F2] dark:bg-[#1a1d27] flex flex-col gap-4 shadow-sm border border-gray-100 dark:border-gray-800 md:mt-24 transition-colors duration-300"
        >
          <p className="text-[#00A859] dark:text-[#00C96B] text-5xl font-bold italic">02</p>
          <p className="font-bold text-xl text-black dark:text-gray-100 transition-colors duration-300">Send Receipt</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2 transition-colors duration-300">
            After payment, send your full name, phone number, and payment
            receipt via WhatsApp to our enrollment team to confirm your spot.
          </p>
        </motion.div>

        {/* Step 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative z-10 w-full md:w-1/3 p-8 md:p-10 rounded-2xl bg-[#F2F2F2] dark:bg-[#1a1d27] flex flex-col gap-4 shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300"
        >
          <p className="text-[#00A859] dark:text-[#00C96B] text-5xl font-bold italic">03</p>
          <p className="font-bold text-xl text-black dark:text-gray-100 transition-colors duration-300">Confirmation</p>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-2 transition-colors duration-300">
            You'll receive a confirmation message with your start date, venue
            details, and pre-programme preparation guide within 24 hours.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default Enrol;
