import Link from 'next/link';
import { ArrowLeft, Palette, CheckCircle, Star } from 'lucide-react';
import { Logo } from '../../../components/Logo';
export default function PaintingServices() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Palette className="h-12 w-12 text-blue-600 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                  Professional Painting Services
                </h1>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed">
                Transform your space with our expert painting services. We bring years of experience, 
                premium materials, and attention to detail to every project.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gray-300 rounded-lg h-80 flex items-center justify-center">
                <span className="text-gray-500">Painting Service Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Interior Painting */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Interior Painting</h2>
              <p className="text-slate-600 mb-8">
                Create the perfect atmosphere in your home or office with our professional interior painting services. 
                We use only premium paints and proven techniques to ensure lasting beauty.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Surface Preparation</h4>
                    <p className="text-slate-600">Thorough cleaning, patching, and priming</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Premium Paint Application</h4>
                    <p className="text-slate-600">Professional techniques for flawless finish</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Clean-Up Service</h4>
                    <p className="text-slate-600">Complete job site cleanup included</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Paint Brands */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Premium Paint Brands
            </h2>
            <p className="text-xl text-slate-600">
              We partner with the industry's leading paint manufacturers
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all">
                <h3 className="font-semibold text-slate-800">Sherwin Williams</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all">
                <h3 className="font-semibold text-slate-800">Benjamin Moore</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all">
                <h3 className="font-semibold text-slate-800">PPG Paints</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:bg-gradient-to-br hover:from-blue-50 hover:to-white transition-all">
                <h3 className="font-semibold text-slate-800">Behr</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Painting Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free estimate today and transform your space with professional painting
          </p>
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
            Get Free Quote
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