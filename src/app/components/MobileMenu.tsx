'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sm:hidden">
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <XIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <MenuIcon className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1" id="mobile-menu">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/services">Services</MobileNavLink>
          <MobileNavLink href="/projects">Projects</MobileNavLink>
          <MobileNavLink href="/about">About</MobileNavLink>
          <MobileNavLink href="/contact">Contact</MobileNavLink>
        </div>
      )}
    </div>
  )
}

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-800 hover:bg-gray-50">
    {children}
  </Link>
)

export default MobileMenu