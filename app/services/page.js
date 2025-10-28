'use client'

import { Ship, TreeDeciduous, Zap, ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300">Comprehensive solutions for your industrial needs</p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
          <p className="text-gray-600 text-lg">
            PT Padas Mustapa Jaya is the perfect solution to meet your logistics, woodchip production, and biomass needs. We provide end-to-end services with a commitment to quality, reliability, and sustainability.
          </p>
        </div>
      </section>

      {/* Service 1: Logistics & Shipping */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-6">
                <Ship size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-6">Logistics & Shipping</h2>
              <p className="text-gray-600 mb-4">
                Our logistics division provides comprehensive shipping solutions for bulk cargo, containerized goods, and specialized transport. We operate a modern fleet and work with trusted partners worldwide.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="text-red-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-600">International and domestic shipping services</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-red-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Real-time cargo tracking and monitoring</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-red-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Customs clearance and documentation support</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-red-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Warehousing and distribution solutions</span>
                </li>
              </ul>
            </div>
            <div className="h-96 bg-gradient-to-br from-red-900 to-red-700" />
          </div>
        </div>
      </section>

      {/* Service 2: Woodchip Production */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-gray-800 to-gray-600 order-2 md:order-1" />
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-6">
                <TreeDeciduous size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-6">Woodchip Production</h2>
              <p className="text-gray-600 mb-4">
                We operate advanced woodchip production facilities that process timber into high-quality woodchips for various industrial applications, including pulp and paper manufacturing, and biomass energy production.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="text-red-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Sustainable forestry and responsible sourcing</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-red-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Consistent quality and size specifications</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-red-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Large-scale production capacity</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-red-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Export-ready packaging and logistics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Biomass Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-6">
                <Zap size={32} />
              </div>
              <h2 className="text-4xl font-bold mb-6">Biomass Solutions</h2>
              <p className="text-gray-600 mb-4">
                Our biomass division provides sustainable energy solutions using organic materials. We supply biomass fuel products and offer consulting services for businesses transitioning to renewable energy sources.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="text-red-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Biomass pellets and briquettes production</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-red-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Renewable energy consulting services</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-red-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Carbon-neutral fuel alternatives</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="text-red-600 mt-1 mr-2 flex-shrink-0" size={20} />
                  <span className="text-gray-600">Custom biomass solutions for industries</span>
                </li>
              </ul>
            </div>
            <div className="h-96 bg-gradient-to-br from-red-700 to-black" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Interested in Our Services?</h2>
          <p className="text-xl mb-8 text-gray-300">Contact us today to discuss how we can support your business.</p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-8 py-3 font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            CONTACT US
          </a>
        </div>
      </section>
    </div>
  )
}