import Link from 'next/link';
import { ArrowLeft, HomeIcon, CheckCircle, Award } from 'lucide-react';

export default function FlooringServices() {
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
              <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 transition-colors">Portfolio</Link>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <HomeIcon className="h-12 w-12 text-blue-600 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Expert Flooring Services
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                From hardwood installation to refinishing, we provide comprehensive flooring solutions 
                that combine beauty, durability, and value for your home or business.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center">
                <span className="text-gray-500">Flooring Service Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flooring Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flooring Solutions We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Professional installation and refinishing for all flooring types
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hardwood */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hardwood Flooring</h3>
              <p className="text-gray-600 mb-6">
                Timeless elegance with solid and engineered hardwood options in various species and finishes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Oak, Maple, Cherry & More
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Solid & Engineered Options
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Custom Staining Available
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Professional Installation
                </li>
              </ul>
            </div>

            {/* Laminate */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Laminate Flooring</h3>
              <p className="text-gray-600 mb-6">
                Durable, cost-effective flooring that mimics the look of hardwood with easy maintenance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Water-Resistant Options
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Scratch & Dent Resistant
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Easy to Clean & Maintain
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Quick Installation
                </li>
              </ul>
            </div>

            {/* Vinyl */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury Vinyl</h3>
              <p className="text-gray-600 mb-6">
                Modern vinyl plank and tile options that offer style, comfort, and exceptional durability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  100% Waterproof
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Realistic Wood & Stone Looks
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Comfortable Underfoot
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  Pet & Kid Friendly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Refinishing Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Floor Refinishing Services</h2>
              <p className="text-xl text-gray-600 mb-8">
                Restore your existing hardwood floors to their original beauty with our professional refinishing services.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sanding & Preparation</h4>
                    <p className="text-gray-600">Professional dust-free sanding systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Stain Application</h4>
                    <p className="text-gray-600">Custom color matching and application</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Protective Finish</h4>
                    <p className="text-gray-600">Durable polyurethane coatings</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Repair Services</h4>
                    <p className="text-gray-600">Board replacement and gap filling</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gray-300 rounded-lg h-96 flex items-center justify-center">
                <span className="text-gray-500">Floor Refinishing Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              Professional installation with attention to every detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Free in-home measurement and material selection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600">Subfloor inspection and proper preparation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">Expert installation with precision and care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Finishing</h3>
              <p className="text-gray-600">Final inspection and cleanup service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Floors Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free consultation and estimate for your flooring project
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
            Schedule Consultation
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