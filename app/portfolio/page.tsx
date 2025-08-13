
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <div className="bg-[#0a0f1a] text-gray-200 min-h-screen pt-20 pb-16 px-4 md:px-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 py-8 text-transparent bg-clip-text bg-gradient-to-r from-[#00ff73] to-[#4c75ff]">
          We Build Stunning Websites & Marketing Campaigns
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Combining creativity, technology, and strategy to help businesses grow online.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#portfolio"
            className="px-6 py-3 bg-[#00ff73] text-black font-semibold rounded-lg hover:bg-[#4c75ff] transition-colors"
          >
            View Portfolio
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-[#00ff73] text-[#00ff73] rounded-lg hover:bg-[#00ff73] hover:text-black transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-50">About Us</h2>
        <p className="text-gray-400 mb-2">
          We help brands grow through beautiful websites, targeted marketing campaigns, and measurable results.
        </p>
        <p className="text-gray-400">
          Founded in 2022, we have worked with clients across multiple industries, delivering excellence in both web development and digital marketing.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gray-900 p-6 rounded-3xl shadow-xl text-center hover:shadow-glow-md transition-shadow"
          >
            <service.icon className="mx-auto h-12 w-12 mb-4 text-[#00ff73]" />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="mb-20 scroll-mt-32">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-gray-50"
        >
          Our Work
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {portfolioItems.map((item) => (
            <motion.div key={item.title} variants={cardVariants}>
              <PortfolioCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Reviews Section */}
      <section className="mb-20">
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
          We take pride in our work, and our clients love what we do. Here’s their feedback.
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

      {/* Contact Section */}
      {/* <section id="contact" className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-50">Get In Touch</h2>
        <p className="text-gray-400 mb-6">
          Interested in working together? Send us a message and we’ll get back to you quickly.
        </p>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200"
          />
          <textarea
            placeholder="Your Message"
            className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-200 h-32"
          />
          <button className="px-6 py-3 bg-[#00ff73] text-black font-semibold rounded-lg hover:bg-[#4c75ff] transition-colors">
            Send Message
          </button>
        </form>
      </section> */}
    </div>
  );
}

// PortfolioCard
function PortfolioCard({ title, description, link, link2, link3, link4 }: any) {
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

// Services Data
const services = [
  { title: "Web Development", description: "Responsive, fast, and SEO-friendly websites.", icon: require("lucide-react").Code },
  { title: "Branding & Design", description: "Visual identity that communicates your story.", icon: require("lucide-react").Palette },
  { title: "Marketing & SEO", description: "Paid & organic strategies to increase leads.", icon: require("lucide-react").BarChart3 },
];

// Portfolio Items
const portfolioItems = [
  {
    title: "Aletheia",
    description: "Compassionate, confidential, and affordable mental health support through online sessions.",
    link: "https://aletheiacounselling.com/",
    link2: "https://www.facebook.com/profile.php?id=61576118828424",
    link3: "https://www.instagram.com/aletheiacounselling/",
    link4: "https://x.com/aletheai",
  },
  {
    title: "Thermotech",
    description: "Reliable and professional installation of air conditioning and ventilation systems.",
    link: "https://thermotech.com.np/",
    link2: "https://facebook.com/thermotech",
    link3: "https://instagram.com/thermotech",
    link4: "https://x.com/thermotech",
  },
  {
    title: "Dabn",
    description: "Trusted provider of electrical solutions, wiring, installation, and maintenance of home appliances.",
    link: "https://dabn.com.np/",
    link2: "https://facebook.com/dabn",
    link3: "https://instagram.com/dabn",
    link4: "https://x.com/dabn",
  },
];

// Reviews Data
const reviews = [
  {
    text: "Working with this team was an absolute pleasure. They exceeded our expectations in every way.",
    author: "Hari Bhattarai",
    company: "Aletheia Counselling",
  },
  {
    text: "Excellent communication and quality of work. Highly recommend.",
    author: "Debendra Bartaula",
    company: "Thermotech",
  },
  {
    text: "Professional and efficient. Our project was completed on time and within budget.",
    author: "Bhup Raj Neupane",
    company: "Dabn",
  },
];
