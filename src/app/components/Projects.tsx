"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

interface ProjectData {
  image: string;
  title: string;
  date: string;
  description?: string; // Optional description field
  client?: string; // Optional client field
  length?: string; // Optional length field
  cost?: string; // Optional cost field
}

interface ProjectCardProps extends ProjectData {
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  date,
  description,
  client,
  length,
  cost,
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
    >
      <motion.img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
      />
      <div className="p-6">
        <motion.h3
          className="text-xl font-semibold mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          {client && (
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" /> {client}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {date}
          </span>
        </div>
        {length && <p className="text-gray-600 mt-4">Length: {length}</p>}
        {cost && <p className="text-gray-600">Cost: {cost}</p>}
      </div>
    </motion.div>
  );
};

const AnimatedProjects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects: ProjectData[] = [
    
    {
      title: "Widening of Mirzachowki to Boarijor Road",
      description:
        "Ongoing road construction project improving connectivity in Jharkhand.",
      date: "Ongoing",
      client: "Road Construction Department",
      length: "16.97 KM",
      cost: "₹ 760,489,059.27",
      image: "/img1.jpeg",
    },
    
    {
      title: "Strengthening of Ramuna to Manjhion Road",
      description: "Improving the road infrastructure for better transportation.",
      date: "Ongoing",
      client: "Road Construction Department",
      length: "29.3 KM",
      cost: "₹ 571,475,305.44",
      image: "/img6.jpeg",
    },
    {
      title: "Multipurpose Examination Hall in GLA College Daltonganj",
      description: "Construction of a hall to facilitate academic activities.",
      date: "Ongoing",
      client:
        "JSBCCL",
      image: "/1.jpg",
      length: "N/A",
      cost: "N/A",
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
