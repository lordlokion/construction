'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"

const galleryImages = [
  "/img1.jpeg",
  "/img2.jpeg",
  "/img3.jpeg",
  "/img4.jpeg",
  "/img5.jpeg",
  "/img6.jpeg",
  "/img7.jpeg",
  "/img9.jpeg",
  "/img10.jpeg",
]

const officeImages = [
  "/office/office1.jpg",
  "/office/office2.jpg",
  "/office/office3.jpg",
  "/office/office4.jpg",
  "/office/office5.jpg",
]

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <header className="relative text-white py-20">
        <div
          className="absolute inset-0 bg-black opacity-30"
          style={{
            backgroundImage: "url(/222.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />
        <div className="absolute inset-0 bg-black opacity-100" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
            Our Gallery
          </h1>
          <p className="text-center">
            <span className="text-gray-400">Home</span>{" "}
            <span className="text-orange-500">/ Gallery</span>
          </p>
        </div>
      </header>
      <div className="max-w-7xl mx-auto mt-16 p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Project Gallery</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {galleryImages.map((src, index) => (
            <Link href={`/gallery/${index}`} key={index}>
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={src}
                  width={500}
                  height={500}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Office Gallery</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {officeImages.map((src, index) => (
            <Link href={`/office/${index}`} key={index}>
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={src}
                  width={500}
                  height={500}
                  alt={`Office Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default GalleryPage