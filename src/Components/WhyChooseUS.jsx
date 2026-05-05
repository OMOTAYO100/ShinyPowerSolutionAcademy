import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Cards } from "../data/WhyChooseUsData";
import { IoIosArrowUp } from "react-icons/io";
import ChooseUsImage1 from "../assets/WhyChooseUs-Image1.webp";
import ChooseUsImage2 from "../assets/WhyChooseUs-Image2.webp";
import ChooseUsImage3 from "../assets/WhyChooseUs-Image3.webp";
import ChooseUsImage4 from "../assets/WhyChooseUs-Image4.webp";
import ChooseUsImage5 from "../assets/WhyChooseUs-Image5.webp";
import ChooseUsImage6 from "../assets/WhyChooseUs-Image6.webp";

function WhyChooseUS() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleImage = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <section id="why-choose-us" className="p-6 mt-12 flex flex-col gap-6 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-12 mb-6"
        >
          <h3 className="text-[#00A859] dark:text-[#00C96B] bg-[#E6F6EE] dark:bg-[#0d2818] px-6 py-2 rounded-full text-sm font-lato font-semibold w-max transition-colors duration-300">
            Why Choose Us
          </h3>
          <div className="mt-4 flex flex-col sm:justify-between gap-6 sm:flex-row">
            <h1 className="sm:w-[40%] text-3xl sm:text-4xl md:text-6xl font-semibold font-lato dark:text-gray-100 transition-colors duration-300">
              Everything You Need To{" "}
              <span className="text-[#00A859] dark:text-[#00C96B]">Succeed In Solar</span>
            </h1>
            <p className="sm:w-[30%] text-md text-[#737373] dark:text-[#a0a0b0] font-lato transition-colors duration-300">
              We don't just teach, we prepare you for a career. Here's what
              makes our program different.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          {Cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#E6F6EE] dark:bg-[#0d2818] p-6 rounded-2xl flex flex-col gap-6 cursor-pointer transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row justify-between" onClick={() => toggleImage(index)}>
                <div className="flex items-center sm:justify-center gap-4 cursor-pointer mb-4 sm:mb-0">
                  <IoIosArrowUp
                    className={`w-8 h-8 bg-green-500 text-white rounded-full p-2 cursor-pointer transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0"}`}
                  />
                  <h2 className="text-xl sm:text-2xl text-[#00A859] dark:text-[#00C96B] font-semibold font-lato transition-colors duration-300">
                    {card.title}
                  </h2>
                </div>
                <p className="sm:w-[30%] text-xl text-[#737373] dark:text-[#a0a0b0] font-lato transition-colors duration-300">
                  {card.description}
                </p>
              </div>

              <figure className={`overflow-hidden transition-all duration-300 rounded-2xl ${openIndex === index ? "max-h-500 " : "max-h-0"}`}>
                  <img src={card.image} alt={card.title} />
              </figure>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default WhyChooseUS;
