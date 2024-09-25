"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const AnimatedAbout: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src="/1.jpg"
              alt="About"
              className="rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h2
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Discover the Power of Excellence with us
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Welcome to Om Namo Siwai Constructions, where our commitment to
              excellence shapes every project we undertake. Founded on the
              principles of trust, transparency, and hard work, we are dedicated
              to delivering world-class infrastructure services.
            </motion.p>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                At Om Namo Siwai Constructions, our mission is to deliver
                impeccable service and quality work at reasonable prices. We
                believe in open communication, encouraging our clients to ask
                questions throughout the project to ensure their complete
                satisfaction.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-gray-600">
                Our vision is clear, to establish ourselves as a preeminent
                leader in the global infrastructure industry. We strive to
                provide timely, flawless service that guarantees high levels of
                client satisfaction. We aim to excel in all facets of our
                business while fostering innovation and creativity within our
                organization.
              </p>
            </motion.div>
            <Link href="/about">
              <motion.button
                className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                More About Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedAbout;
