"use client";

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductCategories } from "@/components/ProductCategories";
import { motion } from 'framer-motion';
import { Search, Filter, Leaf, Flower, TreePine, Apple } from 'lucide-react';

const detailedCategories = [
  { id: 'flowering', name: 'Flowering Plants', count: '200+ Species', icon: Flower },
  { id: 'indoor', name: 'Indoor & House Plants', count: '150+ Species', icon: Leaf },
  { id: 'palm', name: 'Palm Varieties', count: '80+ Species', icon: TreePine },
  { id: 'fruit', name: 'Fruit Bearing Plants', count: '120+ Species', icon: Apple },
  { id: 'bonsai', name: 'Bonsai Collection', count: '50+ Species', icon: TreePine },
  { id: 'ornamental', name: 'Ornamental Species', count: '300+ Species', icon: Leaf },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-green-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-green-100 skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl lg:text-8xl font-black text-green-950 mb-8 tracking-tighter">
              The <span className="text-green-600">Catalog</span>
            </h1>
            <p className="text-xl text-green-800/70 leading-relaxed mb-12">
              Discover one of the most diverse plant collections in India. From rare exotics 
              to local favorites, every plant is a masterpiece of nature.
            </p>
            
            {/* Search Bar */}
            <div className="relative group max-w-xl">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-green-600 h-6 w-6 group-focus-within:scale-110 transition-transform" />
              <input 
                type="text" 
                placeholder="Search 1000+ species..."
                className="w-full bg-white border-none rounded-[30px] py-6 pl-16 pr-8 text-lg shadow-2xl shadow-green-900/5 focus:ring-4 focus:ring-green-600/10 outline-none transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-4xl font-bold text-green-950 mb-4">Browse by Category</h2>
              <p className="text-lg text-green-800/60 leading-relaxed">
                Explore our specialized sections, each maintained with the highest 
                quality standards and expert horticultural care.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-full font-bold hover:bg-green-100 transition-all">
                <Filter className="h-5 w-5" />
                All Filters
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {detailedCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-[40px] border border-green-50 bg-white hover:bg-green-50 hover:border-green-200 hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              >
                <div className="h-20 w-20 rounded-[30px] bg-green-100 flex items-center justify-center mb-8 group-hover:bg-green-600 group-hover:scale-110 transition-all duration-500">
                  <cat.icon className="h-10 w-10 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <div className="text-xs font-black text-green-600 uppercase tracking-[0.2em] mb-2">{cat.count}</div>
                <h3 className="text-3xl font-bold text-green-950 mb-4">{cat.name}</h3>
                <div className="flex items-center gap-2 text-green-900 font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Explore Now <span className="text-xl">→</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Reusing existing categories visual component */}
          <div className="bg-green-50 rounded-[80px] py-24 px-8 lg:px-16 overflow-hidden relative">
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-green-950 mb-4 tracking-tight">Featured Collections</h2>
                <p className="text-lg text-green-800/60 max-w-xl mx-auto">
                  A visual overview of our most popular plant categories.
                </p>
              </div>
              <ProductCategories />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

