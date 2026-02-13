"use client";

import React, { Suspense } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Gallery as GalleryComponent } from "@/components/Gallery";
import { motion } from 'framer-motion';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-green-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-100/50 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl lg:text-8xl font-black text-green-950 mb-8 tracking-tighter">
              The Living <br /><span className="text-green-600">Gallery</span>
            </h1>
            <p className="text-xl text-green-800/70 max-w-3xl mx-auto leading-relaxed">
              Witness the incredible biodiversity preserved at Sri Satyanarayana Nursery Gardens.
              Our collection spans over 1000 species of rare and exotic flora.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-12">
        <Suspense fallback={<div>Loading...</div>}>
          <GalleryComponent />
        </Suspense>
      </div>

      <Footer />
    </main>
  );
}
