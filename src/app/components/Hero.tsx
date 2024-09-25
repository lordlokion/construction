"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Construction Services With Om Namo Siwai
            </motion.h1>
            <motion.p
              className="text-xl mb-6 mr-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Discover top-tier construction services with OM NAMO SIWAI. From
              concept to completion, we turn your vision into reality with
              expertise and dedication.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
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
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src="/22.jpg"
              alt="Construction Site"
              className="rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
