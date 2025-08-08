'use client';

import { Facebook, Instagram, Twitter } from "lucide-react";
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

  return (
    <div className="container mx-auto px-4 pt-20 pb-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Portfolio</h1>
      <p className="text-gray-400 max-w-3xl mx-auto text-center mb-12">
        Here’s a showcase of our projects and work.
      </p>

      {/* Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <PortfolioCard
          title="Aletheia"
          description="Aletheia Counselling offers compassionate, confidential, and affordable mental health support through convenient online sessions. Whether you're facing stress, anxiety, relationship issues, or simply need someone to talk to, Aletheia is here to help. Our trained professionals are committed to guiding you toward clarity and emotional well-being—all at a reasonable price, so that quality counselling is accessible to everyone, no matter where you are."
          link="https://aletheiacounselling.com/"
          link2="https://www.facebook.com/profile.php?id=61576118828424&rdid=Pe0Ftf0rr4i0vLM4&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16Tn6WhAQu%2F#"
          link3="https://www.instagram.com/aletheiacounselling/?igsh=YnU0bnBzcmczbnZp#"
          link4="https://x.com/aletheai"
        />
        <PortfolioCard
          title="Thermotech"
          description="Thermotech provides reliable and professional installation of air conditioning and ventilation systems for both homes and commercial businesses. Whether you're upgrading your home comfort or outfitting a large office space, our experienced team ensures efficient, high-quality service tailored to your needs. With a focus on performance, energy efficiency, and long-term value, Thermotech delivers climate control solutions you can trust—on time and within budget."
          link="https://thermotech.com"
          link2="https://facebook.com/thermotech"
          link3="https://instagram.com/thermotech"
          link4="https://x.com/thermotech"
        />
        <PortfolioCard
          title="Dabn"
          description="Dabn is a trusted provider of electrical solutions, specializing in wiring, installation, and maintenance of home appliances. Our skilled technicians are dedicated to ensuring safety, efficiency, and reliability in every project. From complete electrical setups to appliance repairs, Dabn delivers quality service that keeps your home and business running smoothly—on within budget. We combine expertise with a customer-first approach to ensure every job exceeds expectations."
          link="https://dabn.com"
          link2="https://facebook.com/dabn"
          link3="https://instagram.com/dabn"
          link4="https://x.com/dabn"
        />
      </div>

      {/* Reviews Section */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          We take pride in our work and our clients love what we do. Here’s what they have to say about working with us.
        </p>

        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">
                <p className="text-gray-700 italic mb-4">“{review.text}”</p>
                <h4 className="text-gray-900 font-semibold">{review.author}</h4>
                <span className="text-gray-500 text-sm">{review.company}</span>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

// ✅ Updated PortfolioCard component
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
    <div className="p-8 border rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white">
      <h2 className="text-2xl font-semibold mb-3 text-gray-900">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 underline mb-4 block"
      >
        Learn more →
      </a>
      <div className="flex gap-4">
        {link2 && (
          <a href={link2} target="_blank" rel="noopener noreferrer">
            <Facebook className="h-5 w-5 text-blue-600 hover:text-blue-800 transition-colors" />
          </a>
        )}
        {link3 && (
          <a href={link3} target="_blank" rel="noopener noreferrer">
            <Instagram className="h-5 w-5 text-pink-500 hover:text-pink-700 transition-colors" />
          </a>
        )}
        {link4 && (
          <a href={link4} target="_blank" rel="noopener noreferrer">
            <Twitter className="h-5 w-5 text-black hover:text-gray-700 transition-colors" />
          </a>
        )}
      </div>
    </div>
  );
}

// Reviews Data
const reviews = [
  {
    text: "Working with this team was an absolute pleasure. They exceeded our expectations in every way.",
    author: "Sarah Lee",
    company: "TechNova Inc.",
  },
  {
    text: "Professional, efficient, and results-driven. Our project was delivered ahead of schedule and under budget.",
    author: "James Carter",
    company: "GreenCore Solutions",
  },
  {
    text: "The communication and quality of work were top-notch. Highly recommended!",
    author: "Amanda Rivera",
    company: "BrightPath Labs",
  },
];
