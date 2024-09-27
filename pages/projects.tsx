'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Image from 'next/image'

interface Project {
  title: string;
  description: string;
  date: string;
  client: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Urban Loft Renovation',
    description: 'A contemporary renovation project that transformed a dated loft into a modern urban retreat.',
    date: 'March 2024',
    client: 'Sarah Lee',
    image: '/3.jpg'
  },
  {
    title: 'Greenfield Housing Development',
    description: 'A large-scale housing project featuring eco-friendly designs and sustainable materials.',
    date: 'July 2023',
    client: 'Greenfield Ltd.',
    image: '/22.jpg'
  },
  {
    title: 'Downtown Office Building',
    description: 'A sleek and functional office building designed to meet the needs of modern businesses.',
    date: 'November 2022',
    client: 'TechCorp Inc.',
    image: '/1.jpg'
  }
]

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
    <Image src={project.image} alt={project.title} width={500} height={500} className="w-full h-40 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" /> {project.date}
        </span>
        <span className="flex items-center gap-1">
          <User className="w-4 h-4" /> {project.client}
        </span>
      </div>
    </div>
  </motion.div>
)

export default function ProjectsPage() {
  return (
    <div className="bg-gray-100">
      <Header />
      <header className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Our Projects</h1>
          <p className="text-center">
            <span className="text-gray-400">Home</span>{' '}
            <span className="text-orange-500">/ Projects</span>
          </p>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}