'use client';

import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-muted-foreground text-lg mb-8">Get in touch with us for collaborations and inquiries.</p>
        
        <div className="flex justify-center space-x-6 text-2xl mb-12">
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

        <form className="bg-card p-8 rounded-xl shadow-lg border border-border/50 backdrop-blur-sm w-full">
          <div className="mb-6">
            <label className="block text-left text-sm font-medium text-muted-foreground mb-2">Name</label>
            <input 
              type="text" 
              className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 outline-none" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-left text-sm font-medium text-muted-foreground mb-2">Email</label>
            <input 
              type="email" 
              className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 outline-none" 
            />
          </div>
          <div className="mb-6">
            <label className="block text-left text-sm font-medium text-muted-foreground mb-2">Message</label>
            <textarea 
              className="w-full p-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-colors duration-200 outline-none" 
              rows={4}
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
