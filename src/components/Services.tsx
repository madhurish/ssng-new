import React from 'react';
import { GraduationCap, Map, HeartHandshake, School } from 'lucide-react';

const services = [
  {
    title: "Educational Training",
    description: "Specialized training programs for nursery management and plant care.",
    icon: GraduationCap
  },
  {
    title: "Students' Study Tour",
    description: "Welcome educational visits for students to learn about plant diversity.",
    icon: School
  },
  {
    title: "Govt Training",
    description: "Official partner for various government department training programs.",
    icon: Map
  },
  {
    title: "Charity Service",
    description: "Contributing to the community through various social initiatives.",
    icon: HeartHandshake
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4">Beyond Plants</h2>
            <h3 className="text-4xl font-bold text-green-950">Our Services & Initiatives</h3>
          </div>
          <p className="text-green-800/60 max-w-sm">
            We believe in sharing knowledge and giving back to the community that helped us grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="p-8 rounded-3xl border border-green-100 hover:border-green-300 hover:bg-green-50/30 transition-all duration-300 group">
              <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <service.icon className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-green-950 mb-3">{service.title}</h4>
              <p className="text-green-800/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

