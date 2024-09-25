"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Building2, PaintBucket, Hammer, Ruler, Truck, HardHat } from 'lucide-react'

const iconComponents = {
  Building2,
  PaintBucket,
  Hammer,
  Ruler,
  Truck,
  HardHat
}

const ServiceCard = ({ service }) => {
  const IconComponent = iconComponents[service.iconName]

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
    >
      <div className="p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
          <IconComponent className="w-6 h-6 text-orange-500" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <Link href={`/services/${service.id}`} className="text-orange-500 hover:underline">
          Learn More
        </Link>
      </div>
    </motion.div>
  )
}

export default ServiceCard