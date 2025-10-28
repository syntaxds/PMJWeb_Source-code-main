'use client'

import { Search } from 'lucide-react'

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
              <p>Jakarta, Indonesia</p>
              <p className="mt-4 font-semibold">Hours</p>
              <p>Monday-Friday: 9:00AM-5:00PM</p>
              <p>Saturday & Sunday: 10:00AM-3:00PM</p>
            </div>
          </div>

          {/* About This Site */}
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT THIS SITE</h3>
            <p className="text-gray-300">
              This site is a great place to introduce yourself and your site, or include some credits.
            </p>
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