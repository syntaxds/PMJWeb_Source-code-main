'use client'

import { Search, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Find Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">FIND US</h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-semibold">Address</p>
              <p>Bekasi, Indonesia</p>
              <p className="mt-4 font-semibold">Office Hours</p>
              <p>Monday-Friday: 9:00AM-5:00PM</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">SOCIAL MEDIA</h3>
            <div className="space-y-4 text-gray-300">
              <a
                href="https://www.instagram.com/pmj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-red-600 transition-colors"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/company/pmj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-red-600 transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Search */}
          <div>
            <h3 className="text-xl font-bold mb-4">SEARCH</h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 bg-transparent border border-gray-600 px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
              />
              <button className="bg-red-600 px-6 py-2 hover:bg-red-700 transition-colors">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>Copyright © 2025 PT Padas Mustapa Jaya</p>
        </div>
      </div>
    </footer>
  )
}