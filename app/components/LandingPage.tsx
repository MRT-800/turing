"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaCode, FaRobot, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaBullhorn className="text-4xl text-[#00ff73]" />,
    title: "Digital Marketing",
    description:
      "Data-driven strategies to grow your brand, engage your audience, and boost conversions.",
  },
  {
    icon: <FaCode className="text-4xl text-[#00ff73]" />,
    title: "Web Development",
    description:
      "Custom, responsive websites and apps built for performance, speed, and user experience.",
  },
  {
    icon: <FaRobot className="text-4xl text-[#00ff73]" />,
    title: "AI & Chatbots",
    description:
      "Smart automation tools and chatbots that enhance customer support and streamline workflows.",
  },
  {
    icon: <FaChartLine className="text-4xl text-[#00ff73]" />,
    title: "Business Intelligence",
    description:
      "Transform raw data into actionable insights to make smarter, faster business decisions.",
  },
];

const ServicesShowcase = () => {
  return (
    <section className="relative bg-[#0a0f1a] text-white py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Comprehensive{" "}
            <span className="text-[#00ff73]">Digital Solutions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From marketing to development, AI to business intelligence — we
            deliver everything your brand needs to thrive online.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            hidden: { opacity: 0 },
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                hidden: { opacity: 0, y: 50 },
              }}
              className="bg-[#1e2a47] rounded-xl p-8 text-center flex flex-col items-center shadow-lg border border-gray-700"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-[#00ff73] text-black rounded-full font-semibold transition-all duration-300 hover:bg-[#00e666] shadow-lg"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
