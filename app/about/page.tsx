"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaClock,
  FaBrain,
  FaShieldAlt,
  FaAward,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";

const values = [
  {
    icon: <FaAward className="h-8 w-8 text-[#00ff73]" />,
    title: "Excellence",
    description:
      "We pursue excellence in everything we do, from research methodologies to product development.",
  },
  {
    icon: <FaUsers className="h-8 w-8 text-[#00ff73]" />,
    title: "Collaboration",
    description:
      "We believe in the power of collaboration across disciplines, institutions, and borders.",
  },
  {
    icon: <FaGlobe className="h-8 w-8 text-[#00ff73]" />,
    title: "Impact",
    description:
      "We measure our success by the positive impact our work has on science, society, and the planet.",
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
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Innovating the Future of
            <br />
            <span className="text-[#00ff73]">Research & Development</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            New quantum computing model speeds up simulations.
          </motion.p>
        </motion.div>

        {/* Mission Section */}
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
              At Turing R&D, we're on a mission to accelerate scientific
              discovery and technological innovation through cutting-edge
              research and development. We believe that by combining quantum
              computing, artificial intelligence, and blockchain technology, we
              can solve some of the world's most complex problems.
            </p>
            <p className="text-gray-400">
              Our interdisciplinary team of scientists, engineers, and product
              developers work together to create tools and solutions that
              empower researchers and organizations to push the boundaries of
              what's possible.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="bg-[#1e2a47] rounded-3xl p-8 shadow-lg border border-gray-700"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 mb-6">
              We envision a future where scientific research is accelerated by
              orders of magnitude, where discoveries that once took decades can
              be made in months or even weeks.
            </p>
            <p className="text-gray-400">
              By democratizing access to advanced research tools and
              methodologies, we aim to create a more collaborative,
              transparent, and efficient global research ecosystem that
              addresses humanity's greatest challenges.
            </p>
          </motion.div>
        </motion.div>

        {/* Research Areas */}
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
            Our Research Focus
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              {
                icon: FaClock,
                title: "Live Research Updates",
                description:
                  "Stay up to date with cutting-edge discoveries in real time. Our platform continuously monitors and analyzes research publications, preprints, and conference proceedings to deliver the most relevant updates to your field.",
              },
              {
                icon: FaBrain,
                title: "AI-Powered Insights",
                description:
                  "Personalized research recommendations using machine learning. Our AI systems analyze your research interests, methodologies, and previous work to suggest relevant papers, potential collaborators, and new research directions.",
              },
              {
                icon: FaShieldAlt,
                title: "Blockchain Security",
                description:
                  "Ensuring research integrity with decentralized verification. Our blockchain solutions create immutable records of research data, methodologies, and results, addressing the reproducibility crisis and building trust in scientific findings.",
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
            The principles that guide our work and culture
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
            Join Us in Shaping the Future
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you're looking to collaborate on research, explore our
            products, or join our team, we'd love to hear from you.
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
