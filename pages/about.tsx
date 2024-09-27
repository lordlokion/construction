"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  User,
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
    name: "Alice Johnson",
    role: "Founder & CEO",
    bio: "Alice has over 20 years of experience in the construction industry and leads our team with passion and expertise.",
    icon: <User className="w-8 h-8" />,
  },
  {
    name: "Bob Smith",
    role: "Lead Architect",
    bio: "Bob is known for his innovative designs and attention to detail, ensuring every project meets the highest standards.",
    icon: <User className="w-8 h-8" />,
  },
  {
    name: "Claire Davis",
    role: "Project Manager",
    bio: "Claires exceptional organizational skills and dedication ensure projects run smoothly and efficiently.",
    icon: <User className="w-8 h-8" />,
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
  { number: "500+", label: "Projects Completed" },
  { number: "50+", label: "Awards Won" },
  { number: "20+", label: "Years of Experience" },
  { number: "100%", label: "Client Satisfaction" },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => (
  <Card>
    <CardContent className="p-6 text-center">
      <div className="mb-4">
        <span className="inline-block p-3 rounded-full bg-orange-100 text-orange-500">
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
            Our Company
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

        <section className="mb-16 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                ONS: Pioneering Indias Sustainable Infrastructure Revolution
              </h2>
              <p className="text-gray-600 mb-4">
                Infrastructure is the backbone of the New India vision,
                encompassing vital projects such as roads, dams, power
                facilities, and accessible housing. At ONS, we are at the
                forefront of this transformative journey, playing a crucial role
                in laying the groundwork for future success. As a rapidly
                growing Engineering, Procurement, and Construction (EPC) firm,
                we align our efforts with the nations ambitious development
                goals.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold">
                Read More About Us
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/222.jpg"
                alt="Futuristic city illustration"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/222.jpg"
                alt="Futuristic city illustration"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">
                Inspirational Leadership
              </h2>
              <p className="text-gray-600 mb-4">
                The inspiring leadership at ONS has propelled the company to
                prominence as one of Indias leading independently owned EPC
                firms. Our success is driven by our exceptional execution
                capabilities, a proprietary fleet of advanced machinery and
                vehicles, and a dedicated workforce of over 26,000 employees.
                Leveraging cutting-edge technologies such as Drone Monitoring,
                GPS Tracking, and Safety Management Systems, ONS is committed to
                delivering projects that meet the highest standards of quality
                and efficiency.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-600 mb-4">
                From humble beginnings to becoming a leader in infrastructure
                development, the DBL journey is a testament to our commitment,
                innovation, and relentless pursuit of excellence. Discover how
                weve grown and evolved over the years, shaping Indias
                infrastructure landscape.
              </p>
              <Link href="/projects" className="text-blue-600 font-semibold">
                View Our Projects
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/222.jpg"
                alt="City and construction illustration"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            Lets bring your vision to life. Our team of experts is ready to
            help you create exceptional spaces that inspire and endure.
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
