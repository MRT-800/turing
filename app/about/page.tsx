"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaCode,
  FaRobot,
  FaChartLine,
  FaAward,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

const values = [
  {
    icon: <FaAward className="h-8 w-8 text-[#00ff73]" />,
    title: "Excellence",
    description:
      "We deliver top-quality digital solutions, ensuring every project exceeds client expectations.",
  },
  {
    icon: <FaUsers className="h-8 w-8 text-[#00ff73]" />,
    title: "Collaboration",
    description:
      "We work closely with our clients to understand their goals and co-create impactful solutions.",
  },
  {
    icon: <FaGlobe className="h-8 w-8 text-[#00ff73]" />,
    title: "Innovation",
    description:
      "We embrace the latest technologies and creative strategies to keep your brand ahead in the digital world.",
  },
];

// Variants for staggered container
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// Variants for individual items with spring bounce
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

// Icon animation (scale + rotate)
const iconVariants = {
  hidden: { scale: 0, rotate: -90, opacity: 0 },
  show: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 140, damping: 14 },
  },
};

const AboutPage = () => {
  return (
    <div className="bg-[#0a0f1a] text-white py-20 px-6 overflow-hidden relative">
      {/* Background fade */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#111a2f] to-[#0a0f1a] z-0"
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 py-8"
          >
            Crafting Powerful Digital Experiences
            <br />
            <span className="text-[#00ff73]">For Your Brand's Success</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We provide end-to-end digital solutions including marketing, web development, AI-powered chatbots, and business intelligence — all designed to help your business grow and thrive online.
          </motion.p>
        </motion.div>

        {/* Mission & Vision Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-12 items-center mb-24"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 mb-6">
              Our mission is to empower businesses with cutting-edge digital solutions that enhance online presence, engage audiences, and drive measurable results.
            </p>
            <p className="text-gray-400">
              Through a combination of innovative web development, intelligent automation, and data-driven marketing strategies, we help brands stay ahead in a rapidly evolving digital landscape.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-[#1e2a47] rounded-3xl p-8 shadow-lg border border-gray-700"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 mb-6">
              We envision a world where every business can leverage technology to its fullest potential — from AI-driven automation to actionable business insights.
            </p>
            <p className="text-gray-400">
              By providing scalable, secure, and innovative digital solutions, we aim to transform the way brands connect with their customers and make data-driven decisions with confidence.
            </p>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: FaBullhorn,
                title: "Digital Marketing",
                description:
                  "Data-driven strategies to grow your audience, boost sales, and strengthen your brand presence.",
              },
              {
                icon: FaCode,
                title: "Web Development",
                description:
                  "Custom, responsive websites and web applications built for performance, speed, and a great user experience.",
              },
              {
                icon: FaRobot,
                title: "AI & Chatbots",
                description:
                  "Intelligent automation and AI-powered chatbots to improve customer engagement and operational efficiency.",
              },
              {
                icon: FaChartLine,
                title: "Business Intelligence",
                description:
                  "Transform raw data into actionable insights to help you make smarter, faster business decisions.",
              },
            ].map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px #00ff73",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="bg-[#1e2a47] rounded-3xl p-8 hover:bg-[#2c365b] transition-colors shadow-lg border border-gray-700 cursor-pointer"
              >
                <motion.div
                  variants={iconVariants}
                  className="flex items-center mb-4"
                >
                  <Icon className="h-8 w-8 text-[#00ff73] mr-3" />
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                </motion.div>
                <p className="text-gray-400">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-24"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-4"
          >
            Our Values
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Principles that guide our work, culture, and client relationships
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px #00ff73",
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="bg-[#1e2a47] rounded-3xl p-8 text-center shadow-lg border border-gray-700 cursor-pointer"
              >
                <motion.div
                  variants={iconVariants}
                  className="flex justify-center mb-4"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#1e2a47] rounded-3xl p-8 text-center shadow-lg border border-gray-700"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Let’s Build Your Digital Future
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you want to elevate your online presence, implement AI-driven automation, or leverage data for smarter decisions, our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#00ff73] text-[#0a0f1a] font-medium hover:bg-opacity-80 transition-all shadow-md hover:shadow-[#00ff73]/70"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
