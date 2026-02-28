import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Palette, HomeIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
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
              <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
              <Link href="#portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Space with
                <span className="text-blue-600 block">Plank & Brush</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Professional painting and flooring services that bring your vision to life. 
                Quality craftsmanship, competitive prices, and exceptional customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  Get Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="#services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center">
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500">Hero Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in premium painting and flooring solutions for residential and commercial properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Palette className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Painting Services</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Professional interior and exterior painting with premium materials and expert craftsmanship.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Interior & Exterior Painting
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Color Consultation
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Surface Preparation
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Premium Paint Brands
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <HomeIcon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Flooring Services</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Expert flooring installation and refinishing for all types of residential and commercial spaces.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Hardwood Installation
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Laminate & Vinyl
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Floor Refinishing
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Tile & Stone Work
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-gray-600">
              Get in touch for a free consultation and quote
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@plankandbrush.com</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">Your City, State</p>
            </div>
          </div>
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
