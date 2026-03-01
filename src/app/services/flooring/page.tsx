import Link from 'next/link';
import { ArrowLeft, HomeIcon, CheckCircle, Award } from 'lucide-react';
import { Logo } from '../../../components/Logo';

export default function FlooringServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-8 font-semibold">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <HomeIcon className="h-12 w-12 text-amber-700 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                  Expert Flooring Services
                </h1>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed">
                From hardwood installation to refinishing, we provide comprehensive flooring solutions 
                that combine beauty, durability, and value for your home or business.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg h-80 flex items-center justify-center shadow-inner">
                <span className="text-slate-700 font-semibold">Flooring Service Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flooring Types */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Flooring Solutions We Offer
            </h2>
            <p className="text-xl text-slate-600">
              Professional installation and refinishing for all flooring types
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Hardwood */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Hardwood Flooring</h3>
              <p className="text-slate-600 mb-6">
                Timeless elegance with solid and engineered hardwood options in various species and finishes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3" />
                  Oak, Maple, Cherry & More
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3" />
                  Solid & Engineered Options
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3" />
                  Custom Staining Available
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-amber-600 mr-3" />
                  Professional Installation
                </li>
              </ul>
            </div>

            {/* Laminate */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Laminate Flooring</h3>
              <p className="text-slate-600 mb-6">
                Durable, cost-effective flooring that mimics the look of hardwood with easy maintenance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  Water-Resistant Options
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  Scratch & Dent Resistant
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  Easy to Clean & Maintain
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                  Quick Installation
                </li>
              </ul>
            </div>

            {/* Vinyl */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Luxury Vinyl</h3>
              <p className="text-slate-600 mb-6">
                Modern vinyl plank options that offer style, comfort, and exceptional durability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                  100% Waterproof
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                  Realistic Wood Looks
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                  Comfortable Underfoot
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-3" />
                  Pet & Kid Friendly
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Refinishing Services */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Floor Refinishing Services</h2>
              <p className="text-xl text-slate-600 mb-8">
                Restore your existing hardwood floors to their original beauty with our professional refinishing services.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Sanding & Preparation</h4>
                    <p className="text-slate-600">Professional dust-free sanding systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Stain Application</h4>
                    <p className="text-slate-600">Custom color matching and application</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Protective Finish</h4>
                    <p className="text-slate-600">Durable polyurethane coatings</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Repair Services</h4>
                    <p className="text-slate-600">Board replacement and gap filling</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg h-96 flex items-center justify-center shadow-inner">
                <span className="text-slate-700 font-semibold">Floor Refinishing Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Our Installation Process
            </h2>
            <p className="text-xl text-slate-600">
              Professional installation with attention to every detail
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Consultation</h3>
              <p className="text-slate-600">Free in-home measurement and material selection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Preparation</h3>
              <p className="text-slate-600">Subfloor inspection and proper preparation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Installation</h3>
              <p className="text-slate-600">Expert installation with precision and care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Finishing</h3>
              <p className="text-slate-600">Final inspection and cleanup service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Floors Today
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get a free consultation and estimate for your flooring project
          </p>
          <Link href="/contact" className="bg-white text-amber-700 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Schedule Consultation
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