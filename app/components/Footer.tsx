import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0a0f1a] border-t border-gray-800 pt-12">
      <div className="container mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-300">
        {/* Logo & Tagline */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-5">
            <Image src="/logo.png" alt="Turing R&D" width={50} height={35} />
            <span className="font-extrabold text-xl bg-gradient-to-r from-[#00ff73] to-[#00e6ff] bg-clip-text text-transparent">
              Turing R&D
            </span>
          </Link>
          <p className="text-sm leading-relaxed max-w-xs">
            Innovating technology and delivering excellence in research and development solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-6 text-white text-lg">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Products", href: "/product" },
              { label: "Services", href: "/services" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact Us", href: "/contact" },
            ].map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="hover:text-[#00ff73] transition-colors duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-6 text-white text-lg">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[#00ff73]" />
              <a
                href="mailto:info@turingrd.com"
                className="hover:text-[#00ff73] transition-colors duration-300"
              >
                info@turingrd.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#00ff73]" />
              <a
                href="tel:+977 9844561238"
                className="hover:text-[#00ff73] transition-colors duration-300"
              >
                +977 9844561238
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#00ff73] mt-1" />
              <span>kalanki, kathmandu</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-6 text-white text-lg">Follow Us</h4>
          <div className="flex space-x-5">
            {[{
              icon: Facebook,
              href: "https://facebook.com",
              label: "Facebook",
            },{
              icon: Twitter,
              href: "https://twitter.com",
              label: "Twitter",
            },{
              icon: Linkedin,
              href: "https://linkedin.com",
              label: "LinkedIn",
            },{
              icon: Instagram,
              href: "https://instagram.com",
              label: "Instagram",
            }].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-full bg-gray-800 hover:bg-[#00ff73] transition-colors duration-300 shadow-md hover:shadow-[#00ff73]/50"
              >
                <Icon className="h-5 w-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500 select-none">
        &copy; {new Date().getFullYear()} Turing and Research Development. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
