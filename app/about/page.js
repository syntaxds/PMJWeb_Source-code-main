'use client'

import { Ship, Trees, Leaf, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <div className="pt-[100px] md:pt-[120px]"> {/* Add top padding for navbar */}
      {/* Hero */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl"> 
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300">Let us introduce ourself</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                PT Padas Mustapa Jaya is a leading Indonesian company specializing in three core areas: logistics and shipping services, woodchip production, and biomass solutions.
              </p>
              <p className="text-gray-600 mb-4">
                Founded with a vision to provide sustainable and efficient industrial solutions, we have grown to become a trusted name in our sectors. Our commitment to excellence, innovation, and environmental responsibility sets us apart.
              </p>
              <p className="text-gray-600">
                With state-of-the-art facilities and a dedicated team of professionals, we serve clients both domestically and internationally, delivering quality products and services that exceed expectations.
              </p>
            </div>
            <div className="h-96 bg-gradient-to-br from-red-600 to-black" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="h-96 bg-gradient-to-br from-gray-700 to-gray-500 order-2 md:order-1" />
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                To deliver exceptional logistics solutions and sustainable biomass products that drive industrial progress while protecting our environment for future generations.
              </p>
              <p className="text-gray-600">
                We strive to be the preferred partner for businesses seeking reliable, efficient, and environmentally conscious solutions in shipping, woodchip production, and biomass energy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <Ship size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises with consistent quality and timely service that our clients can depend on.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <Trees size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                Environmental responsibility is at the heart of our operations, ensuring a greener future.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our processes and adopt new technologies to serve you better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Meet the dedicated professionals behind PT Padas Mustapa Jaya's success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-full aspect-[4/5] mb-4 overflow-hidden relative">
                <Image 
                  src="/team/bod-mandiri5.jpg"
                  alt="Derryl Sipahutar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-l font-bold mb-1">Derryl Sipahutar</h3>
              <p className="text-red-600 mb-2">Commissioner</p>
              <div className="flex justify-center gap-4 mb-3">
                <a href="https://linkedin.com/in/derryl-sipahutar" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/derryl" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-full aspect-[4/5] mb-4 overflow-hidden relative">
                <Image 
                  src="/team/bod-mandiri.jpg"
                  alt="Lasmaria Sidabutar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-l font-bold mb-1">Lasmaria Sidabutar</h3>
              <p className="text-red-600 mb-2">Director</p>
              <div className="flex justify-center gap-4 mb-3">
                <a href="https://linkedin.com/in/lasmaria-sidabutar" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/riasidabutar" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-full aspect-[4/5] mb-4 overflow-hidden relative">
                <Image 
                  src="/team/bod-mandiri1.jpg" 
                  alt="J. Harimurti Priambodo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-l font-bold mb-1">J. Harimurti Priambodo</h3>
              <p className="text-red-600 mb-2">Project Manager</p>
              <div className="flex justify-center gap-4 mb-3">
                <a href="https://linkedin.com/in/harimurti" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/harimurti" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-full aspect-[4/5] mb-4 overflow-hidden relative">
                <Image 
                  src="/team/bod-mandiri2.png" 
                  alt="Dahlan Sipahutar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-l font-bold mb-1">Dahlan Sipahutar</h3>
              <p className="text-red-600 mb-2">Logistic Manager</p>
              <div className="flex justify-center gap-4 mb-3">
                <a href="https://linkedin.com/in/lasmaria-sidabutar" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/riasidabutar" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Team Member 5 */}
            <div className="text-center">
              <div className="w-full aspect-[4/5] mb-4 overflow-hidden relative">
                <Image 
                  src="/team/bod-mandiri3.jpg" 
                  alt="Mulianus"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-l font-bold mb-1">Mulianus</h3>
              <p className="text-red-600 mb-2">PR & Legal Manager</p>
              <div className="flex justify-center gap-4 mb-3">
                <a href="https://linkedin.com/in/lasmaria-sidabutar" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/riasidabutar" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Team Member 6 */}
            <div className="text-center">
              <div className="w-full aspect-[4/5] mb-4 overflow-hidden relative">
                <Image 
                  src="/team/bod-mandiri4.jpg" 
                  alt="Name Placeholder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-l font-bold mb-1">Name Placeholder</h3>
              <p className="text-red-600 mb-2">Mill Manager</p>
              <div className="flex justify-center gap-4 mb-3">
                <a href="https://linkedin.com/in/lasmaria-sidabutar" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/riasidabutar" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-600 hover:text-red-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}