import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="SSNG Logo" className="h-12 w-auto object-contain" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-green-800 hover:text-green-600 font-medium transition-colors">Home</Link>
            
            <div className="relative group">
              <Link href="/about" className="text-green-800 hover:text-green-600 font-medium transition-colors flex items-center gap-1">
                About Us
              </Link>
            </div>

            <Link href="/services" className="text-green-800 hover:text-green-600 font-medium transition-colors">Services</Link>
            <Link href="/awards" className="text-green-800 hover:text-green-600 font-medium transition-colors">Awards</Link>
            <Link href="/gallery" className="text-green-800 hover:text-green-600 font-medium transition-colors">Gallery</Link>
            <Link href="/videos" className="text-green-800 hover:text-green-600 font-medium transition-colors">Videos</Link>
            
            <Link href="/contact" className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-all shadow-md hover:shadow-lg">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-green-800">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-green-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-green-800 font-medium">Home</Link>
            <Link href="/about" className="block px-3 py-2 text-green-800 font-medium">About Us</Link>
            <Link href="/services" className="block px-3 py-2 text-green-800 font-medium">Services</Link>
            <Link href="/awards" className="block px-3 py-2 text-green-800 font-medium">Awards</Link>
            <Link href="/gallery" className="block px-3 py-2 text-green-800 font-medium">Gallery</Link>
            <Link href="/videos" className="block px-3 py-2 text-green-800 font-medium">Videos</Link>
            <Link href="/contact" className="block px-3 py-2 text-green-600 font-bold">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

