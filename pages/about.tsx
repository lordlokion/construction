"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Globe,
  MapPin,
  Briefcase,
  Users,
  Zap,
  Info,
  Eye,
  Target,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  icon: React.ReactNode;
}

interface CompanyValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Achievement {
  number: string;
  label: string;
}

interface FuturisticCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface CompanyValueCardProps {
  value: CompanyValue;
  index: number;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr. Seth Kumar",
    role: "Chairman & MD",
    bio: "Mr seth has over 20 years of experience in the construction industry and leads our team with passion and expertise.",
    icon: (
      <Image
        src="/MD2.png"
        alt="Mr. Seth Kumar"
        className="w-24 h-24 rounded-full"
      />
    ),
  },
  {
    name: "Mr. Gopal Singh",
    role: "General Manager",
    bio: "Mr Gopal is known for his innovative designs and attention to detail, ensuring every project meets the highest standards.",
    icon: (
      <Image
        src="/GM1.png"
        alt="Mr. Gopal Singh"
        className="w-24 h-24 rounded-full"
      />
    ),
  },
];

const companyValues: CompanyValue[] = [
  {
    icon: <Award className="w-12 h-12" />,
    title: "Award-Winning Excellence",
    description:
      "Our commitment to quality has earned us numerous industry awards and accolades.",
  },
  {
    icon: <Globe className="w-12 h-12" />,
    title: "Global Reach",
    description:
      "We serve clients not only locally but also on an international scale, bringing diverse perspectives to our projects.",
  },
  {
    icon: <MapPin className="w-12 h-12" />,
    title: "Community Focused",
    description:
      "We are dedicated to supporting and improving the communities we work in, making a positive impact wherever we go.",
  },
];

const achievements: Achievement[] = [
  { number: "100+", label: "Projects Completed" },
  { number: "20+", label: "Awards Won" },
  { number: "2013", label: "Years of Establishment" },
  { number: "100%", label: "Client Satisfaction" },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <Card>
    <CardContent className="p-6 text-center">
      <div className="mb-4">
        <span className="inline-block text-orange-500">
          {member.icon}
        </span>
      </div>
      <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
      <p className="text-muted-foreground mb-2">{member.role}</p>
      <p className="text-muted-foreground">{member.bio}</p>
    </CardContent>
  </Card>
);

const CompanyValueCard = ({ value }: CompanyValueCardProps) => (
  <Card className="bg-gray-800 text-primary-foreground">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-orange-500">{value.icon}</span>
      </div>
      <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
      <p className="text-primary-foreground/80">{value.description}</p>
    </CardContent>
  </Card>
);

const AchievementCard = ({ achievement }: { achievement: Achievement }) => (
  <Card>
    <CardContent className="p-6 text-center">
      <CardTitle className="text-3xl font-bold text-orange-500 mb-2">
        {achievement.number}
      </CardTitle>
      <p className="text-muted-foreground">{achievement.label}</p>
    </CardContent>
  </Card>
);

const FuturisticCard = ({
  title,
  description,
  icon,
  color,
}: FuturisticCardProps) => (
  <Card className={`overflow-hidden ${color}`}>
    <CardHeader className="pb-2">
      <div className="flex items-center justify-between">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        {icon}
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-sm">{description}</p>
    </CardContent>
  </Card>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <header className="relative text-white py-20">
        <div
          className="absolute inset-0 bg-black opacity-30"
          style={{
            backgroundImage: "url(/222.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />
        <div className="absolute inset-0 bg-black opacity-100" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-2">
            About Us{" "}
          </h1>
          <p className="text-center">
            <span className="text-gray-400">Home</span>{" "}
            <span className="text-orange-500">/ About Us</span>
          </p>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4">
        <section className="mb-16 grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FuturisticCard
              title="Who We Are"
              description="Welcome to Om Namo Siwai Constructions, where our commitment to excellence shapes every project we undertake. Founded on the principles of trust, transparency, and hard work, we are dedicated to delivering world-class infrastructure services that meet the evolving needs of society."
              icon={<Info className="w-8 h-8 text-blue-500" />}
              color="bg-gradient-to-br from-blue-500 to-blue-600 text-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FuturisticCard
              title="Our Vision"
              description="Our vision is clear: to establish ourselves as a preeminent leader in the global infrastructure industry. We strive to provide timely, flawless service that guarantees high levels of client satisfaction. Through strategic planning and effective resource management, we aim to excel in all facets of our business while fostering innovation and creativity within our organization."
              icon={<Eye className="w-8 h-8 text-purple-500" />}
              color="bg-gradient-to-br from-purple-500 to-purple-600 text-white"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FuturisticCard
              title="Our Mission"
              description="At Om Namo Siwai Constructions, our mission is to deliver impeccable service and quality work at reasonable prices. We believe in open communication, encouraging our clients to ask questions throughout the project to ensure their complete satisfaction. Our objectives include timely project completion, adherence to safety and environmental standards, and consistently exceeding client expectations."
              icon={<Target className="w-8 h-8 text-green-500" />}
              color="bg-gradient-to-br from-green-500 to-green-600 text-white"
            />
          </motion.div>
        </section>

        <section className="mb-16 max-w-6xl mx-auto bg-blue-50 p-6 rounded-md shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 border-l-4 border-blue-500 pl-4">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">
                The Leaders Behind Our Legacy
              </h2>
              <p className="text-gray-600 mb-4">
                At the heart of Om Namo Siwai Construction Company lies a
                leadership team that embodies wisdom, resilience, and
                forward-thinking strategies. Inspired by the values of
                dedication and excellence, our leadership team brings
                unparalleled vision to the world of construction. Guided by a
                commitment to strong foundational ethics and sustainable growth,
                our leaders have carved a path that blends traditional
                craftsmanship with modern engineering prowess. Their philosophy
                is simple: create infrastructure that stands the test of time
                and contributes positively to the communities we serve.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/MD1.png"
                alt="Futuristic city illustration"
                width={500}
                height={300}
                className="rounded-lg"
              />
              <div className="mt-4 p-6 bg-white rounded-md shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  Mr. Seth Kumar
                </h3>
                <p className="text-gray-700 font-medium">Chairman (MD)</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 max-w-6xl mx-auto bg-blue-50 p-6 rounded-md shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/GM1.png"
                alt="Futuristic city illustration"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
              <div className="mt-4 p-4 bg-white border-l-4 border-blue-500 rounded-md shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">
                  Mr. Gopal Singh{" "}
                </h3>
                <p className="text-gray-700">General Manager (GM)</p>
              </div>
            </div>
            <div className="md:w-1/2 pr-2 border-r-4 border-blue-500 pl-4">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">
                Inspirational Leadership
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our leadership team is driven by a profound purpose—to build
                structures that are not only functional and aesthetic but also
                resonate with the spirit of progress and development. With
                decades of experience, their ability to inspire, lead, and
                innovate has fueled the company’s growth, positioning Om Namo
                Siwai Construction Company as a respected name in the industry.
                We believe that true leadership is not just about guiding the
                team but empowering each member to excel. Every brick laid and
                every beam placed reflects our dedication to creating a legacy
                of integrity and excellence. Together, we build not just
                structures, but dreams.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 md:pb-24 max-w-6xl mx-auto bg-blue-50 p-6 rounded-md shadow-sm">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 border-l-4 border-blue-500 pl-4">
              <h2 className="text-3xl font-bold mb-4 text-blue-600">
                Our Journey
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Om Namo Siwai Construction Company began with a vision to
                transform the construction landscape with unmatched quality and
                integrity. From our humble beginnings with a dedicated team of
                experts, we have grown into a trusted name in the industry. Over
                the years, we have embraced innovation and sustainable
                practices, completing residential and commercial projects that
                reflect our commitment to excellence. Each milestone has been a
                testament to our resilience, collaborative spirit, and pursuit
                of progress. Today, we stand as builders of not just structures,
                but legacies that inspire and endure.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/img5.jpeg"
                alt="City and construction illustration"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-gray-800 text-primary-foreground">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-4">
                Our Core Values
              </h2>
              <p className="text-center text-primary-foreground/80 mb-12 max-w-3xl mx-auto">
                Our core values define who we are and guide us in every project
                we undertake.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {companyValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CompanyValueCard value={value} index={index} />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AchievementCard achievement={achievement} />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-center mb-4">
                Our Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="flex flex-col items-center text-center">
                  <Briefcase className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Project Management
                  </h3>
                  <p className="text-muted-foreground">
                    Efficient and effective management of complex construction
                    projects.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Team Collaboration
                  </h3>
                  <p className="text-muted-foreground">
                    Fostering a collaborative environment for optimal results.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Zap className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Innovative Solutions
                  </h3>
                  <p className="text-muted-foreground">
                    Implementing cutting-edge technologies and methodologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lets bring your vision to life. Our team of experts is ready to help
            you create exceptional spaces that inspire and endure.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
