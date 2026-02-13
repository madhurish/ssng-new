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
  { src: '/gallery/flowering/Bougainvillea Gold-2.jpg', category: 'flowering', title: 'Bougainvillea Gold' },
  { src: '/gallery/flowering/IXORA NARO LEAF RED-1.jpg', category: 'flowering', title: 'Ixora Naro Leaf Red' },
  { src: '/gallery/flowering/Allamanda gladiator violacea-1.jpg', category: 'flowering', title: 'Allamanda Gladiator' },
  { src: '/gallery/flowering/Heliconiapsittacorum-1.jpg', category: 'flowering', title: 'Heliconia Psittacorum' },
  { src: '/gallery/flowering/PachystachysLutea-1.jpeg', category: 'flowering', title: 'Pachystachys Lutea' },

  // Indoor
  { src: '/gallery/indoor/aglaonema thai pink-1.jpg', category: 'indoor', title: 'Aglaonema Thai Pink' },
  { src: '/gallery/indoor/MONEY PLANT MARBLE QUEEN WHITE-1.jpg', category: 'indoor', title: 'Money Plant Marble Queen' },
  { src: '/gallery/indoor/dracena massangeana gold-1.jpeg', category: 'indoor', title: 'Dracena Massangeana Gold' },
  { src: '/gallery/indoor/sansevieria trifasciata laurentii-1.jpg', category: 'indoor', title: 'Sansevieria Trifasciata' },

  // Palm
  { src: '/gallery/palm/wodyetia bifurcata.jpg', category: 'palm', title: 'Foxtail Palm' },
  { src: '/gallery/palm/raphis excelsa-1.jpg', category: 'palm', title: 'Lady Palm' },
  { src: '/gallery/palm/veitchia merrillii.jpg', category: 'palm', title: 'Christmas Palm' },
  { src: '/gallery/palm/washingtonia fillfera.jpg', category: 'palm', title: 'Washington Palm' },

  // Bonsai
  { src: '/gallery/bonsai/1.png', category: 'bonsai', title: 'Bonsai 1' },
  { src: '/gallery/bonsai/2.jpg', category: 'bonsai', title: 'Bonsai 2' },
  { src: '/gallery/bonsai/3.jpg', category: 'bonsai', title: 'Bonsai 3' },
  { src: '/gallery/bonsai/bonsai ficus-1.jpg', category: 'bonsai', title: 'Ficus Bonsai' },

  // Ornamentals
  { src: '/gallery/ornamentals/acalypha bronze red-1.jpg', category: 'ornamentals', title: 'Acalypha Bronze Red' },
  { src: '/gallery/ornamentals/dracena baby doll-1.jpg', category: 'ornamentals', title: 'Dracena Baby Doll' },
  { src: '/gallery/ornamentals/ornamental pine apple-1.jpg', category: 'ornamentals', title: 'Ornamental Pineapple' },
  { src: '/gallery/ornamentals/rhoeo discolor-1.jpg', category: 'ornamentals', title: 'Rhoeo Discolor' },

  // Avenues
  { src: '/gallery/avenues/alstonia scholaris-1.jpg', category: 'avenues', title: 'Alstonia Scholaris' },
  { src: '/gallery/avenues/peltophorum-1.jpg', category: 'avenues', title: 'Peltophorum' },
  { src: '/gallery/avenues/spathodea campanulata-3.jpeg', category: 'avenues', title: 'Spathodea Campanulata' },
  { src: '/gallery/avenues/terminalia mantaly variegata-2.jpeg', category: 'avenues', title: 'Terminalia Mantaly' },

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
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat.id
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

