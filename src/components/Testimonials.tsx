import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "K. Chiranjeevi",
    role: "Cine Hero",
    text: "Brundavanam Kannula Pandugaga undi Santhosham.",
    date: "14.02.2013",
    color: "bg-green-600"
  },
  {
    name: "Dr. Vani Mohan IAS",
    role: "Collector West Godavari",
    text: "This nursery is really great and the variety of plants is really world class. The efforts of how it began from half acre is really a great journey of hard work.",
    date: "03.10.2012",
    color: "bg-green-700"
  },
  {
    name: "Mukul Wasnik",
    role: "Ex-Central Minister",
    text: "Sri Satyanarayana Nursery Gardens is developed and maintained keeping the highest quality standards in mind. The number of species available is mind-blowing.",
    date: "02.07.2018",
    color: "bg-green-800"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-10 left-10 text-green-100 grid grid-cols-6 gap-4 opacity-50">
        {[...Array(24)].map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-current" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4">Guest Speak</h2>
          <h3 className="text-4xl font-bold text-green-950 mb-4">Words from our Visitors</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="bg-green-50/50 p-8 rounded-[40px] border border-green-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              <Quote className="h-12 w-12 text-green-200 absolute top-8 right-8 group-hover:text-green-600 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-green-500 text-green-500" />
                ))}
              </div>

              <p className="text-green-900 text-lg leading-relaxed mb-8 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold`}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-green-950">{t.name}</h4>
                  <div className="text-sm text-green-600 font-medium">{t.role}</div>
                  <div className="text-xs text-green-600/50 mt-1">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

