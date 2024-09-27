import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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
];

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 ">
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
            Our Gallery
          </h1>
          <p className="text-center">
            <span className="text-gray-400">Home</span>{" "}
            <span className="text-orange-500">/ Gallery</span>
          </p>
        </div>
      </header>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto mt-16s p-8"
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
     
      <Footer />
    </div>
  );
};

export default GalleryPage;
