"use client";

import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { HardHat, Send, Mail, Phone, MapPin, X } from "lucide-react";

const jobOpenings = [
  {
    title: "Civil Engineer",
    description:
      "Proficiency with design software, such as AutoCAD, AutoCAD Civil 3D, and MicroStation. Knowledge of road related software and good judging software.",
  },
  {
    title: "Project Manager",
    description:
      "Experienced in managing large-scale infrastructure projects, with strong leadership and communication skills.",
  },
  {
    title: "Structural Engineer",
    description:
      "Specialized in designing and analyzing structures for bridges, tunnels, and other large-scale infrastructure.",
  },
  {
    title: "General Applicant",
    description:
      "If you wish to apply for a job which is not listed above, you can apply as a general applicant.",
  },
];

export default function CareersPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");

  const handleApplyNow = (position: string) => {
    setSelectedPosition(position);
    setShowForm(true);
  };

  return (
    <div className="bg-gray-100">
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
            Join Our Team
          </h1>
          <p className="text-center">
            <span className="text-gray-400">Home</span>{" "}
            <span className="text-orange-500">/ Careers</span>
          </p>
        </div>
      </header>

      <main className="container mx-auto py-16 px-4 max-w-7xl">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            To join our team send your updated resume on <span className="text-orange-500">hr@omnamosiwai.com</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <HardHat className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <button
                  className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
                  onClick={() => handleApplyNow(job.title)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">Application Form</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="position"
                    className="block text-gray-700 mb-2"
                  >
                    Position
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select a position</option>
                    {jobOpenings.map((job, index) => (
                      <option key={index} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="cover-letter"
                    className="block text-gray-700 mb-2"
                  >
                    Cover Letter
                  </label>
                  <textarea
                    id="cover-letter"
                    name="cover-letter"
                    rows={4}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        )}

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-orange-500" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a
                  href="mailto:careers@omnamosiwai.com"
                  className="text-gray-600 hover:text-orange-500"
                >
                  hr@omnamosiwai.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-orange-500" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <a
                  href="tel:+919835550890"
                  className="text-gray-600 hover:text-orange-500"
                >
                  (+91) 98355-50890
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-orange-500" />
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p className="text-gray-600">
                  Opposite Sbi ATM, Ranchi Khunti Road, Hatia Bazar, Ranchi,
                  834003
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
