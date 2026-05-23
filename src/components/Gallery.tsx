"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2, Search, ChevronLeft, ChevronRight, Download, Copy, Check, Grid, Sparkles, Filter } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryImages } from './galleryData';

// Register GSAP ScrollTrigger plugin on client-side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const categories = [
  { id: 'all', name: 'All Plants' },
  { id: 'flowering', name: 'Flowering' },
  { id: 'indoor', name: 'Indoor' },
  { id: 'palm', name: 'Palm' },
  { id: 'bonsai', name: 'Bonsai' },
  { id: 'ornamentals', name: 'Ornamentals' },
  { id: 'avenues', name: 'Avenues' },
  { id: 'fruits', name: 'Fruits' },
];

export const Gallery = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(16);
  const [copiedFilename, setCopiedFilename] = useState<string | null>(null);

  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Update active category when URL param changes
  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  // Reset page size when category or search changes
  useEffect(() => {
    setVisibleCount(16);
  }, [activeCategory, searchQuery]);

  // Extract filename from path
  const getFileName = (src: string) => {
    return src.split('/').pop() || '';
  };

  // Prettify filename (remove extension and hyphens) for subtitles
  const getPrettyTitle = (src: string) => {
    const filename = getFileName(src);
    return filename
      .replace(/\.[^/.]+$/, "") // remove extension
      .replace(/[-_]/g, ' ')   // replace dashes/underscores
      .replace(/\s+/g, ' ')    // collapse spaces
      .trim();
  };

  // Filtered and searched list of images
  const filteredImages = useMemo(() => {
    return galleryImages.filter(img => {
      const matchesCategory = activeCategory === 'all' || img.category === activeCategory;
      const fileName = getFileName(img.src).toLowerCase();
      const title = img.title.toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      
      const matchesSearch = query === '' || 
        fileName.includes(query) || 
        title.includes(query) || 
        img.category.toLowerCase().includes(query);
        
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Paginated subset of images
  const visibleImages = useMemo(() => {
    return filteredImages.slice(0, visibleCount);
  }, [filteredImages, visibleCount]);

  // Get category item counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: galleryImages.length };
    categories.forEach(cat => {
      if (cat.id !== 'all') {
        counts[cat.id] = galleryImages.filter(img => img.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // GSAP animation on layout change / filter
  useEffect(() => {
    if (visibleImages.length > 0 && gridRef.current) {
      // Clear any pending triggers/animations
      gsap.killTweensOf(cardsRef.current);
      
      // Animate entry of visible cards
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        {
          opacity: 0,
          y: 40,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.04,
          ease: 'back.out(1.2)',
          overwrite: 'auto'
        }
      );
    }
  }, [visibleImages, activeCategory, searchQuery]);

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredImages]);

  const handleNextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex + 1) % filteredImages.length;
    });
  };

  const handlePrevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return (prevIndex - 1 + filteredImages.length) % filteredImages.length;
    });
  };

  // 3D Card Hover Tilt Effects using GSAP
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within element
    const y = e.clientY - rect.top;  // y position within element
    
    // Calculate normalized position relative to center (-0.5 to 0.5)
    const normalizedX = (x / rect.width) - 0.5;
    const normalizedY = (y / rect.height) - 0.5;
    
    // Tilt intensity
    const tiltX = normalizedY * 12; // tilt around X axis based on Y movement
    const tiltY = -normalizedX * 12; // tilt around Y axis based on X movement
    
    gsap.to(card, {
      rotateX: tiltX,
      rotateY: tiltY,
      transformPerspective: 800,
      scale: 1.03,
      boxShadow: '0 20px 40px rgba(4, 47, 31, 0.15)',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
      duration: 0.5,
      ease: 'elastic.out(1.2, 0.5)'
    });
  };

  const copyToClipboard = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedFilename(text);
    setTimeout(() => setCopiedFilename(null), 2000);
  };

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-green-50/50 via-white to-green-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Panel (Search & Categories) */}
        <div className="mb-12 space-y-8">
          
          {/* Header Info */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-green-100 pb-8">
            <div>
              <div className="flex items-center gap-2 text-green-600 font-bold tracking-widest uppercase text-xs mb-2">
                <Sparkles className="h-4 w-4 text-emerald-500 animate-pulse" />
                <span>Botanical Archive</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-green-950 tracking-tight">
                 Sri Satyanarayana Nursery <span className="text-green-600 font-normal serif">Collection</span>
              </h2>
            </div>
            
            {/* Search Input Box */}
            <div className="relative w-full md:w-80 group">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-green-600/50 group-focus-within:text-green-600 transition-colors">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by filename or title..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white border border-green-100 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-green-900 placeholder-green-700/40 shadow-sm transition-all duration-300 hover:border-green-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-green-600/40 hover:text-green-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Categories Tab Strip */}
          <div className="flex flex-wrap items-center gap-2 pb-2">
            <div className="flex items-center gap-2 text-green-700/60 mr-2 text-sm font-semibold">
              <Filter className="h-4 w-4" />
              Filter by:
            </div>
            {categories.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;
              
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    // Add URL search param without full reload
                    const params = new URLSearchParams(window.location.search);
                    if (cat.id === 'all') {
                      params.delete('category');
                    } else {
                      params.set('category', cat.id);
                    }
                    router.push(`?${params.toString()}`, { scroll: false });
                  }}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'bg-green-700 text-white shadow-lg shadow-green-700/20 scale-105 z-10'
                      : 'bg-white text-green-800 border border-green-100 hover:bg-green-50/50 hover:border-green-200'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-green-600 text-green-100' : 'bg-green-50 text-green-600 border border-green-100'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Info Banner if results are zero */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-green-200 shadow-sm max-w-xl mx-auto">
            <Grid className="h-12 w-12 text-green-600/30 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-green-950 mb-2">No matching plants found</h3>
            <p className="text-sm text-green-800/60 px-6">
              We couldn't find any image matching <span className="font-semibold text-green-700">"{searchQuery}"</span> under this filter. Try clearing your search query or selecting a different category.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="mt-6 px-6 py-2 bg-green-600 text-white rounded-xl text-sm font-semibold hover:bg-green-700 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Gallery Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {visibleImages.map((image, index) => {
            const fileName = getFileName(image.src);
            const prettyTitle = getPrettyTitle(image.src);
            
            return (
              <div
                key={image.src}
                ref={el => { cardsRef.current[index] = el; }}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => {
                  // Find index in filteredImages rather than visibleImages
                  const origIndex = filteredImages.findIndex(img => img.src === image.src);
                  setSelectedImageIndex(origIndex !== -1 ? origIndex : index);
                }}
                className="bg-white rounded-3xl overflow-hidden cursor-pointer shadow-[0_4px_25px_rgba(0,0,0,0.03)] border border-green-50/50 flex flex-col transition-all group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Image Wrap */}
                <div className="relative aspect-square overflow-hidden bg-green-50/30 rounded-t-3xl">
                  {/* Subtle leafy background icon when image is loading */}
                  <div className="absolute inset-0 flex items-center justify-center text-green-700/10">
                    <Sparkles className="h-16 w-16" />
                  </div>
                  
                  <img
                    src={image.src}
                    alt={prettyTitle}
                    loading="lazy"
                    className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Glass Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-green-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-end justify-between p-5">
                    <span className="text-white text-xs font-semibold px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/20">
                      {image.category}
                    </span>
                    <div className="h-10 w-10 rounded-full bg-white text-green-900 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform">
                      <Maximize2 className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                {/* Card Info Details */}
                <div className="p-5 flex flex-col flex-grow bg-white border-t border-green-50/30">
                  <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider mb-1">
                    {image.category}
                  </span>
                  <h4 className="text-sm font-bold text-green-950 group-hover:text-green-700 transition-colors line-clamp-1">
                    {prettyTitle}
                  </h4>
                  
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button Container */}
        {filteredImages.length > visibleCount && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 16)}
              className="group relative px-8 py-3.5 bg-green-950 text-white rounded-full font-bold text-sm tracking-wider hover:bg-green-900 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-green-900/10 active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full rounded-full bg-green-600 opacity-0 group-hover:scale-105 group-hover:opacity-10 transition-all duration-300"></span>
              Explore More Species
            </button>
            <p className="text-xs text-green-700/50 mt-3">
              Showing {visibleCount} of {filteredImages.length} available images
            </p>
          </div>
        )}

        {/* Interactive Lightbox Overlay */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col md:flex-row items-stretch justify-between"
              onClick={() => setSelectedImageIndex(null)}
            >
              {/* Main Image Viewer Stage (takes 75% width on desktop) */}
              <div className="relative flex-grow flex items-center justify-center p-4 md:p-12 select-none group/stage">
                
                {/* Close Button */}
                <button
                  className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md hover:scale-105 active:scale-95 transition-all shadow-xl"
                  onClick={() => setSelectedImageIndex(null)}
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Lightbox Navigation Buttons */}
                <button
                  className="absolute left-6 p-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/5 backdrop-blur-sm z-30 opacity-0 group-hover/stage:opacity-100 transition-all hover:scale-105 hover:-translate-x-0.5 active:scale-90"
                  onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  className="absolute right-6 p-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/5 backdrop-blur-sm z-30 opacity-0 group-hover/stage:opacity-100 transition-all hover:scale-105 hover:translate-x-0.5 active:scale-90"
                  onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Animated Lightbox Image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={filteredImages[selectedImageIndex]?.src}
                    initial={{ scale: 0.95, opacity: 0, y: 15 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: -15 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                    src={filteredImages[selectedImageIndex]?.src}
                    alt={filteredImages[selectedImageIndex]?.title}
                    className="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-2xl shadow-2xl z-10"
                    onClick={(e) => e.stopPropagation()}
                  />
                </AnimatePresence>
              </div>

              {/* Lightbox Meta Details Panel (25% width on desktop) */}
              <div 
                className="w-full md:w-[360px] bg-neutral-900 border-t md:border-t-0 md:border-l border-neutral-800 text-white p-6 md:p-8 flex flex-col justify-between z-20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-6">
                  {/* Category Indicator */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-950 border border-green-800/40 rounded-full text-green-400 text-xs font-semibold tracking-wider uppercase">
                    <span className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse" />
                    {filteredImages[selectedImageIndex]?.category}
                  </div>

                  {/* Title */}
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">Botanical Name</span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {getPrettyTitle(filteredImages[selectedImageIndex]?.src || '')}
                    </h3>
                  </div>

                  {/* Exact Filename display (the primary request) */}
                  <div className="p-4 bg-neutral-950 border border-neutral-800 rounded-2xl space-y-2">
                    <span className="text-[10px] text-neutral-500 uppercase tracking-widest block font-bold">Image Filename</span>
                    <code className="text-sm text-emerald-400 font-mono block break-all font-semibold">
                      {getFileName(filteredImages[selectedImageIndex]?.src || '')}
                    </code>
                    
                    <div className="pt-2 flex items-center gap-2">
                      <button
                        onClick={(e) => copyToClipboard(getFileName(filteredImages[selectedImageIndex]?.src || ''), e)}
                        className="flex-grow flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-xs font-semibold border border-white/10"
                      >
                        {copiedFilename === getFileName(filteredImages[selectedImageIndex]?.src || '') ? (
                          <>
                            <Check className="h-4.5 w-4.5 text-emerald-500" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            <span>Copy Filename</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Image Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-2 text-xs border-t border-neutral-800/50">
                    <div>
                      <span className="text-neutral-500 block mb-0.5">Item Index</span>
                      <span className="font-semibold text-neutral-200">
                        {(selectedImageIndex ?? 0) + 1} / {filteredImages.length}
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-500 block mb-0.5">Source Folder</span>
                      <span className="font-semibold text-neutral-200 capitalize">
                        {filteredImages[selectedImageIndex]?.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Controls in sidebar */}
                <div className="pt-6 border-t border-neutral-800/50 space-y-4">
                  <div className="flex gap-2 text-xs select-none">
                    <button
                      onClick={handlePrevImage}
                      className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 active:scale-95 transition-all text-white border border-neutral-700"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 active:scale-95 transition-all text-white border border-neutral-700"
                    >
                      <span>Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  <a
                    href={filteredImages[selectedImageIndex]?.src}
                    download={getFileName(filteredImages[selectedImageIndex]?.src || '')}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-green-600 hover:bg-green-500 active:scale-95 transition-all text-sm font-bold text-white shadow-lg shadow-green-700/20"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Original Image</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
