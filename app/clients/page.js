'use client'

import { Star } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function Clients() {
  const clients = [
    { name: 'PT. Dunia Saftindo', logoSrc: '/materi/clients/dunia-saftindo.jpg' },
    { name: 'Astra Autopart', logoSrc: '/materi/clients/astra-autoparts.png' },
    { name: 'PT. PLN EPI Indonesia', logoSrc: '/materi/clients/pln-epi-indonesia.png' },
    { name: 'Taiyo Marsol Indonesia', logoSrc: '/materi/clients/marsol-indonesia.png' },
    { name: 'PT. Riau Andalan Pulp and Paper', logoSrc: '/materi/clients/rapp.png' },
    { name: 'PT. Sahid Detolin Textile', logoSrc: '/materi/clients/sahid-detolin-textile.png' },
    { name: 'PT. Karya Mandiri', logoSrc: '/materi/clients/karya-mandiri.jpg' },
    { name: 'CV. Siefa Kimindo Mandiri', logoSrc: '/materi/clients/siefa-kimindo-mandiri.jpg' },
    { name: 'PT. Wahyu Abadi', logoSrc: '/materi/clients/wahyu-abadi.jpg' },
    { name: 'PT. Aneka Tusma', logoSrc: '/materi/clients/aneka-tusma.jpg' },
    { name: 'PT. Citra Boga Pratama', logoSrc: '/materi/clients/citra-boga.png' },
    { name: 'PT. Prakarsa Etsa Utama', logoSrc: '/materi/clients/prakarsa-etsa-utama.png' },
    { name: 'PT. Guna Era Manufacture', logoSrc: '/materi/clients/gne.png' },
    { name: 'PT. Asata Utama', logoSrc: '/materi/clients/asata-utama.jpg' },
    { name: 'PT. Energi Bima Sakti', logoSrc: '/materi/clients/energi-bima-sakti.png' },
    { name: 'PT. Rabihah', logoSrc: '/materi/clients/rabihah.png' },
    { name: 'PT. Trafindo Prima Perkasa ', logoSrc: '/materi/clients/trafindo.png' },
    { name: 'Mom & Jo', logoSrc: '/materi/clients/mom&jo.png' },
    { name: 'PT. Afrantek', logoSrc: '/materi/clients/afrantek.png' },
    { name: 'PT. Tunas Ridean', logoSrc: '/materi/clients/tunas-ridean.png' },
    { name: 'PT. Lamindo Inter Multikon', logoSrc: '/materi/clients/lamindo-intermultikon.jpg' },
    { name: 'PT. Pakuan Abadi Sejahtera', logoSrc: '/materi/clients/pakuan-abadi-sejahtera.png' },
    { name: 'CV. Sindue Makmur Abadi', logoSrc: '/materi/clients/sindue-makmur-abadi.jpg' },
    { name: 'PT. MSK Engineering & Design', logoSrc: '/materi/clients/msk.png' },
    { name: 'PT. Cahaya Sejahtera Indonesia', logoSrc: '/materi/clients/cahaya-sejahtera.jpg' },
    { name: 'PT. Surya Buana Sentosa', logoSrc: '/materi/clients/surya-buana.png' },
    { name: 'Bulog', logoSrc: '/materi/clients/bulog.jpg' },
    { name: 'PT. Balikpapan Chip Lestari', logoSrc: '/materi/clients/bcl.jpg' },
    { name: 'PT. Itci Hutani Manunggal', logoSrc: '/materi/clients/itci-hutani-manunggal.png' },
    { name: 'PT. Borneo Hijau Lestari', logoSrc: '/materi/clients/borneo-hijau-lestari.png' },
    { name: 'PT. Mahakam Persada Sakti', logoSrc: '/materi/clients/mahakam-persada.png' },
    { name: 'PT. Laju Dinamika Utama', logoSrc: '/materi/clients/ldu.jpg' },
    { name: 'PT. Bumi Alam Raya', logoSrc: '/materi/clients/bumi-alam-raya.jpg' }
  ]

  const testimonials = [
    {
      company: 'Pacific Shipping Co.',
      text: 'PT Padas Mustapa Jaya has been our trusted logistics partner for over 5 years. Their reliability and professionalism are unmatched.',
      author: 'John Chen',
      position: 'Operations Director'
    },
    {
      company: 'Global Timber Industries',
      text: 'The quality of woodchips we receive is consistently excellent. Their sustainable practices align perfectly with our values.',
      author: 'Sarah Wong',
      position: 'Procurement Manager'
    },
    {
      company: 'EcoEnergy Solutions',
      text: 'Their biomass solutions helped us transition to renewable energy smoothly. Highly recommended for anyone in the industry.',
      author: 'Michael Tan',
      position: 'CEO'
    },
    {
      company: 'Asian Logistics Group',
      text: 'Outstanding service and competitive pricing. They handle our international shipments with great care and efficiency.',
      author: 'David Kim',
      position: 'Logistics Coordinator'
    },
    {
      company: 'Green Biomass Corp',
      text: 'Their expertise in biomass production is exceptional. We have seen significant cost savings since partnering with them.',
      author: 'Lisa Martinez',
      position: 'Sustainability Officer'
    },
    {
      company: 'Maritime Transport Ltd',
      text: 'Professional, reliable, and always on time. PT Padas Mustapa Jaya is our go-to partner for all shipping needs.',
      author: 'Robert Johnson',
      position: 'Fleet Manager'
    },
    {
      company: 'Timber Export Group',
      text: 'The woodchip quality is consistently high grade. Their production capacity and reliability have been crucial to our success.',
      author: 'Emma Thompson',
      position: 'Supply Chain Director'
    },
    {
      company: 'BioFuel Partners',
      text: 'Their biomass solutions are innovative and sustainable. They truly understand the renewable energy sector.',
      author: 'James Wilson',
      position: 'Technical Director'
    },
    {
      company: 'Cargo Solutions Ltd',
      text: 'Fast, efficient, and transparent communication throughout the shipping process. Highly professional team.',
      author: 'Sofia Rodriguez',
      position: 'Operations Manager'
    }
  ]

  // Infinite scroll state
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  // Testimonial rotation state - each column independent
  const [column1Index, setColumn1Index] = useState(0)
  const [column2Index, setColumn2Index] = useState(1)
  const [column3Index, setColumn3Index] = useState(2)
  
  // Blink states for each column
  const [column1Blink, setColumn1Blink] = useState(false)
  const [column2Blink, setColumn2Blink] = useState(false)
  const [column3Blink, setColumn3Blink] = useState(false)

  // Auto-scroll for client logos
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isDragging) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [isDragging])

  // Auto-rotate column 1 every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setColumn1Blink(true)
      setTimeout(() => {
        setColumn1Index((prevIndex) => (prevIndex + 3) % testimonials.length)
        setColumn1Blink(false)
      }, 300)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Auto-rotate column 2 every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setColumn2Blink(true)
      setTimeout(() => {
        setColumn2Index((prevIndex) => (prevIndex + 3) % testimonials.length)
        setColumn2Blink(false)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Auto-rotate column 3 every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setColumn3Blink(true)
      setTimeout(() => {
        setColumn3Index((prevIndex) => (prevIndex + 3) % testimonials.length)
        setColumn3Blink(false)
      }, 300)
    }, 7000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Get current 3 testimonials to display
  const testimonial1 = testimonials[column1Index % testimonials.length]
  const testimonial2 = testimonials[column2Index % testimonials.length]
  const testimonial3 = testimonials[column3Index % testimonials.length]

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  // Testimonial Card Component
  const TestimonialCard = ({ testimonial, isBlink }) => (
    <div
      className={`bg-white p-8 shadow-lg transition-all duration-300 ${
        isBlink ? 'animate-red-blink' : ''
      }`}
    >
      <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
      <div className="border-t pt-4">
        <p className="font-bold">{testimonial.author}</p>
        <p className="text-sm text-gray-500">{testimonial.position}</p>
        <p className="text-sm text-red-600 font-semibold mt-1">{testimonial.company}</p>
      </div>
    </div>
  )

  return (
    <div className="pt-[100px] md:pt-[120px]"> {/* Add top padding for navbar */}
      {/* Hero */}
      <section
        className="relative text-white py-16 md:py-24 bg-[url('/materi/hero-bg.jpg')] bg-cover bg-center"
        style={{ backgroundImage: "url('/materi/PMJ-AREA-2.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center max-w-4xl"> 
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Clients</h1>
        </div>
      </section>

      {/* Client Logos - Infinite Scroll */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Companies We Work With</h2>
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="flex overflow-x-hidden cursor-grab active:cursor-grabbing"
            style={{ userSelect: 'none' }}
          >
            {/* Duplicate clients array for infinite effect */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 mx-4 flex items-center justify-center p-8 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <div className="text-center">
                  <img
                    src={client.logoSrc}
                    alt={client.name + ' logo'}
                    className="mx-auto mb-2 h-16 w-16 object-contain bg-white rounded shadow"
                    style={{ background: '#fff' }}
                  />
                  <div className="text-xs text-gray-500">{client.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Auto-rotating with fade */}
      <section className="py-20 bg-gray-50 point">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What Our Clients Say</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Here's what our valued clients have to say about working with us.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 blur-sm" style={{userSelect: 'none'}}>
            <TestimonialCard testimonial={testimonial1} isBlink={column1Blink} />
            <TestimonialCard testimonial={testimonial2} isBlink={column2Blink} />
            <TestimonialCard testimonial={testimonial3} isBlink={column3Blink} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-red-600 text-white blur-sm" style={{userSelect: 'none'}}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl">Active Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">500+</div>
              <div className="text-xl">Shipments Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100K+</div>
              <div className="text-xl">Tons of Woodchips</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Become Our Partner</h2>
          <p className="text-xl text-gray-600 mb-8">Join our growing list of satisfied clients worldwide.</p>
          <a
            href="/contact"
            className="inline-block bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            GET STARTED
          </a>
        </div>
      </section>
    </div>
  )
}