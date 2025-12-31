"use client";

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { History, ShieldCheck, HeartPulse, Users, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6 uppercase tracking-widest">
              Est. 1953
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-green-950 mb-8 tracking-tight">
              A Legacy of <span className="text-green-600">Greenery</span>
            </h1>
            <p className="text-xl text-green-800/70 max-w-3xl mx-auto leading-relaxed">
              From a modest 50-cent plot to a national landmark, our journey is defined by passion, 
              resilience, and an unwavering commitment to nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/gallery/main-cover/1.jpg" 
                  alt="Sri Palla Venkanna" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-green-950 leading-tight">
                The Visionary Behind the Bloom: <br />
                <span className="text-green-600">Sri Palla Venkanna</span>
              </h2>
              <div className="space-y-6 text-lg text-green-800/80 leading-relaxed">
                <p>
                  Sri Satyanarayana Nursery Gardens was established in 1953 by Sri Palla Narayya. 
                  However, it was his son, <strong>Sri Palla Venkanna</strong>, who elevated 
                  the nursery to international prominence.
                </p>
                <p>
                  Despite being physically challenged, Sri Palla Venkanna refused to let 
                  limitations define him. His courage, hard work, and deep love for nature 
                  transformed our nursery into one of the largest and most diverse collections 
                  in India.
                </p>
                <div className="p-8 bg-green-50 rounded-3xl border-l-4 border-green-600 italic">
                  "Environmental protection and beauty are only possible with plants. 
                  My goal was always to make Kadiyam a global hub for greenery."
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-green-950 text-white rounded-[100px] mx-4 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2 text-green-400">70+</div>
              <div className="text-green-100/60 uppercase tracking-widest text-sm font-bold">Years Heritage</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-green-400">1000+</div>
              <div className="text-green-100/60 uppercase tracking-widest text-sm font-bold">Plant Species</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-green-400">100+</div>
              <div className="text-green-100/60 uppercase tracking-widest text-sm font-bold">Awards Won</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2 text-green-400">1M+</div>
              <div className="text-green-100/60 uppercase tracking-widest text-sm font-bold">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-green-950 mb-4">Our Core Philosophy</h2>
            <div className="h-1.5 w-24 bg-green-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-white border border-green-100 hover:shadow-2xl transition-all group">
              <div className="h-16 w-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 transition-colors">
                <ShieldCheck className="h-8 w-8 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-950 mb-4">Quality Standards</h3>
              <p className="text-green-800/70 leading-relaxed">
                Maintaining highest quality standards in every species available. We never compromise on the health and authenticity of our plants.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-white border border-green-100 hover:shadow-2xl transition-all group">
              <div className="h-16 w-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 transition-colors">
                <HeartPulse className="h-8 w-8 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-950 mb-4">Environment Protection</h3>
              <p className="text-green-800/70 leading-relaxed">
                Our success makes the world a better, healthier place to breathe. We are committed to global reforestation and ecological balance.
              </p>
            </div>

            <div className="p-10 rounded-3xl bg-white border border-green-100 hover:shadow-2xl transition-all group">
              <div className="h-16 w-16 bg-green-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 transition-colors">
                <Users className="h-8 w-8 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-green-950 mb-4">Community Service</h3>
              <p className="text-green-800/70 leading-relaxed">
                From study tours for students to government training, we believe in sharing our knowledge for the benefit of society.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
