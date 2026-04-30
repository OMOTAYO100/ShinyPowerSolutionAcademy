import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { testimonialsData } from '../data/TestimonialsData';

function Testimonial() {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData, ...testimonialsData, ...testimonialsData];

  return (
    <div className='py-16 md:py-24 bg-white dark:bg-[#0f1117] overflow-hidden flex flex-col w-full transition-colors duration-300'>
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-slide {
            animation: slide 40s linear infinite;
          }
          .animate-slide:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Header section - strictly left aligned */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-start text-left mb-12 px-6 w-full max-w-[1400px] mx-auto"
      >
        <span className="uppercase text-xs font-bold px-4 py-2 bg-[#E6F6EE] dark:bg-[#0d2818] text-[#00A859] dark:text-[#00C96B] rounded-full tracking-wider mb-6 transition-colors duration-300">
          Student Stories
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold italic text-black dark:text-gray-100 tracking-tight transition-colors duration-300">
          Real People. <span className="text-[#00A859] dark:text-[#00C96B]">Real Results.</span>
        </h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full relative group"
      >
        <div className="flex w-max animate-slide">
          {duplicatedTestimonials.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 bg-[#F8F9FA] dark:bg-[#1a1d27] rounded-2xl p-8 w-[320px] sm:w-[380px] shrink-0 border border-gray-100 dark:border-gray-800 mx-3 transition-colors duration-300">
              <div className="flex justify-start sm:hidden text-[#F4B400] text-lg">
                <span className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 text-left text-base leading-relaxed grow transition-colors duration-300">"{item.quote}"</p>
              
              <div className="flex flex-row items-center justify-between mt-auto pt-4 gap-2">
                <div className="flex flex-row items-center gap-3">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                  <div className="text-left">
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 text-base whitespace-nowrap transition-colors duration-300">{item.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap transition-colors duration-300">{item.role}</p>
                  </div>
                </div>
                <div className="hidden sm:flex text-[#F4B400] gap-1 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Testimonial