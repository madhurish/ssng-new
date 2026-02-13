"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ProductCategories } from "@/components/ProductCategories";
import { Services } from "@/components/Services";

import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-green-100 selection:text-green-900">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ProductCategories />
      </motion.div>



      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Services />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Testimonials />
      </motion.div>

      <Footer />
    </main>
  );
}

