'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Filter, ArrowLeft, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Living Room Paint',
      category: 'interior-painting',
      description: 'Complete interior painting transformation with custom color scheme',
      image: 'Interior Paint Project 1',
      tags: ['Interior', 'Residential', 'Color Consultation']
    },
    {
      id: 2,
      title: 'Victorian Home Exterior',
      category: 'exterior-painting',
      description: 'Historic home exterior restoration with period-appropriate colors',
      image: 'Exterior Paint Project 1',
      tags: ['Exterior', 'Historic', 'Restoration']
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
      title: 'Deck Staining Project',
      category: 'exterior-painting',
      description: 'Deck cleaning, repair, and protective staining service',
      image: 'Deck Staining',
      tags: ['Deck', 'Staining', 'Protection']
    },
    {
      id: 8,
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P&B</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Plank & Brush</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/portfolio" className="text-blue-600 font-medium">Portfolio</Link>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our completed projects and see the quality craftsmanship that sets Plank & Brush apart. 
            Each project represents our commitment to excellence.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center mr-4">
              <Filter className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700 font-medium">Filter by:</span>
            </div>
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('interior-painting')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'interior-painting'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Interior Painting
            </button>
            <button
              onClick={() => setActiveFilter('exterior-painting')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'exterior-painting'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Exterior Painting
            </button>
            <button
              onClick={() => setActiveFilter('flooring')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeFilter === 'flooring'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
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
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gray-300 h-64 flex items-center justify-center">
                  <span className="text-gray-500 text-center px-4">{item.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
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
              <p className="text-gray-500 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Before & After Transformations
            </h2>
            <p className="text-xl text-gray-600">
              See the dramatic transformations we've achieved for our clients
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Living Room Makeover</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">BEFORE</p>
                    <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Before Image</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">AFTER</p>
                    <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">After Image</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  Complete interior painting transformation with modern color palette and professional finish.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kitchen Floor Upgrade</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">BEFORE</p>
                    <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Before Image</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">AFTER</p>
                    <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">After Image</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  Luxury vinyl plank installation that completely transformed this kitchen space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Exceptional work! The team was professional, clean, and the quality exceeded our expectations. 
                Our living room looks amazing."
              </p>
              <p className="text-gray-900 font-semibold">- Sarah Johnson</p>
              <p className="text-gray-500 text-sm">Interior Painting Project</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Professional hardwood installation with attention to every detail. The floors are beautiful 
                and the team cleaned up perfectly."
              </p>
              <p className="text-gray-900 font-semibold">- Mike Rodriguez</p>
              <p className="text-gray-500 text-sm">Flooring Installation</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "From estimate to completion, everything was handled professionally. Great communication 
                and excellent results on our exterior painting."
              </p>
              <p className="text-gray-900 font-semibold">- Lisa Chen</p>
              <p className="text-gray-500 text-sm">Exterior Painting Project</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us transform your space with the same quality and attention to detail
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">P&B</span>
              </div>
              <span className="text-lg font-bold">Plank & Brush</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2026 Plank & Brush. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}