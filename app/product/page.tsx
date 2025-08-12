"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Mock data for the products.
const products = [
  {
    id: "oogway",
    title: "Oogway Consultation",
    description:
      "Our expert consultation service provides tailored guidance for your research and development needs. Our team of experienced consultants works closely with you to understand your unique challenges and develop customized solutions that drive innovation and growth.",
    image: "https://placehold.co/600x400/0a0f1a/ffffff?text=R%26D+Consultation",
    link: "/product/oogway",
  },
  {
    id: "zooming",
    title: "Zooming",
    description:
      "Our advanced video conferencing platform designed specifically for research collaboration. Connect with colleagues and partners around the world with crystal-clear audio and video, share research findings in real-time, and collaborate on projects seamlessly.",
    image: "https://placehold.co/600x400/0a0f1a/ffffff?text=Video+Collaboration",
    link: "/product/zooming",
  },
  {
    id: "data-analytics",
    title: "Data Analytics Suite",
    description:
      "Powerful data analytics tools designed for research professionals. Our suite includes advanced statistical analysis, machine learning capabilities, and interactive visualization tools to help you extract meaningful insights from complex research data.",
    image: "https://placehold.co/600x400/0a0f1a/ffffff?text=Data+Analytics",
    link: "/product/zooming",
  },
];

// Animation variants for the content
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Main product page component
const ProductPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-gray-200 py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff73] to-[#4c75ff]"
        >
          Our Innovative Products
        </motion.h1>

        <div className="space-y-20 md:space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              id={product.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center bg-gray-900 rounded-3xl p-6 md:p-12 shadow-2xl transition-all duration-300 hover:shadow-glow-md hover:bg-gray-800"
            >
              {/* Product Image */}
              <motion.div 
                className={`w-full rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105 ${index % 2 !== 0 ? 'md:order-2' : ''}`}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              {/* Product Content */}
              <div className={`flex flex-col justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-50">
                  {product.title}
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href={product.link}
                  className="inline-flex items-center self-start px-8 py-4 rounded-full bg-gradient-to-r from-[#00ff73] to-cyan-500 text-[#0a0f1a] font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#00ff73]/50"
                >
                  Learn More
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App component to render the ProductPage
const App = () => {
  return <ProductPage />;
};

export default App;
