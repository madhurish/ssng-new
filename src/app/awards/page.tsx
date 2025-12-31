"use client";

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Award, Trophy, Medal, Star, CheckCircle, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const honors = [
  {
    title: "National Award for Nursery Excellence",
    organization: "Ministry of Social Justice & Empowerment",
    year: "2018",
    description: "Honored for maintaining world-class standards in horticulture and nursery management, recognized by the Central Government of India.",
    icon: Trophy,
    color: "bg-yellow-100 text-yellow-700"
  },
  {
    title: "State Excellence Award",
    organization: "Andhra Pradesh State Assembly",
    year: "2015",
    description: "Awarded by the Speaker of the AP Assembly for exceptional contribution to environmental protection and community greenery.",
    icon: Award,
    color: "bg-green-100 text-green-700"
  },
  {
    title: "Global Horticulture Recognition",
    organization: "International Botanical Society",
    year: "2012",
    description: "Recognized for the preservation of rare and exotic species, and innovative cultivation techniques in tropical climates.",
    icon: Medal,
    color: "bg-blue-100 text-blue-700"
  }
];

const testimonials = [
  {
    name: "K. Chiranjeevi",
    role: "Legendary Cine Hero",
    text: "Brundavanam Kannula Pandugaga undi Santhosham. This nursery is truly a temple of greenery.",
    date: "14.02.2013"
  },
  {
    name: "Dr. Vani Mohan IAS",
    role: "Collector, West Godavari",
    text: "The variety of plants is world class. The efforts of how it began from half an acre is really a great journey of hard work.",
    date: "03.10.2012"
  },
  {
    name: "Mukul Wasnik",
    role: "Ex-Central Minister",
    text: "Sri Satyanarayana Nursery Gardens is maintained keeping the highest quality standards. Your success makes the world better.",
    date: "02.07.2018"
  }
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md text-green-700 text-sm font-bold mb-8">
              <Star className="h-4 w-4 fill-green-600" />
              Accredited Excellence
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-green-950 mb-8 tracking-tighter">
              Awards & <br /><span className="text-green-600">Recognition</span>
            </h1>
            <p className="text-xl text-green-800/70 max-w-2xl mx-auto leading-relaxed">
              Our journey from a local nursery to a national landmark is paved with 
              honors from the highest authorities in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Awards Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {honors.map((honor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row gap-12 items-center p-12 lg:p-16 rounded-[60px] bg-white border border-green-50 shadow-2xl shadow-green-900/5 group hover:border-green-300 transition-all duration-500"
              >
                <div className={`h-40 w-40 rounded-[40px] ${honor.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                  <honor.icon className="h-20 w-20" />
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mb-4">
                    <span className="text-green-600 font-black text-2xl">{honor.year}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-200" />
                    <span className="text-green-800/50 font-bold uppercase tracking-widest text-sm">{honor.organization}</span>
                  </div>
                  <h3 className="text-4xl font-bold text-green-950 mb-6 group-hover:text-green-700 transition-colors">{honor.title}</h3>
                  <p className="text-xl text-green-800/70 leading-relaxed max-w-3xl">
                    {honor.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Visitors Section */}
      <section className="py-24 bg-green-950 rounded-[100px] mx-4 my-12 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="grid grid-cols-6 gap-4 p-8">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="h-32 w-32 border border-white rounded-full" />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Voices of Appreciation</h2>
            <p className="text-green-400 font-bold uppercase tracking-widest text-sm">Honored Visitors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-[40px] flex flex-col justify-between group hover:bg-white/10 transition-all"
              >
                <div>
                  <Quote className="h-12 w-12 text-green-500 mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                  <p className="text-xl text-green-50 leading-relaxed mb-10 italic">"{t.text}"</p>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{t.name}</h4>
                  <div className="text-green-400 text-sm font-medium">{t.role}</div>
                  <div className="text-green-100/30 text-xs mt-2">{t.date}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-12 border-t border-white/10 pt-12 text-white/50 text-sm font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Ex-Central Ministers
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              IAS Officers
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              State Speakers
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              International Experts
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
