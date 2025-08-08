import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function ProductPage() {
  const products = [
    {
      id: "oogway",
      title: "Oogway Consultation",
      description:
        "Our expert consultation service provides tailored guidance for your research and development needs. Our team of experienced consultants works closely with you to understand your unique challenges and develop customized solutions that drive innovation and growth.",
        image: "/images/rd.png",
      link: "/product/oogway",
    },
    {
      id: "zooming",
      title: "Zooming",
      description:
        "Our advanced video conferencing platform designed specifically for research collaboration. Connect with colleagues and partners around the world with crystal-clear audio and video, share research findings in real-time, and collaborate on projects seamlessly.",
      image: "/images/rd.png",
      link: "/product/zooming",
    },
    {
      id: "data-analytics",
      title: "Data Analytics Suite",
      description:
        "Powerful data analytics tools designed for research professionals. Our suite includes advanced statistical analysis, machine learning capabilities, and interactive visualization tools to help you extract meaningful insights from complex research data.",
        image: "/images/rd.png",
      link: "/product/zooming",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Our Products</h1>

      <div className="space-y-24">
        {products.map((product, index) => (
          <div key={product.id} id={product.id} className="grid md:grid-cols-2 gap-12 items-center">
            {index % 2 === 0 ? (
              // Even index (0, 2, 4...) - Image on left, text on right
              <>
                <div className="bg-gray-900 rounded-lg p-6 order-1 md:order-1">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={500}
                    height={300}
                    className="rounded-lg w-full"
                  />
                </div>
                <div className="order-2 md:order-2">
                  <h2 className="text-3xl font-bold mb-6">{product.title}</h2>
                  <p className="text-gray-400 mb-8">{product.description}</p>
                  <Link
                    href={product.link}
                    className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </>
            ) : (
              // Odd index (1, 3, 5...) - Text on left, image on right
              <>
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold mb-6">{product.title}</h2>
                  <p className="text-gray-400 mb-8">{product.description}</p>
                  <Link
                    href={product.link}
                    className="inline-flex items-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 order-1 md:order-2">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={500}
                    height={300}
                    className="rounded-lg w-full"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
