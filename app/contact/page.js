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
    message: '',
    // Honeypot fields (anti-spam)
    website: '',
    phone_number: ''
  })

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Reset status
    setStatus({ loading: true, success: false, error: null })

    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `${formData.service} - ${formData.company || 'Individual'}`,
          message: `Phone: ${formData.phone || 'Not provided'}\nCompany: ${formData.company || 'Not provided'}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`,
          // Honeypot fields
          website: formData.website,
          phone_number: formData.phone_number
        }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus({ 
          loading: false, 
          success: true, 
          error: null 
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
          website: '',
          phone_number: ''
        })

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, success: false }))
        }, 5000)

      } else {
        setStatus({ 
          loading: false, 
          success: false, 
          error: data.message || 'Failed to send message. Please try again.' 
        })
      }

    } catch (error) {
      console.error('Submit error:', error)
      setStatus({ 
        loading: false, 
        success: false, 
        error: 'Network error. Please check your connection and try again.' 
      })
    }
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
      <section
        className="relative text-white py-16 md:py-24 bg-[url('/materi/hero-bg.jpg')] bg-cover bg-center"
        style={{ backgroundImage: "url('/materi/PMJ-AREA-74.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 text-center max-w-4xl"> 
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
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
                Have questions or Want to discuss a project? Reach out to us using the contact information below or fill out the form.
              </p>

              <div className="space-y-4">
                <div className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address (HO)</h3>
                    <p className="text-gray-600">Bekasi, Jawa Barat</p>
                    <p className="text-gray-600">Grand Galaxy City Blok RSA 2 No. 19, Jakasetia Bekasi Selatan</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">+62 21 38711145</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@pmjsystem.com</p>
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
                  <p className="text-gray-700 font-medium">Saturday & Sunday: <span className="text-gray-600 font-normal">None</span></p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-sm">
              <h2 className="text-3xl font-bold mb-6">Contact Form</h2>
              
              {/* Success Message */}
              {status.success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-sm text-green-700">
                      Thank you for contacting us! We'll get back to you soon.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {status.error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="ml-3 text-sm text-red-700">{status.error}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
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
                    minLength={2}
                    maxLength={100}
                    disabled={status.loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={status.loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={status.loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={status.loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
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
                    disabled={status.loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="Placeholder">Select inquiries</option>
                    <option value="logistics">Logistics & Shipping</option>
                    <option value="woodchip">Heavy Equipment Rental</option>
                    <option value="Manufacturing">Manufacturing</option>
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
                    minLength={10}
                    maxLength={5000}
                    rows={5}
                    disabled={status.loading}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                {/* HONEYPOT FIELDS - Hidden from users, visible to bots */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                  <input
                    type="text"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full py-3 px-6 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center shadow-md transform ${
                    status.loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5'
                  }`}
                >
                  {status.loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
  <div className="container mx-auto px-4 max-w-7xl">
    <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Office Location</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Head Office Map */}
      <div>
        <h3 className="text-center text-xl font-bold mb-3 text-gray-900">Head Office - Bekasi</h3>
        <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg bg-white">
          <MapSection location="bekasi" />
        </div>
      </div>
      
      {/* Site Office Map */}
      <div>
        <h3 className="text-center text-xl font-bold mb-3 text-gray-900">Site Office - Pontianak</h3>
        <div className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg bg-white">
          <MapSection location="pontianak" />
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}