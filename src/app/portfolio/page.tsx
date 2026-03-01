'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Filter, ArrowLeft, ArrowRight } from 'lucide-react';
import { Logo } from '../../components/Logo';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Living Room Paint',
      category: 'interior-painting',
      description: 'Complete interior painting transformation with custom color scheme',
      image: 'Interior Paint Project 1',
      tags: ['Interior', 'Residential']
    },
    {
      id: 3,
      title: 'Hardwood Floor Installation',
      category: 'flooring',
      description: 'Oak hardwood flooring installation in open-concept home',
      image: 'Flooring Project 1',
      tags: ['Hardwood', 'Installation', 'Oak']
    },
    {
      id: 4,
      title: 'Office Space Refresh',
      category: 'interior-painting',
      description: 'Commercial office painting with modern neutral palette',
      image: 'Commercial Paint Project',
      tags: ['Commercial', 'Office', 'Modern']
    },
    {
      id: 5,
      title: 'Kitchen Cabinet Refinishing',
      category: 'interior-painting',
      description: 'Custom cabinet painting and refinishing project',
      image: 'Cabinet Refinishing',
      tags: ['Kitchen', 'Cabinets', 'Refinishing']
    },
    {
      id: 6,
      title: 'Luxury Vinyl Installation',
      category: 'flooring',
      description: 'Waterproof luxury vinyl plank flooring throughout main level',
      image: 'LVP Installation',
      tags: ['Vinyl', 'Waterproof', 'Modern']
    },
    {
      id: 7,
      title: 'Hardwood Refinishing',
      category: 'flooring',
      description: 'Complete hardwood floor refinishing with custom stain',
      image: 'Floor Refinishing',
      tags: ['Refinishing', 'Custom Stain', 'Restoration']
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-slate-700 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Our <span className="text-amber-400 drop-shadow-md">Portfolio</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            Explore our completed projects and see the quality craftsmanship that sets Plank & Brush apart. 
            Each project represents our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gradient-to-r from-slate-50 to-slate-100 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center mr-4">
              <Filter className="h-5 w-5 text-slate-500 mr-2" />
              <span className="text-slate-700 font-medium">Filter by:</span>
            </div>
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md ${
                activeFilter === 'all'
                  ? 'bg-gradient-to-r from-slate-600 to-slate-700 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('interior-painting')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md ${
                activeFilter === 'interior-painting'
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200'
              }`}
            >
              Interior Painting
            </button>
            <button
              onClick={() => setActiveFilter('flooring')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md ${
                activeFilter === 'flooring'
                  ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-amber-50 hover:text-amber-700 border border-slate-200'
              }`}
            >
              Flooring
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-slate-200">
                <div className="bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300 h-64 flex items-center justify-center">
                  <span className="text-slate-600 text-center px-4 font-medium">{item.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-sm rounded-full font-medium shadow-sm ${
                          item.category === 'flooring'
                            ? 'bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800'
                            : 'bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-slate-600">
              See the dramatic transformations we've achieved for our clients
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Living Room Makeover</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-2">BEFORE</p>
                    <div className="bg-gradient-to-br from-slate-200 to-slate-300 h-48 rounded-lg flex items-center justify-center shadow-inner">
                      <span className="text-slate-500">Before Image</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-2">AFTER</p>
                    <div className="bg-gradient-to-br from-blue-200 to-blue-300 h-48 rounded-lg flex items-center justify-center shadow-inner">
                      <span className="text-blue-700 font-medium">After Image</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 mt-4 leading-relaxed">
                  Complete interior painting transformation with modern color palette and professional finish.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-xl shadow-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">Kitchen Floor Upgrade</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-2">BEFORE</p>
                    <div className="bg-gradient-to-br from-slate-200 to-slate-300 h-48 rounded-lg flex items-center justify-center shadow-inner">
                      <span className="text-slate-500">Before Image</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-2">AFTER</p>
                    <div className="bg-gradient-to-br from-amber-200 to-amber-300 h-48 rounded-lg flex items-center justify-center shadow-inner">
                      <span className="text-amber-800 font-medium">After Image</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 mt-4 leading-relaxed">
                  Luxury vinyl plank installation that completely transformed this kitchen space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              Real feedback from satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg drop-shadow-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Exceptional work! The team was professional, clean, and the quality exceeded our expectations. 
                Our living room looks amazing."
              </p>
              <p className="text-slate-800 font-semibold">- Sarah Johnson</p>
              <p className="text-blue-600 text-sm font-medium">Interior Painting Project</p>
            </div>
            <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg drop-shadow-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Professional hardwood installation with attention to every detail. The floors are beautiful 
                and the team cleaned up perfectly."
              </p>
              <p className="text-slate-800 font-semibold">- Mike Rodriguez</p>
              <p className="text-amber-700 text-sm font-medium">Flooring Installation</p>
            </div>
            <div className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg drop-shadow-sm">★</span>
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Professional interior painting with attention to every detail. Great communication 
                and excellent results on our home renovation project."
              </p>
              <p className="text-slate-800 font-semibold">- Lisa Chen</p>
              <p className="text-blue-600 text-sm font-medium">Interior Painting Project</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 drop-shadow-sm">
            Let us transform your space with the same quality and attention to detail
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-lg transition-all duration-200 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-200 text-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center h-16">
            <div className="scale-[0.35] origin-left flex items-center">
              <Logo size="sm" className="text-slate-800 [&_span]:text-slate-800 [&_svg_rect]:fill-amber-600 [&_svg_path]:fill-red-500 [&_svg_circle]:fill-blue-600" />
            </div>
            <p className="text-slate-600 text-xs leading-none">
              © 2026 Plank & Brush. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}