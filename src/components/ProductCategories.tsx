import React from 'react';

const categories = [
  { name: 'Flowering Plants', count: '200+ Species', image: '/gallery/flowering/1.jpg' },
  { name: 'Indoor Plants', count: '150+ Species', image: '/gallery/indoor/1.jpg' },
  { name: 'Palm Varieties', count: '80+ Species', image: '/gallery/palm/39.jpg' },
  { name: 'Bonsai Collection', count: '50+ Species', image: '/gallery/bonsai/1.png' },
  { name: 'Fruit Plants', count: '120+ Species', image: '/gallery/fruits/1.jpg' },
  { name: 'Ornamental Plants', count: '300+ Species', image: '/gallery/ornamentals/28.jpg' },
];

export const ProductCategories = () => {
  return (
    <section id="products" className="py-24 bg-green-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4">Our Collection</h2>
          <h3 className="text-4xl font-bold text-green-950 mb-4">A World of Greenery</h3>
          <p className="text-green-800/60 max-w-2xl mx-auto">
            From rare exotics to local favorites, we maintain one of the most diverse plant collections in the country.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="group relative h-96 rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/90 via-green-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-white/70 text-sm font-medium mb-1 uppercase tracking-wider">{category.count}</div>
                <h4 className="text-2xl font-bold text-white mb-4">{category.name}</h4>
                <div className="flex items-center gap-2 text-white font-semibold opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  View Collection <span className="text-xl">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-green-700 font-bold hover:text-green-900 transition-colors">
            See All Categories <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

