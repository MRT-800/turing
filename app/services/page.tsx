"use client";

import React from "react";
import {
  ShieldCheck,
  Code,
  LayoutDashboard,
  PhoneCall,
  Database,
  Bot,
  Cloud,
  Lock,
  BarChart3,
  Search,
  Laptop,
  Cpu,
  CheckCircle,
  Palette
} from "lucide-react";
import { motion } from "framer-motion";

// Mock data for services
const services = [
  {
    icon: <Code className="h-8 w-8 text-blue-500" />,
    title: "App & Website Development",
    description: "Modern, scalable, and responsive apps and websites.",
  },
  {
    icon: <Database className="h-8 w-8 text-indigo-500" />,
    title: "Business Intelligence Solutions",
    description: "Turn data into insights with tailored BI solutions.",
  },
  {
    icon: <Bot className="h-8 w-8 text-pink-500" />,
    title: "Chatbot & Virtual Assistant Development",
    description: "Smart AI-powered assistants to automate communication.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-cyan-500" />,
    title: "Cloud & DevOps Services",
    description: "Seamless deployment, scaling, and cloud optimization.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-green-500" />,
    title: "Cybersecurity & Data Protection",
    description: "Protect systems and data with advanced security.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-yellow-500" />,
    title: "Data Analytics & Automation",
    description: "Analyze, optimize, and automate your workflows.",
  },
  {
    icon: <Search className="h-8 w-8 text-orange-500" />,
    title: "Digital Marketing & SEO",
    description: "Boost online visibility with targeted marketing.",
  },
  {
    icon: <Laptop className="h-8 w-8 text-teal-500" />,
    title: "IT Consulting & Tech Support",
    description: "Expert guidance and support for your IT needs.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-purple-500" />,
    title: "Machine Learning & AI Solutions",
    description: "Build intelligent systems with advanced AI models.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-lime-500" />,
    title: "QA & Software Testing",
    description: "Ensure software quality with rigorous testing.",
  },
  {
    icon: <Palette className="h-8 w-8 text-pink-400" />,
    title: "UI/UX Design & Branding",
    description: "Design experiences that delight and inspire.",
  },
];

// Animation variants for the service cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] text-gray-200 py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff73] to-[#4c75ff]"
        >
          Our Services
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        >
          At Turing Research, we deliver innovative, reliable, and future-ready digital solutions
          to help businesses thrive in a competitive world. From design and development to
          AI-powered automation, our services are tailored to drive success.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-glow-sm"
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="ml-4 text-2xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
