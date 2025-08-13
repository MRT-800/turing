"use client";

import React from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ZoomingPage() {
  const features = [
    "High-definition video and audio",
    "Real-time document collaboration",
    "Secure, encrypted communications",
    "Recording and transcription capabilities",
    "Integration with research tools",
  ];

  const useCases = [
    "Remote research team collaboration",
    "Virtual conferences and presentations",
    "Client consultations and demonstrations",
    "Training and educational sessions",
    "Global partner meetings",
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-gray-200 py-20 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Back to Products Link */}
        <motion.a
          href="/product"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center text-gray-400 hover:text-gray-200 mb-12 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </motion.a>

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-4">
              Zooming
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Our advanced video conferencing platform designed specifically for research collaboration. Connect with
              colleagues and partners around the world with crystal-clear audio and video, share research findings in
              real-time, and collaborate on projects seamlessly.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900 rounded-2xl p-6 shadow-2xl"
          >
            <img
              src="https://placehold.co/800x500/0a0f1a/ffffff?text=Video+Collaboration"
              alt="Zooming"
              className="rounded-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Features and Use Cases Sections */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            className="bg-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-800"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Use Cases</h2>
            <ul className="space-y-4">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <Check className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-2xl p-12 text-center shadow-2xl border border-gray-800"
        >
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff73] to-cyan-500">
            Ready to get started?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a demo and see how Zooming can transform your collaboration experience.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-600/50"
          >
            Contact Us
            <ArrowRight className="ml-3 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
