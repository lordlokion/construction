"use client";

import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-gray-100">
      <Header />
      <header className="relative text-white py-20">
        <div
          className="absolute inset-0 bg-black opacity-30" // Black overlay with 70% opacity
          style={{
            backgroundImage: "url(/222.jpg)", // Your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1, // Keep it below the text
          }}
        />
        <div className="absolute inset-0 bg-black opacity-100" />{" "}
        {/* Black overlay */}
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
            Contact Us
          </h1>
          <p className="text-center">
            <span className="text-gray-400">Home</span>{" "}
            <span className="text-orange-500">/ Contact Us</span>
          </p>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4 max-w-7xl">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Wed love to hear from you! Whether you have a question, feedback,
              or just want to get in touch, feel free to reach out.
            </p>

            <form
              action="https://formspree.io/f/meoqzzan"
              method="POST"
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
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
                  <a href="mailto:contact@omnamosiwai.com">
                    <p className="text-gray-600">contact@omnamosiwai.com</p>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-orange-500" />
                
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <a 
          href="tel:+919835550890" 
          className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
                  <p className="text-gray-600">(+91) 98355-50890</p>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-orange-500" />
                <div>
                  <h3 className="text-xl font-semibold">Address</h3>
                  <p className="text-gray-600">
                    Opposite Sbi ATM, Ranchi Khunti Road, Hatia Bazar, Ranchi,
                    834003
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <h2 className="text-3xl font-bold text-center p-6">
                Find Us on the Map
              </h2>
              <div className="w-full h-64">
              <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3664.8350519672376!2d85.3062345!3d23.2854425!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDE3JzA3LjYiTiA4NcKwMTgnMzEuNyJF!5e0!3m2!1sen!2sin!4v1732102430252!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
          className="w-full h-full"
          aria-label="Interactive map showing our location in Ranchi, India"
        />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
