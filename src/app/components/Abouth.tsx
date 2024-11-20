"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Zap } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Achievement {
  number: string;
  label: string;
}

const achievements: Achievement[] = [
  { number: "100+", label: "Projects Completed" },
  { number: "20+", label: "Awards Won" },
  { number: "2013", label: "Year of Establishment" },
  { number: "100%", label: "Client Satisfaction" },
];

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

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto py-16 px-4">
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
    </div>
  );
}
