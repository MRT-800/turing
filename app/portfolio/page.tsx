"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Slider from "react-slick";

export default function PortfolioPage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // Container animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Individual card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <div className="bg-[#0a0f1a] text-gray-200 min-h-screen pt-20 pb-16 px-4 md:px-8">
      {/* Page Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff73] to-[#4c75ff]"
      >
        Our Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-400 max-w-3xl mx-auto text-center mb-16"
      >
        A showcase of our finest work, where creativity meets execution. We deliver excellence with every project.
      </motion.p>

      {/* Portfolio Cards with staggered animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20"
      >
        {portfolioItems.map((item, idx) => (
          <motion.div key={item.title} variants={cardVariants}>
            <PortfolioCard {...item} />
          </motion.div>
        ))}
      </motion.div>

      {/* Reviews Section */}
      <section className="mt-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-center text-gray-50"
        >
          What Our Clients Say
        </motion.h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12 text-center">
          We take pride in our work, and our clients love what we do. Here’s their feedback on working with us.
        </p>

        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 max-w-xl mx-auto"
              >
                <p className="text-gray-300 italic mb-4 text-lg">“{review.text}”</p>
                <h4 className="text-gray-50 font-semibold">{review.author}</h4>
                <span className="text-gray-400 text-sm">{review.company}</span>
              </motion.div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

// PortfolioCard component remains the same as your original code

function PortfolioCard({
  title,
  description,
  link,
  link2,
  link3,
  link4,
}: {
  title: string;
  description: string;
  link: string;
  link2?: string;
  link3?: string;
  link4?: string;
}) {
  return (
    <div className="relative group bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-[2px] shadow-xl hover:shadow-glow-md transition-all duration-300">
      <div className="bg-gray-900 rounded-3xl p-6 h-full flex flex-col">
        <h2 className="text-2xl font-bold mb-3 text-gray-50">{title}</h2>
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-4 text-[#00ff73] hover:text-[#4c75ff] font-semibold transition-colors"
        >
          Learn more →
        </a>
        <div className="flex gap-4 mt-auto">
          {link2 && (
            <a href={link2} target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5 text-blue-500 hover:text-blue-400 transition-colors" />
            </a>
          )}
          {link3 && (
            <a href={link3} target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 text-pink-500 hover:text-pink-400 transition-colors" />
            </a>
          )}
          {link4 && (
            <a href={link4} target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5 text-sky-500 hover:text-sky-400 transition-colors" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Data remains unchanged
const portfolioItems = [
  {
    title: "Aletheia",
    description:
      "Aletheia Counselling offers compassionate, confidential, and affordable mental health support through convenient online sessions...",
    link: "https://aletheiacounselling.com/",
    link2: "https://www.facebook.com/profile.php?id=61576118828424",
    link3: "https://www.instagram.com/aletheiacounselling/",
    link4: "https://x.com/aletheai",
  },
  {
    title: "Thermotech",
    description:
      "Thermotech provides reliable and professional installation of air conditioning and ventilation systems for homes and businesses...",
    link: "https://thermotech.com.np/",
    link2: "https://facebook.com/thermotech",
    link3: "https://instagram.com/thermotech",
    link4: "https://x.com/thermotech",
  },
  {
    title: "Dabn",
    description:
      "Dabn is a trusted provider of electrical solutions, specializing in wiring, installation, and maintenance of home appliances...",
    link: "https://dabn.com.np/",
    link2: "https://facebook.com/dabn",
    link3: "https://instagram.com/dabn",
    link4: "https://x.com/dabn",
  },
];

// Reviews data unchanged
const reviews = [
  {
    text: "Working with this team was an absolute pleasure. They exceeded our expectations in every way.",
    author: "Hari Bhattarai",
    company: "Aletheia Counselling",
  },
  {
    text: "Professional, efficient, and results-driven. Our project was delivered ahead of schedule and under budget.",
    author: "Debendra Bartaula",
    company: "Thermotech",
  },
  {
    text: "The communication and quality of work were top-notch. Highly recommended!",
    author: "Bhup Raj Neupane",
    company: "Dban",
  },
];
