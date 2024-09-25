"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Footer: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer ref={ref} className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Stay Connected</h2>
          <p className="text-lg mb-4">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
        </motion.div>
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.5 }}
        >
          <form
            className="flex flex-col md:flex-row items-center"
            action="/subscribe"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full md:w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4 md:mb-0 md:mr-4"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="text-gray-400 mb-4">
            <p>
              &copy; {new Date().getFullYear()} Om Namo Siwai. All rights
              reserved.
            </p>
            <p>
              Opposite Sbi ATM, Ranchi Khunti Road, Hatia Bazar, Ranchi, 834003
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8l6 6V4a2 2 0 00-2-2z"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.52 1.56-1.34 1.88-2.32-.83.49-1.75.84-2.73 1.03-.78-.83-1.89-1.35-3.12-1.35-2.36 0-4.27 1.91-4.27 4.27 0 .34.03.67.1.98-3.55-.18-6.71-1.88-8.81-4.48-.37.63-.58 1.36-.58 2.14 0 1.48.76 2.79 1.91 3.56-.71-.02-1.38-.22-1.97-.56v.06c0 2.06 1.46 3.77 3.4 4.17-.35.1-.72.15-1.1.15-.27 0-.53-.03-.79-.07.53 1.67 2.07 2.89 3.89 2.92-1.42 1.11-3.21 1.78-5.14 1.78-.33 0-.66-.02-.99-.06 1.82 1.17 3.97 1.85 6.29 1.85 7.55 0 11.69-6.27 11.69-11.69 0-.18-.01-.36-.02-.53.8-.57 1.49-1.27 2.04-2.07z"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zm0 0v8m-8-4h8"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
