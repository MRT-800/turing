"use client";

import React from "react";
// Import all necessary icons from react-icons to be used in all components
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

// --- Projects Component (with fixed spacing) ---
const projects = [
  {
    name: "Oogway Consultation",
    description: "Providing Consultation",
    link: "/product/oogway",
  },
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
// const ContactPage = () => {
//   return (
//     <section className="relative bg-[#0a0f1a] flex flex-col items-center justify-center px-6 py-20 text-white overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="w-full max-w-3xl text-center"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight">
//           <span className="text-[#00ff73]">Contact</span> Us
//         </h2>
//         <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
//           Have questions or want to collaborate? Reach out to us below.
//         </p>

//         {/* Social Icons section with a consistent green accent color. */}
//         <div className="flex justify-center space-x-10 text-4xl mb-16 text-[#00ff73]">
//           {[
//             { icon: FaTwitter, label: "Twitter", href: "#" },
//             { icon: FaFacebook, label: "Facebook", href: "#" },
//             { icon: FaInstagram, label: "Instagram", href: "#" },
//           ].map(({ icon: Icon, label, href }, i) => (
//             <motion.a
//               key={i}
//               href={href}
//               aria-label={label}
//               className="hover:text-white transition-colors duration-300"
//               whileHover={{ scale: 1.2 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Icon />
//             </motion.a>
//           ))}
//         </div>

//         {/* Contact Form with new dark background, border, and input styles. */}
//         <form
//           className="bg-[#1e2a47] rounded-3xl p-10 shadow-lg max-w-xl mx-auto border border-gray-700"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <div className="mb-6 text-left">
//             <label
//               htmlFor="name"
//               className="block text-sm font-semibold text-gray-300 mb-2"
//             >
//               Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 rounded-xl bg-[#2c365b] border border-gray-600 focus:border-[#00ff73] focus:ring-1 focus:ring-[#00ff73] text-white outline-none transition"
//               required
//             />
//           </div>

//           <div className="mb-6 text-left">
//             <label
//               htmlFor="email"
//               className="block text-sm font-semibold text-gray-300 mb-2"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               placeholder="you@example.com"
//               className="w-full p-3 rounded-xl bg-[#2c365b] border border-gray-600 focus:border-[#00ff73] focus:ring-1 focus:ring-[#00ff73] text-white outline-none transition"
//               required
//             />
//           </div>

//           <div className="mb-8 text-left">
//             <label
//               htmlFor="message"
//               className="block text-sm font-semibold text-gray-300 mb-2"
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows={5}
//               placeholder="Write your message..."
//               className="w-full p-3 rounded-xl bg-[#2c365b] border border-gray-600 focus:border-[#00ff73] focus:ring-1 focus:ring-[#00ff73] text-white outline-none transition resize-none"
//               required
//             ></textarea>
//           </div>

//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="w-full bg-[#00ff73] text-[#0a0f1a] font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:bg-opacity-80"
//           >
//             Send Message
//           </motion.button>
//         </form>
//       </motion.div>
//     </section>
//   );
// };
const ContactPage = () => {
  return (
    <section className="relative bg-[#0a0f1a] text-white py-20">
      {/* Background gradient */}
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

        {/* Office Info & Map */}
        {/* <div className="grid md:grid-cols-2 gap-12"> */}
        {/* Office Info */}
        {/* <div className="bg-gray-900/50 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-700 p-8">
            <h2 className="text-2xl font-bold mb-6">Visit Our Office</h2>
            <h3 className="text-xl font-semibold text-[#00ff73]">
              Headquarters
            </h3>
            <p className="text-gray-400 mt-2">
              Main Road
              <br />
              Kalanki, Kathmandu
              <br />
              Nepal
            </p>

            <div className="mt-6 text-gray-400">
              <p>
                <strong className="text-white">Email:</strong> info@turingrd.com
              </p>
              <p>
                <strong className="text-white">Phone:</strong> +977 9844561238
              </p>
            </div> */}

        {/* Social Links */}
        {/* <div className="flex gap-4 mt-8">
              <a
                href="https://x.com/"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#00ff73] hover:text-black transition-all shadow-md hover:shadow-[#00ff73]/40"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://www.facebook.com/"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#00ff73] hover:text-black transition-all shadow-md hover:shadow-[#00ff73]/40"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#00ff73] hover:text-black transition-all shadow-md hover:shadow-[#00ff73]/40"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div> */}

        {/* Map */}
        {/* <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-700 h-80 md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0877848709074!2d85.3061110150614!3d27.64694398281282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1909f8b376db%3A0x45b5e6aa5b7a6ae1!2sKathmandu!5e0!3m2!1sen!2snp!4v1712741690098!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        {/* </div> */}
      </div>
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
