"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  date: string;
  client: string;
  image: string;
  length?: string; // Optional length field
  cost?: string; // Optional cost field
}

const ongoingProjects: Project[] = [
  {
    title: "Strengthening of Ramuna to Manjhion Road",
    description: "Improving the road infrastructure for better transportation.",
    date: "Ongoing",
    client: "Road Construction Department (RCD)",
    length: "29.3 KM",
    cost: "₹ 571,475,305.44",
    image: "/img6.jpeg",
  },
  {
    title: "322 Dwelling Units under PM Awas Yojana",
    description: "Construction of housing units to promote urban living.",
    date: "Ongoing",
    client: "National Projects Construction Corporation Limited (NPCC)",
    image: "/1.jpg",
  },

  {
    title: "Reconstruction of Fatehpur to Bongi Road",
    description: "Revamping the road for enhanced accessibility.",
    date: "Ongoing",
    client: "Road Construction Department (RCD)",
    length: "15.81 KM",
    image: "/img3.jpeg",
  },
  {
    title: "Widening & Strengthening of Mirzachowki to Boarijor Road",
    description:
      "Ongoing road construction project improving connectivity in Jharkhand.",
    date: "Ongoing",
    client: "Road Construction Department (RCD)",
    length: "16.97 KM",
    cost: "₹ 760,489,059.27",
    image: "/img1.jpeg",
  },
  {
    title: "Multipurpose Examination Hall in GLA College Daltonganj",
    description: "Construction of a hall to facilitate academic activities.",
    date: "Ongoing",
    client:
      "Jharkhand State Building Construction Corporation Limited (JSBCCL)",
    image: "/1.jpg",
  },
  {
    title: "Community Health Centre Garhwa",
    description: "Improving healthcare access through facility development.",
    date: "Ongoing",
    client:
      "Jharkhand State Building Construction Corporation Limited (JSBCCL)",
    image: "/22.jpg",
  },
];

const completedProjects: Project[] = [
  {
    title: "Widening & Strengthening of NH-100 to Nawadih Road",
    description: "Successfully completed road project enhancing connectivity.",
    date: "Completed",
    client: "Road Construction Department (RCD)",
    length: "17.60 KM",
    image: "/img4.jpeg",
  },
  {
    title: "Reconstruction Work of Tiliya -Jainagar - Bagro Road ",
    description: "Completed project improving road access and safety.",
    date: "Completed",
    client: "Road Construction Department (RCD)",
    length: "18.55 KM",
    image: "/img5.jpeg",
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white rounded-lg shadow-md overflow-hidden"
  >
    <Image
      src={project.image}
      alt={project.title}
      width={500}
      height={500}
      className="w-full h-40 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" /> {project.date}
        </span>
        <span className="flex items-center mx-4  gap-1">
          <User className="w-4 h-4" /> {project.client}
        </span>
      </div>
      {project.length && (
        <p className="text-gray-600 mt-2">Length: {project.length}</p>
      )}
      {project.cost && <p className="text-gray-600">Cost: {project.cost}</p>}
    </div>
  </motion.div>
);

export default function ProjectsPage() {
  return (
    <div className="bg-gray-100">
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
            Our Projects
          </h1>
          <p className="text-center">
            <span className="text-gray-400">Home</span>{" "}
            <span className="text-orange-500">/ Projects</span>
          </p>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        {/* Ongoing Projects Section */}
        <section className="mb-16 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ongoing Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Completed Projects Section */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 ">Completed Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
