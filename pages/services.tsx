import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Building2, PaintBucket, Hammer, Ruler, Truck, HardHat, Users, Shield, HeartHandshake } from 'lucide-react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 'architectural-design',
    icon: <Building2 />,
    title: 'Architectural Design',
    description: 'Expert architectural solutions tailored to your vision and needs.'
  },
  {
    id: 'construction-management',
    icon: <Truck />,
    title: 'Construction & Management',
    description: 'Efficient project management and high-quality construction services.'
  },
  {
    id: 'sustainable-solutions',
    icon: <PaintBucket />,
    title: 'Sustainable Solutions',
    description: 'Eco-friendly construction practices for a greener future.'
  },
  {
    id: 'renovation-remodeling',
    icon: <Hammer />,
    title: 'Renovation & Remodeling',
    description: 'Transform your existing space with our expert renovation services.'
  },
  {
    id: 'interior-design',
    icon: <Ruler />,
    title: 'Interior Style Design',
    description: 'Create stunning interiors that reflect your personal style.'
  },
  {
    id: 'exterior-design',
    icon: <HardHat />,
    title: 'Exterior Style Design',
    description: 'Enhance your property\'s curb appeal with our design expertise.'
  }
]

const whyChooseUs: Feature[] = [
  {
    icon: <Users />,
    title: 'Expertise and Experience',
    description: 'Years of industry experience bringing unmatched expertise to every project.'
  },
  {
    icon: <Shield />,
    title: 'Commitment to Quality',
    description: 'Dedicated to delivering the highest quality in all our construction projects.'
  },
  {
    icon: <HeartHandshake />,
    title: 'Customer Approach',
    description: 'Client-centric approach ensuring your satisfaction throughout the process.'
  }
]

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
  >
    <div className="p-6">
      <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
        {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6 text-orange-500" })}
      </div>
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <Link href={`/services/${service.id}`} className="text-orange-500 hover:underline">
        Learn More
      </Link>
    </div>
  </motion.div>
)

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800 rounded-lg p-6 text-white"
  >
    <div className="flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
      {React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8 text-white" })}
    </div>
    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
    <p className="text-gray-400">{feature.description}</p>
  </motion.div>
)

export default function ServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <header className="bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Our Services</h1>
          <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        <section className="bg-gray-800 text-white py-16 px-4 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-2">Why Choose Om Namo Siwai</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-8"></div>
          <p className="text-center text-gray-400 mb-12">
            When you choose Om Namo Siwai, youre choosing a partner you can trust
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}