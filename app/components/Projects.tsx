"use client";

import React from "react";
// Import all necessary icons from react-icons
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ContactForm from "@/components/contact-form";

// --- Projects Component ---
const projects = [
  {
    name: "Aletheia Counselling",
    description:
      "Affordable, confidential counselling services designed to support mental well-being and personal growth.",
    // link: "/product/oogway",
  },
  {
    name: "Zooming",
    description:
      "Secure, encrypted video calls with advanced data protection to keep your conversations private.",
    // link: "/product/zooming",
  },
  {
    name: "SEO & Business Analysis",
    description:
      "Optimize your online presence and drive growth with our in-house SEO & business insights.",
    // link: "/product/seo-business-analysis",
  },
];

const Projects = () => {
  return (
    <section className="relative bg-[#0a0f1a] text-white pt-20 px-6 pb-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-16"
        >
          Our <span className="text-[#00ff73]">Products</span>
        </motion.h2>

        {/* Product Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            hidden: { opacity: 0 },
          }}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {projects.map((project, i) => (
            <motion.a
              key={i}
              //href={project.link}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                hidden: { opacity: 0, y: 50 },
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-[#1e2a47] rounded-xl p-8 text-left flex flex-col justify-between shadow-lg border border-gray-700 transition-all duration-300"
            >
              {/* Hover glowing border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#00ff73] transition-all duration-300" />

              <h3 className="text-3xl font-semibold mb-4">{project.name}</h3>
              <p className="text-gray-400 mb-8">{project.description}</p>

              {/* Optional Learn More */}
              {/* <div className="flex items-center text-[#00ff73] font-medium group-hover:text-white transition-colors duration-300">
                Learn More
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div> */}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  return (
    <section className="relative bg-[#0a0f1a] text-white py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#111a2f] to-[#0a0f1a] opacity-90" />

      <div className="relative container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#00ff73] to-[#00e6ff] bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-lg text-gray-400 mt-4">
            Have a project in mind or just want to say hello? We’re here to
            connect and collaborate.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-700 p-8 md:p-12 mb-16">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

// Main App
const App = () => {
  return (
    <>
      <Projects />
      <ContactPage />
    </>
  );
};

export default App;
