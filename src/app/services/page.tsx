"use client";

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GraduationCap, School, Map, HeartHandshake, TreePine, Shovel, Sparkles, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Educational Training",
    description: "We are a premier destination for students and enthusiasts to learn modern horticultural practices. Our training programs are designed to inspire the next generation of botanists and nursery managers.",
    icon: GraduationCap,
    benefits: ["Nursery Management", "Plant Propagation", "Species Identification"]
  },
  {
    title: "Students' Study Tour",
    description: "Experience the ultimate practical learning session. We host schools and colleges from across India, providing guided tours of our 1000+ species and state-of-the-art greenhouse facilities.",
    icon: School,
    benefits: ["Guided Botanical Tours", "Interactive Q&A", "Practical Workshops"]
  },
  {
    title: "Govt Training Department",
    description: "Official training partner for various government departments. We provide specialized knowledge for urban forestry projects, municipal gardening, and environmental conservation initiatives.",
    icon: Map,
    benefits: ["Official Certifications", "Policy Consultation", "Project Planning"]
  },
  {
    title: "Charity & Social Service",
    description: "Rooted in our founder's philosophy, we give back through large-scale plant distributions and environmental awareness campaigns. We believe in greening every community.",
    icon: HeartHandshake,
    benefits: ["Free Plant Distributions", "Environmental Awareness", "Community Support"]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-green-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-900/50 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-8">Professional Services</h1>
            <p className="text-xl text-green-100/80 max-w-3xl mx-auto leading-relaxed">
              Sri Satyanarayana Nursery Gardens is more than just a nursery. We are a hub of 
              knowledge, community development, and professional expertise in horticulture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[50px] border border-green-100 bg-white hover:shadow-2xl hover:border-green-300 transition-all group"
              >
                <div className="flex gap-8 items-start mb-8">
                  <div className="h-20 w-20 rounded-3xl bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-600 transition-colors duration-500">
                    <service.icon className="h-10 w-10 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-green-950 mb-2">{service.title}</h3>
                    <div className="h-1 w-12 bg-green-600 rounded-full" />
                  </div>
                </div>
                
                <p className="text-lg text-green-800/70 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.benefits.map((benefit, j) => (
                    <span key={j} className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full uppercase tracking-wider">
                      {benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Projects Section */}
      <section className="py-24 bg-green-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[60px] p-12 lg:p-24 shadow-2xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold uppercase tracking-widest">
                  <Sparkles className="h-4 w-4" />
                  Custom Solutions
                </div>
                <h2 className="text-5xl font-bold text-green-950 leading-tight">
                  Landscape Design & Execution
                </h2>
                <p className="text-lg text-green-800/80 leading-relaxed">
                  From corporate office spaces to private retreats, our team provides 
                  end-to-end landscaping services. We combine aesthetic beauty with 
                  ecological sustainability to create perfect green sanctuaries.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-green-900 font-bold">
                    <Sprout className="h-5 w-5 text-green-600" />
                    Corporate Green Spaces
                  </li>
                  <li className="flex items-center gap-3 text-green-900 font-bold">
                    <Sprout className="h-5 w-5 text-green-600" />
                    Urban Terrace Gardens
                  </li>
                  <li className="flex items-center gap-3 text-green-900 font-bold">
                    <Sprout className="h-5 w-5 text-green-600" />
                    Industrial Re-greening
                  </li>
                </ul>
                <button className="px-10 py-5 bg-green-600 text-white rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-200">
                  Book a Consultation
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="/gallery/main-cover/garden2.jpg" alt="Work 1" className="rounded-3xl h-80 w-full object-cover shadow-lg hover:scale-105 transition-transform duration-500" />
                  <div className="h-32 bg-green-100 rounded-3xl" />
                </div>
                <div className="space-y-4 pt-12">
                  <div className="h-32 bg-green-600 rounded-3xl" />
                  <img src="/gallery/main-cover/office-plants2.jpg" alt="Work 2" className="rounded-3xl h-80 w-full object-cover shadow-lg hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
