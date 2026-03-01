import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, CheckCircle, Palette, HomeIcon } from 'lucide-react';
import { Logo } from '../components/Logo';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Transform Your Space with
                <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-amber-700 bg-clip-text text-transparent block">Plank & Brush</span>
              </h1>
              <p className="text-xl text-slate-600 mt-6 leading-relaxed">
                Professional painting and flooring services that bring your vision to life. 
                Quality craftsmanship, competitive prices, and exceptional customer service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/quote" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                  Get Free Quote <ArrowRight className="h-5 w-5" />
                </Link>
                <Link href="#services" className="border-2 border-amber-600 text-amber-700 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors flex items-center justify-center">
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-200 to-amber-100 rounded-lg h-96 flex items-center justify-center shadow-inner">
                <span className="text-slate-600">Hero Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We specialize in premium painting and flooring solutions for residential and commercial properties
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 border border-blue-100 shadow-lg">
              <div className="flex items-center mb-4">
                <Palette className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Painting Services</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Professional interior painting with premium materials and expert craftsmanship.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  Interior Wall Painting
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  Cabinet Refinishing
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  Surface Preparation
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  Premium Paint Application
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200 shadow-lg">
              <div className="flex items-center mb-4">
                <HomeIcon className="h-8 w-8 text-amber-700 mr-3" />
                <h3 className="text-2xl font-bold text-slate-800">Flooring Services</h3>
              </div>
              <p className="text-slate-600 mb-6">
                Expert flooring installation and refinishing for residential and commercial spaces.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-amber-700 mr-3" />
                  Hardwood Installation
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-amber-700 mr-3" />
                  Luxury Vinyl Plank
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-amber-700 mr-3" />
                  Floor Refinishing
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-amber-700 mr-3" />
                  Laminate Installation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-slate-600">
              Get in touch for a free consultation and quote
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Call Us</h3>
              <p className="text-slate-600">(517) 398-6362</p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Email Us</h3>
              <p className="text-slate-600">info@plankandbrush.com</p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-lg border border-slate-200">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Service Area</h3>
              <p className="text-slate-600">Okemos, MI & Surrounding Areas</p>
            </div>
          </div>
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
