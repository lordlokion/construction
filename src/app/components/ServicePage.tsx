"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Building2, PaintBucket, Hammer, Ruler, Truck, HardHat, Check, LucideIcon } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const iconComponents: { [key: string]: LucideIcon } = {
  Building2,
  PaintBucket,
  Hammer,
  Ruler,
  Truck,
  HardHat
}

interface Service {
  id: string;
  iconName: keyof typeof iconComponents;
  title: string;
  description: string;
  whyChoose: string[];
  process: string[];
  features: string[];
}

const ServicePage: React.FC<{ service: Service }> = ({ service }) => {
  const IconComponent = iconComponents[service.iconName]

  return (
    <div className="min-h-screen text-white">
      <header className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-4 text-orange-500"
          >
            {service.title}
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-white mx-auto"
          ></motion.div>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <Link href="/services" className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors mb-8">
          <ArrowLeft className="mr-2" /> Back to Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-2 bg-white-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800">{service.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 mb-8">{service.description}</p>
              
              <div className="space-y-8">
                <section>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Our Service</h3>
                  <ul className="space-y-2">
                    {service.whyChoose.map((item: string, index: number) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start"
                      >
                        <Check className="w-5 h-5 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-800">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </section>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-white-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-gray-800">Our Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {service.process.map((step: string, index: number) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <Badge variant="outline" className="mr-2 bg-orange-500 text-white border-none">
                        {index + 1}
                      </Badge>
                      <span className="text-gray-800">{step}</span>
                    </motion.li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            <Card className="bg-gray-100 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-orange-500">Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-1 gap-4">
                  {service.features.map((feature: string, index: number) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <div className="p-1 bg-orange-500 rounded-full mr-2 flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-800">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Get Started with {service.title}
          </Button>
        </div>
      </main>
    </div>
  )
}

export default ServicePage