import React from 'react';
import { ArrowRight, TreePine, Award, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-green-50 rounded-l-[100px] hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Heritage Nursery since 1953
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-green-950 leading-tight mb-6">
              Cultivating Nature's <span className="text-green-600 italic">Masterpieces</span>
            </h1>
            <p className="text-lg text-green-800/80 mb-10 max-w-2xl mx-auto lg:mx-0">
              Sri Satyanarayana Nursery Gardens is a national landmark in Kadiyam, 
              bringing world-class greenery to your doorstep for over seven decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-green-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-xl shadow-green-200">
                Explore Products <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-green-200 text-green-800 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-all">
                Our Heritage
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-green-100 pt-8">
              <div>
                <div className="text-3xl font-bold text-green-900">70+</div>
                <div className="text-sm text-green-600 font-medium uppercase tracking-wider">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-900">1k+</div>
                <div className="text-sm text-green-600 font-medium uppercase tracking-wider">Species</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-900">100+</div>
                <div className="text-sm text-green-600 font-medium uppercase tracking-wider">Awards</div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="/hero.jpeg" 
                alt="Beautiful Nursery" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl border border-green-50 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <TreePine className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-green-900">National Awarded</div>
                  <div className="text-sm text-green-600">Best Nursery in AP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

