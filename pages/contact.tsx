'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-gray-100">
      <Header />
      <header className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
          <p className="text-center">
            <span className="text-gray-400">Home</span>{' '}
            <span className="text-orange-500">/ Contact Us</span>
          </p>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Whether you have a question, feedback, or just want to get in touch, feel free to reach out.
            </p>
            
            <form className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Details</h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-orange-500" />
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-gray-600">contact@Om Namo Siwai.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-orange-500" />
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-gray-600">(000) 000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-orange-500" />
                <div>
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="text-gray-600">Opposite Sbi ATM, Ranchi Khunti Road, Hatia Bazar, Ranchi, 834003</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <h2 className="text-3xl font-bold text-center p-6">Find Us on the Map</h2>
              <div className="w-full h-64">
                {/* Replace with actual embed code from Google Maps or another mapping service */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.174099874048!2d-122.42180868468018!3d37.774929779759555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d1b2e3e4d%3A0x459d7d40e5f5600!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094175!5e0!3m2!1sen!2sus!4v1630636934973!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
