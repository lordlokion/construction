'use client'

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
  name: string;
  text: string;
  photo?: string; // Optional client photo URL
}

interface TestimonialCardProps extends Testimonial {
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, photo, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div 
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {photo && (
        <Image 
          src={photo} 
          alt={name} 
          className="w-16 h-16 rounded-full mb-4 object-cover" 
          width={500}
          height={500}
        />
      )}
      <p className="text-gray-600 mb-4">{text}</p>
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
    </motion.div>
  );
};

const ClientTestimonials: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials: Testimonial[] = [
    {
      name: "John Doe",
      text: "Amazing service! Highly recommend for anyone looking for reliable and professional work.",
      photo: "/1.jpg" // Placeholder image URL
    },
    {
      name: "Jane Smith",
      text: "The team exceeded my expectations. The attention to detail and customer care was exceptional.",
      photo: "/1.jpg" // Placeholder image URL
    },
    {
      name: "Alice Johnson",
      text: "Fantastic experience from start to finish. The quality of work was top-notch and the process was seamless.",
      photo: "/1.jpg" // Placeholder image URL
    }
  ];

  return (
    <section ref={ref} className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
