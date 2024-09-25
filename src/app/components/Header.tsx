
'use client';


import Link from 'next/link';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          OM NAMO SIWAI
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white ">
            Home
          </Link>
          <Link href="/about" className="text-white">
            About Us
          </Link>
          <Link href="/services" className="text-white">
            Services
          </Link>
          <Link href="/projects" className="text-white">
            Projects
          </Link>
       
        </nav>
        <Link href="/contact" className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md">
          Contact Us
        </Link>
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            About Us
          </Link>
          <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Services
          </Link>
          <Link href="/projects" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">
            Projects
          </Link>
          
          <Link href="/contact" className="block px-4 py-2 text-orange-500 hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
