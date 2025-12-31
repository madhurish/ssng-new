import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

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

// Sample images based on the provided directory structure
const galleryImages = [
  // Flowering
  { src: '/gallery/flowering/1.jpg', category: 'flowering', title: 'Flowering Plant 1' },
  { src: '/gallery/flowering/5.jpg', category: 'flowering', title: 'Flowering Plant 5' },
  { src: '/gallery/flowering/10.jpg', category: 'flowering', title: 'Flowering Plant 10' },
  { src: '/gallery/flowering/15.jpg', category: 'flowering', title: 'Flowering Plant 15' },
  { src: '/gallery/flowering/20.jpg', category: 'flowering', title: 'Flowering Plant 20' },
  
  // Indoor
  { src: '/gallery/indoor/1.jpg', category: 'indoor', title: 'Indoor Plant 1' },
  { src: '/gallery/indoor/5.jpg', category: 'indoor', title: 'Indoor Plant 5' },
  { src: '/gallery/indoor/10.jpg', category: 'indoor', title: 'Indoor Plant 10' },
  { src: '/gallery/indoor/15.jpg', category: 'indoor', title: 'Indoor Plant 15' },
  
  // Palm
  { src: '/gallery/palm/39.jpg', category: 'palm', title: 'Palm Variety 39' },
  { src: '/gallery/palm/41.jpg', category: 'palm', title: 'Palm Variety 41' },
  { src: '/gallery/palm/43.jpg', category: 'palm', title: 'Palm Variety 43' },
  { src: '/gallery/palm/45.jpg', category: 'palm', title: 'Palm Variety 45' },
  
  // Bonsai
  { src: '/gallery/bonsai/1.png', category: 'bonsai', title: 'Bonsai 1' },
  { src: '/gallery/bonsai/3.jpg', category: 'bonsai', title: 'Bonsai 3' },
  { src: '/gallery/bonsai/5.jpg', category: 'bonsai', title: 'Bonsai 5' },
  
  // Ornamentals
  { src: '/gallery/ornamentals/28.jpg', category: 'ornamentals', title: 'Ornamental 28' },
  { src: '/gallery/ornamentals/30.jpg', category: 'ornamentals', title: 'Ornamental 30' },
  { src: '/gallery/ornamentals/32.jpg', category: 'ornamentals', title: 'Ornamental 32' },
  { src: '/gallery/ornamentals/35.jpg', category: 'ornamentals', title: 'Ornamental 35' },
  
  // Avenues
  { src: '/gallery/avenues/1.jpg', category: 'avenues', title: 'Avenue Plant 1' },
  { src: '/gallery/avenues/3.jpg', category: 'avenues', title: 'Avenue Plant 3' },
  { src: '/gallery/avenues/6.jpg', category: 'avenues', title: 'Avenue Plant 6' },
  { src: '/gallery/avenues/9.jpg', category: 'avenues', title: 'Avenue Plant 9' },
  
  // Fruits
  { src: '/gallery/fruits/1.jpg', category: 'fruits', title: 'Fruit Plant 1' },
  { src: '/gallery/fruits/5.jpg', category: 'fruits', title: 'Fruit Plant 5' },
  { src: '/gallery/fruits/10.jpg', category: 'fruits', title: 'Fruit Plant 10' },
  { src: '/gallery/fruits/15.jpg', category: 'fruits', title: 'Fruit Plant 15' },
  { src: '/gallery/fruits/20.jpg', category: 'fruits', title: 'Fruit Plant 20' },
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4">Visual Tour</h2>
          <h3 className="text-4xl font-bold text-green-950 mb-8">Our Living Gallery</h3>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-green-600 text-white shadow-lg shadow-green-200' 
                    : 'bg-green-50 text-green-700 hover:bg-green-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-green-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="text-white h-8 w-8" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/70 hover:text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-8 w-8" />
              </button>
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage} 
                className="max-w-full max-h-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

