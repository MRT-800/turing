"use client";

import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    // Main section with a solid dark background, matching the new design.
    <section className="relative min-h-screen bg-[#0a0f1a] flex flex-col items-center justify-center px-6 py-20 text-white overflow-hidden">
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

export default ContactPage;
