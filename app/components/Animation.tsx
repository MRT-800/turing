"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Minesweeper from "./minesweep";

const textContainer = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white min-h-[700px] flex items-center bg-[#0a0f1a] py-16 md:py-0">
      {/* Background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0f1a] via-[#111a2f] to-[#0a0f1a]" />
      </motion.div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl relative z-10">
        {/* Left - Text */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="show"
          className="max-w-xl text-center md:text-left"
        >
          <motion.span
            variants={textItem}
            className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-[#00ff73] bg-[#00ff73]/10 rounded-full"
          >
            Transforming Ideas into Impact
          </motion.span>

          <motion.h1
            variants={textItem}
            className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4"
          >
            Pioneering Innovation in Research & Development
          </motion.h1>

          <motion.p
            variants={textItem}
            className="text-gray-400 mb-8 text-lg sm:text-xl"
          >
            We craft cutting-edge technology solutions that empower industries,
            inspire change, and shape the future.
          </motion.p>

          <motion.div
            variants={textItem}
            className="flex justify-center md:justify-start gap-4"
          >
            <a
              href="/contact"
              className="px-8 py-3 bg-[#00ff73] text-black rounded-full font-semibold transition-all duration-300 hover:bg-[#00e666] shadow-lg hover:shadow-[#00ff73]/50"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-600 rounded-full font-semibold transition-all duration-300 hover:border-[#00ff73] hover:text-[#00ff73]"
            >
              <FaPlay />
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Minesweeper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="relative flex justify-center md:justify-end"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 overflow-hidden shadow-2xl border border-gray-700 bg-gray-900/50 backdrop-blur p-6"
            style={{
              borderTopLeftRadius: "1.8rem",
              borderTopRightRadius: "0rem",
              borderBottomRightRadius: "1.8rem",
              borderBottomLeftRadius: "0rem",
              width: 440,
              height: 400,
              maxWidth: "100vw",
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="max-w-full max-h-full scale-[1]">
                <Minesweeper />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
