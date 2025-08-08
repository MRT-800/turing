import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

export default function ZoomingPage() {
  const features = [
    "High-definition video and audio",
    "Real-time document collaboration",
    "Secure, encrypted communications",
    "Recording and transcription capabilities",
    "Integration with research tools",
  ]

  const useCases = [
    "Remote research team collaboration",
    "Virtual conferences and presentations",
    "Client consultations and demonstrations",
    "Training and educational sessions",
    "Global partner meetings",
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/product" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6">Zooming</h1>
          <p className="text-gray-400 mb-8">
            Our advanced video conferencing platform designed specifically for research collaboration. Connect with
            colleagues and partners around the world with crystal-clear audio and video, share research findings in
            real-time, and collaborate on projects seamlessly.
          </p>
        </div>
        <div className="bg-gray-900 rounded-lg p-6">
          <Image
            src="/images/rd.png"
            alt="Zooming"
            width={500}
            height={300}
            className="rounded-lg w-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-16 mb-16">
        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Key Features</h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Use Cases</h2>
          <ul className="space-y-4">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-purple-500 mr-3 mt-0.5" />
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Contact us today to schedule your initial consultation and discover how our expertise can help accelerate your
          research and development initiatives.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          Contact Us
        </Link>
      </div>
    </div>
  )
}
