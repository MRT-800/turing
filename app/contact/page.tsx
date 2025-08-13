"use client";
import ContactForm from "@/components/contact-form";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="relative bg-[#0a0f1a] text-white py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#111a2f] to-[#0a0f1a] opacity-90" />

      <div className="relative container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r py-8 from-[#00ff73] to-[#00e6ff] bg-clip-text text-transparent">
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
            </div>

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
}
