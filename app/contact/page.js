'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'
import dynamic from 'next/dynamic';
const MapSection = dynamic(() => import('../../components/MapSection'), { ssr: false });

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="pt-[100px] md:pt-[120px]">
      {/* Hero */}
      <section className="bg-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-4xl"> 
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="lg:sticky lg:top-[140px] lg:self-start">
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have questions about our services? Want to discuss a project? We'd love to hear from you. Reach out to us using the contact information below or fill out the form.
              </p>

              <div className="space-y-4">
                <div className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">Jakarta, Indonesia</p>
                    <p className="text-gray-600">Jl. Example Street No. 123</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">+62 21 1234 5678</p>
                    <p className="text-gray-600">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@padasmustapa.co.id</p>
                    <p className="text-gray-600">sales@padasmustapa.co.id</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-br from-red-50 to-gray-50 rounded-xl border border-red-100">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-lg flex items-center justify-center mr-3">
                    <Clock size={20} />
                  </div>
                  <h3 className="font-bold text-lg">Business Hours</h3>
                </div>
                <div className="ml-13 space-y-1">
                  <p className="text-gray-700 font-medium">Monday - Friday: <span className="text-gray-600 font-normal">9:00 AM - 5:00 PM</span></p>
                  <p className="text-gray-700 font-medium">Saturday & Sunday: <span className="text-gray-600 font-normal">10:00 AM - 3:00 PM</span></p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="company">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="service">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="logistics">Logistics & Shipping</option>
                    <option value="woodchip">Woodchip Production</option>
                    <option value="biomass">Biomass Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-red-600 text-white py-3 px-6 font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  <Send size={20} className="mr-2" />
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">How to Find Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Head Office Map */}
            <div>
              <h3 className="text-center text-xl font-bold mb-3 text-gray-900">Head Office - Bekasi</h3>
              <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg bg-white">
                <MapSection />
              </div>
            </div>
            
            {/* Site Office Map */}
            <div>
              <h3 className="text-center text-xl font-bold mb-3 text-gray-900">Site Office - Pontianak</h3>
              <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg bg-white">
                <MapSection />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}