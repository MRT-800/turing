import Image from "next/image"
import Link from "next/link"
import { Clock, Brain, Shield, Award, Users, Globe } from "lucide-react"

export default function AboutPage() {

  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-400" />,
      title: "Excellence",
      description: "We pursue excellence in everything we do, from research methodologies to product development.",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-400" />,
      title: "Collaboration",
      description: "We believe in the power of collaboration across disciplines, institutions, and borders.",
    },
    {
      icon: <Globe className="h-8 w-8 text-green-400" />,
      title: "Impact",
      description: "We measure our success by the positive impact our work has on science, society, and the planet.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Innovating the Future of
          <br />
          Research & Development
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">New quantum computing model speeds up simulations.</p>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-400 mb-6">
            At Turing R&D, we're on a mission to accelerate scientific discovery and technological innovation through
            cutting-edge research and development. We believe that by combining quantum computing, artificial
            intelligence, and blockchain technology, we can solve some of the world's most complex problems.
          </p>
          <p className="text-gray-400">
            Our interdisciplinary team of scientists, engineers, and product developers work together to create tools
            and solutions that empower researchers and organizations to push the boundaries of what's possible.
          </p>
        </div>
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
          <p className="text-gray-400 mb-6">
            We envision a future where scientific research is accelerated by orders of magnitude, where discoveries that
            once took decades can be made in months or even weeks.
          </p>
          <p className="text-gray-400">
            By democratizing access to advanced research tools and methodologies, we aim to create a more collaborative,
            transparent, and efficient global research ecosystem that addresses humanity's greatest challenges.
          </p>
        </div>
      </div>

      {/* Research Areas */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Research Focus</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-colors">
            <div className="flex items-center mb-4">
              <Clock className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Live Research Updates</h3>
            </div>
            <p className="text-gray-400">
              Stay up to date with cutting-edge discoveries in real time. Our platform continuously monitors and
              analyzes research publications, preprints, and conference proceedings to deliver the most relevant updates
              to your field.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-colors">
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold text-white">AI-Powered Insights</h3>
            </div>
            <p className="text-gray-400">
              Personalized research recommendations using machine learning. Our AI systems analyze your research
              interests, methodologies, and previous work to suggest relevant papers, potential collaborators, and new
              research directions.
            </p>
          </div>

          <div className="bg-gray-900 rounded-lg p-8 hover:bg-gray-800 transition-colors">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-green-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Blockchain Security</h3>
            </div>
            <p className="text-gray-400">
              Ensuring research integrity with decentralized verification. Our blockchain solutions create immutable
              records of research data, methodologies, and results, addressing the reproducibility crisis and building
              trust in scientific findings.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-4">Our Values</h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12">
          The principles that guide our work and culture
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Join Us in Shaping the Future</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Whether you're looking to collaborate on research, explore our products, or join our team, we'd love to hear
          from you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
