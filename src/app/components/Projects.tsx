"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

interface ProjectData {
  image: string;
  title: string;
  date: string;
}

interface ProjectCardProps extends ProjectData {
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  date,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      />
      <div className="p-4">
        <motion.h3
          className="text-xl font-semibold mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
        >
          {date}
          
        </motion.p>
      </div>
    </motion.div>
  );
};

const AnimatedProjects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects: ProjectData[] = [
    {
      image: "/1.jpg",
      title: "Historic Restoration",
      date: "May 15, 2024",
    },
    {
      image: "/22.jpg",
      title: "Cultural Landmark",
      date: "May 13, 2024",
    },
    {
      image: "/222.jpg",
      title: "Industrial Innovation",
      date: "May 13, 2024",
    },
  ];

  return (
    <section ref={ref} className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Explore Our Projects With Excellence
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/projects">
            <motion.button
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedProjects;
