
'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';

export default function Home() {
  // Demo Banner State
  const [showBanner, setShowBanner] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), 3000);
    const removeTimer = setTimeout(() => setShowBanner(false), 6000);
    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div>
      {/* Demo Banner - Remove when development is finished */}
      {showBanner && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'white',
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            fontWeight: 'bold',
            fontSize: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            transition: 'opacity 1s',
            opacity: fade ? 0 : 1,
            pointerEvents: 'none',
          }}
        >
          This is a Demo Version for PMJ Website V1.0 (syntaxds)
        </div>
      )}
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/home.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            PT PADAS MUSTAPA JAYA
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
            Your trusted partner in logistics, heavy equipment rental, and harvesting services.
With a strong commitment to quality, efficiency, and reliability, we provide integrated
solutions that support your operational and project needs.
          </p>
          <Link
            href="/about"
            className="inline-block border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition-colors duration-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]"
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
            At PT Padas Mustapa Jaya, we deliver comprehensive and professional services designed
to meet the demands of modern industries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="relative group overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-red-900 to-red-700 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Logistics Solution</h3>
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
                  <h3 className="text-2xl font-bold mb-2">Heavy Equipment Rental</h3>
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
                  <h3 className="text-2xl font-bold mb-2">Harvesting Services</h3>
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
                PT Padas Mustapa Jaya is a dynamic company specializing in logistics, heavy equipment
rental, and harvesting operations.
Established with a vision to deliver excellence and reliability, we are committed to supporting
our clients with practical solutions and exceptional service standards.
              </p>
              <p className="text-gray-600 mb-8">
                With a dedicated team of professionals, advanced equipment, and efficient operational
systems, we aim to become a leading and trusted partner in Indonesia’s logistics and heavy
equipment industry.
              </p>
              <p className="text-gray-600 mb-8">
                At PT Padas Mustapa Jaya, we don’t just provide services, we deliver solutions that drive
success.
              </p>
              <Link
                href="/about"
                className="inline-block border-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
              >
                Explore more
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