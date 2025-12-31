import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-green-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="SSNG Logo" className="h-16 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-green-100/60 leading-relaxed">
              Sri Satyanarayana Nursery Gardens is dedicated to bringing nature's best to your spaces since 1953. Quality and heritage in every plant.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Quick Links</h4>
            <ul className="space-y-4 text-green-100/60">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Our Founder</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Plant Categories</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Services & Tours</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Photo Gallery</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Buying Guides</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Contact Us</h4>
            <ul className="space-y-6 text-green-100/60">
              <li className="flex gap-4">
                <MapPin className="h-6 w-6 text-green-400 shrink-0" />
                <span>Palla Venkanna, Kadiyapulanka 533126, E.G. Dist., Andhra Pradesh</span>
              </li>
              <li className="flex gap-4">
                <Phone className="h-6 w-6 text-green-400 shrink-0" />
                <span>+91 94403 18376<br />+91 94403 18374</span>
              </li>
              <li className="flex gap-4">
                <Mail className="h-6 w-6 text-green-400 shrink-0" />
                <span className="break-all">srisatyanarayananurserygardens@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8">Newsletter</h4>
            <p className="text-green-100/60 mb-6">Get updates on new species and gardening tips.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full bg-green-900 border-none rounded-2xl py-4 px-6 text-white placeholder:text-green-100/30 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-green-600 hover:bg-green-500 px-4 rounded-xl transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-green-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-green-100/40">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>© 2025 Sri Satyanarayana Nursery Gardens. All rights reserved.</p>
            <span className="hidden md:block text-green-800">|</span>
            <p>
              Designed and developed by{" "}
              <a 
                href="https://wishcoinmedia.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-400 underline decoration-green-800 underline-offset-4"
              >
                wishcoinmedia.com
              </a>
            </p>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

