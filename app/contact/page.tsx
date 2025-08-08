import ContactForm from "@/components/contact-form";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center text-gray-400 mb-12">
          Get in touch with us for collaborations and inquiries. Our team is
          ready to assist you with any questions you may have about our products
          and services.
        </p>
        <ContactForm />

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Visit Our Office</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
              <p className="text-gray-400">
                Main Road
                <br />
                Kalanki, Kathmandu
                <br />
                Nepal
              </p>
              <p className="mt-4 text-gray-400">
                <strong>Email:</strong> info@turingrd.com
                <br />
                <strong>Phone:</strong> +977 9844561238
              </p>
                <div className="flex justify-center space-x-6 text-2xl mt-5 ml-[-190px] ">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <FaTwitter />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <FaFacebook />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                      <FaInstagram />
                  </a>
                </div>
            </div>
            <div className="bg-gray-800 rounded-lg mt-[-60px] h-64 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0877848709074!2d85.3061110150614!3d27.64694398281282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1909f8b376db%3A0x45b5e6aa5b7a6ae1!2sKathmandu!5e0!3m2!1sen!2snp!4v1712741690098!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
