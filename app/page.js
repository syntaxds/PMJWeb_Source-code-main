'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Deliver. Produce. Sustain.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            PT Padas Mustapa Jaya is your trusted partner in logistics, woodchip production, and sustainable biomass solutions.
          </p>
          <Link
            href="/services"
            className="inline-block border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We provide comprehensive solutions across logistics, woodchip production, and biomass industries. Our expertise ensures quality and reliability in every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="relative group overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-red-900 to-red-700 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Logistics & Shipping</h3>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-red-300 hover:text-white transition-colors"
                  >
                    Explore more <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="relative group overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-600 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Woodchip Production</h3>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    Explore more <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="relative group overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-red-700 to-black flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Biomass Solutions</h3>
                  <Link
                    href="/services"
                    className="inline-flex items-center text-red-300 hover:text-white transition-colors"
                  >
                    Explore more <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">ABOUT US</h2>
              <p className="text-gray-600 mb-6">
                PT Padas Mustapa Jaya has been a leading force in the logistics and biomass industry for years. We specialize in efficient shipping solutions, sustainable woodchip production, and innovative biomass technologies.
              </p>
              <p className="text-gray-600 mb-8">
                Our commitment to quality, sustainability, and customer satisfaction drives everything we do. We work with clients worldwide to deliver exceptional results.
              </p>
              <Link
                href="/about"
                className="inline-block border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
              >
                ABOUT US
              </Link>
            </div>
            <div className="h-96 bg-gradient-to-br from-gray-600 to-gray-400" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your logistics and biomass needs.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-600 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            GET IN TOUCH
          </Link>
        </div>
      </section>
    </div>
  )
}