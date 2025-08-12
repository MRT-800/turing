"use client";

import React from "react";
// Import all necessary icons from react-icons to be used in all components
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedinIn, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

// --- Projects Component (with fixed spacing) ---
const projects = [
  { name: "Oogway Consultation", description: "Providing Consultation", link: "/product/oogway" },
  { name: "Zooming", description: "Like zoom call", link: "/product/zooming" },
];

const Projects = () => {
  return (
    // Changed 'py-20' to 'pt-20' to remove the bottom padding
    <section className="relative bg-[#0a0f1a] text-white pt-20 px-6 pb-10 overflow-hidden">
      <div className="container mx-auto max-w-7xl text-center">
        {/* Heading Section */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold leading-tight mb-16"
        >
          Our <span className="text-[#00ff73]">Products</span> and Services
        </motion.h2>

        {/* Project Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            hidden: { opacity: 0 },
          }}
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link}
              variants={{
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                hidden: { opacity: 0, y: 50 },
              }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-[#1e2a47] rounded-xl p-8 text-left flex flex-col justify-between shadow-lg border border-gray-700 transition-all duration-300"
            >
              {/* Green glowing border on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#00ff73] transition-all duration-300" />
              
              <h3 className="text-3xl font-semibold mb-4">{project.name}</h3>
              <p className="text-gray-400 mb-8">{project.description}</p>
              
              <div className="flex items-center text-[#00ff73] font-medium group-hover:text-white transition-colors duration-300">
                Learn More
                <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};


// --- ContactPage Component (from previous response) ---
const ContactPage = () => {
  return (
    <section className="relative bg-[#0a0f1a] flex flex-col items-center justify-center px-6 py-20 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight">
          <span className="text-[#00ff73]">Contact</span> Us
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
          Have questions or want to collaborate? Reach out to us below.
        </p>

        {/* Social Icons section with a consistent green accent color. */}
        <div className="flex justify-center space-x-10 text-4xl mb-16 text-[#00ff73]">
          {[
            { icon: FaTwitter, label: "Twitter", href: "#" },
            { icon: FaFacebook, label: "Facebook", href: "#" },
            { icon: FaInstagram, label: "Instagram", href: "#" },
          ].map(({ icon: Icon, label, href }, i) => (
            <motion.a
              key={i}
              href={href}
              aria-label={label}
              className="hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* Contact Form with new dark background, border, and input styles. */}
        <form
          className="bg-[#1e2a47] rounded-3xl p-10 shadow-lg max-w-xl mx-auto border border-gray-700"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mb-6 text-left">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-[#2c365b] border border-gray-600 focus:border-[#00ff73] focus:ring-1 focus:ring-[#00ff73] text-white outline-none transition"
              required
            />
          </div>

          <div className="mb-6 text-left">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-xl bg-[#2c365b] border border-gray-600 focus:border-[#00ff73] focus:ring-1 focus:ring-[#00ff73] text-white outline-none transition"
              required
            />
          </div>

          <div className="mb-8 text-left">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-300 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message..."
              className="w-full p-3 rounded-xl bg-[#2c365b] border border-gray-600 focus:border-[#00ff73] focus:ring-1 focus:ring-[#00ff73] text-white outline-none transition resize-none"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#00ff73] text-[#0a0f1a] font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:bg-opacity-80"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};



// The main App component that renders all the sections.
const App = () => {
  return (
    <>
      <Projects />
      <ContactPage />
    
    </>
  );
};

export default App;
