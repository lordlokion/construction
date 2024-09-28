"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
  "/22.jpg",
  "/img1.jpeg",
  "/222.jpg",
  "/img2.jpeg",
  "/1.jpg",
  "/img5.jpeg",
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 md:py-48 mb-12 overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Construction Image ${index + 1}`}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentIndex ? 1 : 0 }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

      {/* Company Details */}
      <div className="absolute  top-4 left-4 z-20 text-white bg-gray-800 bg-opacity-70 p-4 rounded-md hidden lg:block">
        <h2 className="text-lg font-bold">Company Address:</h2>
        <p className="text-sm">
          Opposite SBI ATM, Ranchi Khunti Road
          <br />
          Hatia Bazar, Ranchi, 834003
        </p>
        <p className="text-sm">Contact: (000) 000-0000</p>
      </div>

      <div className="container mx-auto px-4 relative z-20 flex justify-center items-center h-full">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Construction Services With Om Namo Siwai
          </motion.h1>
          <motion.p
            className="text-xl mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Discover top-tier construction services with OM NAMO SIWAI.
            <br /> From concept to completion, we turn your vision into reality
            with expertise and dedication.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link href="/services">
              <motion.button
                className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                className="bg-white text-gray-800 px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-100 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
