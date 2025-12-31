"use client";

import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck, Globe, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-green-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-900/30 skew-x-12 translate-x-1/4" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl lg:text-8xl font-black mb-8 tracking-tighter"
            >
              Let's <span className="text-green-400 italic">Connect</span>
            </motion.h1>
            <p className="text-xl text-green-100/80 leading-relaxed max-w-xl">
              Visit our landmark nursery in Kadiyam or reach out to us for orders, 
              landscaping consultations, and expert horticultural advice.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Details */}
            <div className="space-y-16">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-green-950">Reach Us Directly</h2>
                <p className="text-lg text-green-800/70">
                  Located in the heart of Andhra Pradesh's green belt, we are 
                  easily accessible via the NH-5 road in Kadiyapulanka.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-green-50 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-green-950 text-xl">Phone</h4>
                  <p className="text-green-800/70 leading-relaxed">
                    +91 94403 18376<br />
                    +91 94403 18374<br />
                    +91 94403 18375
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="h-14 w-14 rounded-2xl bg-green-50 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-green-950 text-xl">Email</h4>
                  <p className="text-green-800/70 break-all leading-relaxed">
                    srisatyanarayananurserygardens@gmail.com
                  </p>
                </div>

                <div className="space-y-4 lg:col-span-2">
                  <div className="h-14 w-14 rounded-2xl bg-green-50 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-green-950 text-xl">Headquarters</h4>
                  <p className="text-green-800/70 leading-relaxed max-w-md">
                    Sri Satyanarayana Nursery Gardens, Palla Venkanna, Kadiyapulanka 533 126. 
                    (Near) Kadiyam Dosalamma Temple, Veeravaram Road, E. G. Dist., (A.P.)
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 text-green-600 font-bold hover:underline">
                    <Navigation className="h-4 w-4" />
                    Get Directions on Maps
                  </a>
                </div>
              </div>

              {/* Warning/Authenticity Card */}
              <div className="p-10 rounded-[40px] bg-orange-50 border-2 border-orange-100 relative overflow-hidden group">
                <ShieldCheck className="absolute -top-10 -right-10 h-40 w-40 text-orange-200/50 rotate-12" />
                <div className="relative z-10">
                  <h4 className="text-orange-950 font-bold text-2xl mb-4 flex items-center gap-3">
                    <Clock className="h-6 w-6" />
                    Authenticity Notice
                  </h4>
                  <p className="text-orange-900/80 text-lg leading-relaxed mb-6">
                    We do not have any branches and no intermediaries are appointed to act as agents. 
                    Please contact us directly at our main office to ensure authentic transactions.
                  </p>
                  <div className="inline-block px-4 py-2 bg-orange-200 text-orange-900 rounded-full text-sm font-bold uppercase tracking-widest">
                    Protect Your Purchase
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-green-600 rounded-[60px] blur-3xl opacity-5 -rotate-6 scale-105" />
              <div className="bg-white p-12 lg:p-16 rounded-[60px] border border-green-100 shadow-2xl relative z-10">
                <div className="mb-12">
                  <h3 className="text-3xl font-bold text-green-950 mb-4">Send an Inquiry</h3>
                  <div className="h-1.5 w-20 bg-green-600 rounded-full" />
                </div>
                
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-green-950 uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" className="w-full bg-green-50/50 border-2 border-transparent rounded-2xl py-5 px-8 focus:border-green-600 focus:bg-white outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-green-950 uppercase tracking-widest ml-1">Phone Number</label>
                      <input type="tel" className="w-full bg-green-50/50 border-2 border-transparent rounded-2xl py-5 px-8 focus:border-green-600 focus:bg-white outline-none transition-all" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-green-950 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" className="w-full bg-green-50/50 border-2 border-transparent rounded-2xl py-5 px-8 focus:border-green-600 focus:bg-white outline-none transition-all" placeholder="name@email.com" />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-green-950 uppercase tracking-widest ml-1">Message</label>
                    <textarea rows={5} className="w-full bg-green-50/50 border-2 border-transparent rounded-2xl py-5 px-8 focus:border-green-600 focus:bg-white outline-none transition-all resize-none" placeholder="I'm interested in..."></textarea>
                  </div>

                  <button className="w-full bg-green-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-green-700 transition-all shadow-2xl shadow-green-200 flex items-center justify-center gap-4 group">
                    <MessageSquare className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
