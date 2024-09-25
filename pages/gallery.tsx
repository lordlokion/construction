import Link from "next/link";
import { motion } from "framer-motion";

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
    
    <div className="min-h-screen bg-gray-100 p-2">
        <header className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Gallery</h1>
          <p className="text-center">
            <span className="text-gray-400">Home</span>{' '}
            <span className="text-orange-500">/ Gallery</span>
          </p>
        </div>
      </header>
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
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </Link>
        ))}
      </motion.div>
      <Link href="/">
        <motion.button
          className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back to Home
        </motion.button>
      </Link>
    </div>
  );
};

export default GalleryPage;
