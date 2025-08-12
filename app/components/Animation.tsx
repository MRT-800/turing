"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

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
    <section className="relative overflow-hidden text-white min-h-[800px] flex items-center bg-[#0a0f1a] py-20 md:py-0">
      {/* Background gradient with subtle animation */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#0a0f1a] via-[#111a2f] to-[#0a0f1a]" />
      </motion.div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl relative z-10">
        {/* Left - Text Content */}
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
            className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-white"
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
              className="px-8 py-3 bg-[#00ff73] text-black rounded-full font-semibold transition-all duration-300 hover:bg-[#00e666] shadow-lg hover:shadow-[#00ff73]/50 inline-block text-center"
            >
              Get Started
            </a>
            <a
              href="/about"
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-600 text-white rounded-full font-semibold transition-all duration-300 hover:border-[#00ff73] hover:text-[#00ff73]"
            >
              <FaPlay />
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Image with floating effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          }}
          className="relative w-full max-w-lg md:max-w-xl mt-10 md:mt-0 flex justify-center md:justify-end"
        >
          <motion.div
            animate={{
              y: [0, -10, 0], // floating animation
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-[550px] h-[400px] z-20 overflow-hidden shadow-2xl border border-gray-700 bg-gray-900/50 backdrop-blur"
            style={{
              borderTopLeftRadius: "2rem",
              borderTopRightRadius: "0rem",
              borderBottomRightRadius: "2rem",
              borderBottomLeftRadius: "0rem",
            }}
          >
            <Image
              src="/images/rd.png"
              alt="Innovation Showcase"
              layout="fill"
              objectFit="cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
