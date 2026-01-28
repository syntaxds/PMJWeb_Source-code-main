'use client'

import { Ship, Trees, Leaf, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'
import AboutCarousel from '../../components/AboutCarousel'

export default function About() {
  return (
    <div className="pt-[100px] md:pt-[120px]">
      {/* Hero */}
      <section
        className="relative text-white py-16 md:py-24 bg-[url('/materi/hero-bg.jpg')] bg-cover bg-center"
        style={{ backgroundImage: "url('/materi/PMJ-AREA-84.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center max-w-4xl"> 
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Company</h1>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4b">
          {/* Who We Are */}
          <div className="mb-20">
            <div className="flex flex-col items-center">
              <AboutCarousel />
            </div>

            <div className="w-full max-w-5xl mx-auto">
              <p className="text-gray-600 mb-4 text-center">
                At PT Padas Mustapa Jaya, we move industries forward.
We are a trusted partner in logistics, heavy equipment rental, and harvesting services,
delivering efficient, reliable, and safe solutions for every project. With a team of experienced professionals and a commitment to excellence, we ensure that
every operation runs seamlessly from the ground up to the finish line.
              </p>
            </div>
          </div>

          {/* Vision & Mission - Combined Card Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mb-20">
            {/* Vision Card */}
            <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col justify-center h-full">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-red-600 text-white rounded-full mr-4">
                  <Leaf size={28} />
                </span>
                <h2 className="text-3xl font-bold">Vision</h2>
              </div>
              <p className="text-gray-700 text-lg">
                To become a leading and trusted partner in Indonesia's logistics and heavy equipment
industry, recognized for our reliability, innovation, and service excellence.

              </p>
            </div>
            {/* Mission Card */}
            <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col justify-center h-full">
              <div className="flex items-center mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-black text-white rounded-full mr-4">
                  <Ship size={28} />
                </span>
                <h2 className="text-3xl font-bold">Mission</h2>
              </div>
              <ul className="space-y-3 text-gray-700 text-lg list-disc list-inside">
                <li>To deliver high-quality, efficient, and safe operational solutions.</li>
                <li>To build lasting partnerships through trust and consistent performance.</li>
                <li>To enhance productivity with modern technology and skilled expertise.</li>
                <li>To uphold integrity and professionalism in every aspect of our business.</li>
              </ul>
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
              <h3 className="text-2xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and accountability in every project.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <Ship size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reliability</h3>
              <p className="text-gray-600">
                 Clients can trust us to deliver services on time and meet expectations consistently.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <Trees size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We pursue high standards in operations, equipment, and personnel.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We embrace technology and modern practices to improve efficiency and performance.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Safety</h3>
              <p className="text-gray-600">
                Protecting our team, clients, and equipment is our top priority.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <Leaf size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Our clients needs guide our decisions and actions in every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="blur-sm">
          <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">The Team</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Meet the dedicated professionals behind PT Padas Mustapa Jaya's success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-full aspect-[4/5] mb-4 overflow-hidden relative">
                <Image 
                  src="/team/Derryl-Sipahutar.png"
                  alt="Lasmaria Sidabutar"
                  fill
                  className="object-cover blur-sm"
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
                  src="/team/Derryl-Sipahutar.png" 
                  alt="J. Harimurti Priambodo"
                  fill
                  className="object-cover blur-sm"
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
                  src="/team/Derryl-Sipahutar.png" 
                  alt="Dahlan Sipahutar"
                  fill
                  className="object-cover blur-sm"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-l font-bold mb-1">Dahlan Sipahutar</h3>
              <p className="text-red-600 mb-2">Transport & HED Managaer</p>
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
                  src="/team/Derryl-Sipahutar.png" 
                  alt="Mulianus"
                  fill
                  className="object-cover blur-sm"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-l font-bold mb-1">Darwin Pasaribu</h3>
              <p className="text-red-600 mb-2">Wood Supply Manager</p>
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
                  src="/team/Derryl-Sipahutar.png" 
                  alt="Name Placeholder"
                  fill
                  className="object-cover blur-sm"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-l font-bold mb-1">M. Mulianus</h3>
              <p className="text-red-600 mb-2">PR & Legal Compliance Manager</p>
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
            {/* Team Member 7 */}
            <div className="text-center">
              <div className="w-full aspect-[4/5] mb-4 overflow-hidden relative">
                <Image 
                  src="/team/Derryl-Sipahutar.png" 
                  alt="Name Placeholder"
                  fill
                  className="object-cover blur-sm"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-l font-bold mb-1">LS</h3>
              <p className="text-red-600 mb-2">HR & GA Manager</p>
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
            {/* Team Member 8 */}
            <div className="text-center">
              <div className="w-full aspect-[4/5] mb-4 overflow-hidden relative">
                <Image 
                  src="/team/Derryl-Sipahutar.png" 
                  alt="Name Placeholder"
                  fill
                  className="object-cover blur-sm"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-l font-bold mb-1">LS</h3>
              <p className="text-red-600 mb-2">FAT Manager</p>
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
                  src="/team/Derryl-Sipahutar.png" 
                  alt="Name Placeholder"
                  fill
                  className="object-cover blur-sm"
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
        </div>
      </section>
    </div>
  )
}