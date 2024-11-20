'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="w-[100px] relative">
            <Image
              src="/borcelle.png"
              alt="OM NAMO SIWAI Logo"
              width={140}
              height={80}
              className="object-contain"
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6">
        
        <Link href="/" className="text-white hover:text-gray-300 transition-colors">
            Home
          </Link>
         
          <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
            Services
          </Link>
          <Link href="/projects" className="text-white hover:text-gray-300 transition-colors">
            Projects
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
            About Us
          </Link>
          <Link href="/gallery" className="text-white hover:text-gray-300 transition-colors">
            Gallery
          </Link>
          <Link href="/career" className="text-white hover:text-gray-300 transition-colors">
          Careers
          </Link>
        </nav>
        <Link href="/contact" className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors">
          Contact Us
        </Link>
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          
          <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors">
            Home
          </Link>
          <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors">
            Services
          </Link>
          <Link href="/projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors">
            Projects
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors">
            About Us
          </Link>
          
          <Link href="/gallery" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors">
            Gallery
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-orange-500 hover:bg-gray-100 transition-colors">
            Contact Us
          </Link>
          <Link href="/career" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors">
            Careers
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header