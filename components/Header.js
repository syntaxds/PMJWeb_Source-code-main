'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Search } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wider">
          PT PADAS MUSTAPA JAYA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-red-600 transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-red-600 transition-colors">
            Services
          </Link>
          <Link href="/clients" className="hover:text-red-600 transition-colors">
            Clients
          </Link>
          <Link href="/contact" className="hover:text-red-600 transition-colors">
            Contact
          </Link>
          <button className="hover:text-red-600 transition-colors">
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/services" className="hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/clients" className="hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Clients
            </Link>
            <Link href="/contact" className="hover:text-red-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}