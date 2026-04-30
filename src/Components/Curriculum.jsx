import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const curriculumCards = [
  {
    number: "01",
    title: "Solar Energy Fundamentals",
    description: "Understand how solar panels work, energy conversion principles, and the Nigerian electricity landscape.",
  },
  {
    number: "02",
    title: "System Design & Sizing",
    description: "Learn to design systems for homes and businesses — calculating load, battery capacity, and panel array sizing.",
  },
  {
    number: "03",
    title: "Panel & Inverter Installation",
    description: "Hands-on mounting, wiring, and connecting solar panels, inverters, and charge controllers safely and correctly.",
  },
  {
    number: "04",
    title: "Battery System & Storage",
    description: "Deep dive into battery types, installation, and maintenance — including lithium and lead-acid systems.",
  },
];

function Curriculum() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % curriculumCards.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const handleDragEnd = (e, { offset }) => {
    if (offset.x < -50) {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % curriculumCards.length);
    } else if (offset.x > 50) {
      setDirection(-1);
      setCurrentIndex((prev) => (prev - 1 + curriculumCards.length) % curriculumCards.length);
    }
  };

  const card = curriculumCards[currentIndex];

  return (
    <>
      <section className="p-6">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="px-6 py-2 text-[#00A859] dark:text-[#00C96B] bg-[#E6F6EE] dark:bg-[#0d2818] rounded-full text-sm font-lato font-semibold w-max transition-colors duration-300">
              What you will learn
            </h3>
            <h1 className="sm:w-[50%] mt-6 text-3xl sm:text-4xl md:text-6xl font-bold font-lato dark:text-gray-100 transition-colors duration-300">
              A complete Curriculum built for{" "}
              <span className="text-[#00A859] dark:text-[#00C96B]">Real Results</span>
            </h1>
          </motion.div>

          {/* Desktop grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-12">
            {curriculumCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`flex flex-col gap-4 bg-[#F3F3F3] dark:bg-[#1a1d27] rounded-2xl p-4 transition-colors duration-300 ${
                  index % 2 === 0 ? "mb-12" : "mt-12"
                }`}
              >
                <p className="text-4xl font-bold text-[#00A859] dark:text-[#00C96B]">{card.number}</p>
                <h2 className="font-semibold dark:text-gray-100 transition-colors duration-300">{card.title}</h2>
                <p className="text-[#737373] dark:text-[#a0a0b0] transition-colors duration-300">{card.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden mt-12 overflow-hidden relative">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                className="flex flex-col gap-4 bg-[#F3F3F3] dark:bg-[#1a1d27] rounded-2xl p-4 cursor-grab active:cursor-grabbing transition-colors duration-300"
              >
                <p className="text-4xl font-bold text-[#00A859] dark:text-[#00C96B]">{card.number}</p>
                <h2 className="font-semibold dark:text-gray-100 transition-colors duration-300">{card.title}</h2>
                <p className="text-[#737373] dark:text-[#a0a0b0] transition-colors duration-300">{card.description}</p>
              </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {curriculumCards.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? "bg-[#00A859] w-6" : "bg-gray-300 dark:bg-gray-600 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Curriculum;