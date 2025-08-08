// app/services/page.tsx
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
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore the services we offer to help grow your business.",
};

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

export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Our Services</h1>
      <p className="text-lg text-gray-400 mb-12 max-w-3xl">
        At Turing Research, we deliver innovative, reliable, and future-ready digital solutions 
        to help businesses thrive in a competitive world.  
        From design and development to AI-powered automation, our services are tailored to drive success.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
