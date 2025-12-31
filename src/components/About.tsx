import React from 'react';
import { History, ShieldCheck, HeartPulse, Users } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="/gallery/main-cover/garden-plants.jpg"
                alt="Greenhouse"
                className="rounded-3xl h-64 w-full object-cover shadow-lg"
              />
              <div className="bg-green-600 rounded-3xl p-8 text-white">
                <History className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">Since 1953</h3>
                <p className="text-green-50 text-sm">Founded in 50 cents of land, now a national landmark.</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-green-50 rounded-3xl p-8 border border-green-100">
                <ShieldCheck className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-2">Quality Standards</h3>
                <p className="text-green-700/80 text-sm">Maintaining highest quality species with expert care.</p>
              </div>
              <img
                src="/gallery/main-cover/office-plants.jpg"
                alt="Plant Care"
                className="rounded-3xl h-64 w-full object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-green-600 font-bold tracking-widest uppercase text-sm mb-4">Our Heritage</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-green-950 mb-8 leading-tight">
              A Legacy of <br />Hard Work & Passion
            </h3>
            <div className="space-y-6 text-lg text-green-800/70">
              <p>
                Sri Satyanarayana Nursery Gardens was established in 1953 by Sri Palla Narayya,
                starting with just 50 cents of land. His vision was carried forward by
                <span className="text-green-900 font-bold"> Sri Palla Venkanna</span>.
              </p>
              <p>
                Despite being physically challenged, Sri Palla Venkanna's determination
                and grit transformed this small plot into a national and international
                success. Today, we stand as one of the landmarks of nurseries in the
                Kadiyam region of Andhra Pradesh.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <HeartPulse className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900">Greenery Mission</h4>
                    <p className="text-sm">Protecting environment through beauty.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900">Community First</h4>
                    <p className="text-sm">Serving thousands of nature lovers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

