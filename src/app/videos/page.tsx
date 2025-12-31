"use client";

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PlayCircle, Youtube, Tv, Radio, MonitorPlay } from 'lucide-react';
import { motion } from 'framer-motion';

const videos = [
  { 
    title: "A Glimpse into Sri Satyanarayana Nursery Gardens", 
    duration: "5:30", 
    category: "Corporate Tour",
    description: "An aerial and walking tour of our sprawling nursery in Kadiyapulanka."
  },
  { 
    title: "Interview with Sri Palla Venkanna", 
    duration: "12:15", 
    category: "History",
    description: "The visionary founder shares the journey of building India's landmark nursery."
  },
  { 
    title: "Horticultural Best Practices", 
    duration: "8:45", 
    category: "Educational",
    description: "Learn how we maintain 1000+ species with world-class quality standards."
  },
  { 
    title: "Media Coverage: Environmental Mission", 
    duration: "15:20", 
    category: "Press",
    description: "Feature story on our contribution to environmental protection and beauty."
  }
];

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-green-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Tv className="w-full h-full scale-150 rotate-12" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl lg:text-8xl font-black mb-8 tracking-tighter">
              Video <span className="text-green-400">Library</span>
            </h1>
            <p className="text-xl text-green-100/80 max-w-3xl mx-auto leading-relaxed">
              Step inside our world through our collection of virtual tours, 
              interviews, and educational content.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {videos.map((video, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-green-100 rounded-[60px] flex items-center justify-center relative overflow-hidden mb-8 shadow-2xl group-hover:shadow-green-900/20 transition-all duration-500">
                  <div className="absolute inset-0 bg-green-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <PlayCircle className="h-24 w-24 text-green-600 group-hover:scale-110 transition-transform duration-500 relative z-10" />
                  <div className="absolute bottom-8 right-8 bg-black/60 backdrop-blur px-4 py-2 rounded-2xl text-white font-bold text-sm">
                    {video.duration}
                  </div>
                </div>
                
                <div className="px-4">
                  <div className="flex items-center gap-3 text-green-600 font-bold uppercase tracking-widest text-xs mb-4">
                    <MonitorPlay className="h-4 w-4" />
                    {video.category}
                  </div>
                  <h3 className="text-3xl font-bold text-green-950 mb-4 group-hover:text-green-700 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-lg text-green-800/70 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* YouTube CTA */}
          <div className="mt-32 bg-green-50 rounded-[80px] p-12 lg:p-24 text-center relative overflow-hidden">
            <Radio className="absolute -top-10 -left-10 h-64 w-64 text-green-100 -rotate-12" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-green-950 mb-8">Never Miss an Update</h2>
              <p className="text-xl text-green-800/70 mb-12">
                Subscribe to our official YouTube channel for weekly updates on new arrivals, 
                gardening hacks, and heritage stories from SSNG.
              </p>
              <button className="bg-[#FF0000] text-white px-12 py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-4 mx-auto hover:bg-[#CC0000] transition-all shadow-2xl shadow-red-200 group">
                <Youtube className="h-8 w-8 group-hover:scale-110 transition-transform" />
                Subscribe on YouTube
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
