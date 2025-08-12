"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/product", label: "Product" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const pathname = usePathname(); // current route
  const [isOpen, setIsOpen] = useState(false);
  const [animateContact, setAnimateContact] = useState(false);

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateContact(true);
      setTimeout(() => setAnimateContact(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[#1e2a47] border-b border-gray-700 shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Text always on left */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Turing R&D"
            className="w-12 h-10"
          />
          <span className="font-semibold tracking-wide text-lg text-white group-hover:text-[#00ff73] transition-colors">
            Turing R&D
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const isContact = link.label === "Contact Us";

            return isContact ? (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full font-medium transition-colors duration-200 relative
                  bg-[#00ff73] text-[#0a0f1a] hover:bg-opacity-80 shadow-sm
                  ${isActive ? "ring-2 ring-[#00ff73]/50" : ""}
                  ${animateContact ? "animate-borderPulse" : ""}
                `}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className={`relative font-medium tracking-wide transition-colors duration-200
                  ${isActive ? "text-[#00ff73]" : "text-gray-400 hover:text-[#00ff73]"}
                `}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#00ff73] rounded-full"></span>
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Controls: Contact Us and Hamburger aligned right */}
        <div className="flex md:hidden items-center gap-3 ml-auto">
          {/* Contact Us button */}
          <a
            href="/contact"
            className={`px-4 py-2 rounded-full font-medium bg-[#00ff73] text-[#0a0f1a] hover:bg-opacity-80 shadow-sm transition ${
              pathname === "/contact" ? "ring-2 ring-[#00ff73]/50" : ""
            } ${animateContact ? "animate-borderPulse" : ""}`}
            aria-label="Contact Us"
          >
            Contact Us
          </a>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-full p-2 hover:bg-gray-700 transition text-gray-400 hover:text-[#00ff73]"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 h-screen w-72 bg-[#0a0f1a] shadow-lg border-l border-gray-700 p-6 transform transition-transform duration-300 z-50 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <a
            href="/"
            onClick={handleNavLinkClick}
            className="flex items-center gap-2"
          >
            <img
              src="/logo.png"
              alt="Turing R&D"
              className="w-12 h-8"
            />
            <span className="font-semibold text-lg text-[#00ff73]">
              Turing R&D
            </span>
          </a>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 hover:bg-gray-700 transition text-gray-400 hover:text-[#00ff73]"
            aria-label="Close mobile menu"
          >
            <FaTimes />
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavLinkClick}
                className={`text-lg font-medium tracking-wide transition-colors ${
                  isActive ? "text-[#00ff73]" : "text-gray-400 hover:text-[#00ff73]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </aside>

      <style jsx global>{`
        @keyframes borderPulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(0, 255, 115, 0.6);
          }
          50% {
            box-shadow: 0 0 0 4px rgba(0, 255, 115, 0.3);
          }
        }
        .animate-borderPulse {
          animation: borderPulse 1s ease-in-out;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
