'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Logo } from '../../components/Logo';

export default function Contact() {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-slate-100/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Contact us today for a free consultation and estimate. 
            We're here to bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Info & Quote CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quote Call-to-Action */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Request a Quote</h2>
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-200 rounded-xl p-8 shadow-lg">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Ready to Get Started?</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Get a detailed, no-obligation quote for your painting or flooring project. 
                    Our comprehensive form helps us provide accurate pricing and timeline estimates.
                  </p>
                  <Link href="/quote" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Get Free Quote
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-amber-800 mb-3">What to Expect:</h4>
                <ul className="space-y-2 text-amber-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Detailed project assessment
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Transparent pricing breakdown
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Timeline and material recommendations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                    Free consultation and site visit
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Contact Information</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Phone</h3>
                    <p className="text-slate-600">(517) 398-6362</p>
                  </div>
                </div>
                <div className="flex items-start bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                    <p className="text-slate-600">info@plankandbrush.com</p>
                    <p className="text-sm text-slate-500">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Service Area</h3>
                    <p className="text-slate-600">Okemos, MI and Surrounding Areas</p>
                    <p className="text-sm text-slate-500">Free estimates within 25 miles</p>
                  </div>
                </div>
                <div className="flex items-start bg-gradient-to-r from-slate-50 to-blue-50 p-4 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <Clock className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">Business Hours</h3>
                    <div className="text-slate-600">
                      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-amber-900 mb-2">Emergency Service</h3>
                <p className="text-amber-700 mb-2">
                  Need urgent repairs? We offer emergency service for urgent painting and flooring needs.
                </p>
                <p className="text-amber-900 font-semibold">Emergency Line: (517) 398-6362</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">How do you provide estimates?</h3>
              <p className="text-slate-600 leading-relaxed">
                We offer free in-home consultations where we assess your project, take measurements, 
                and provide detailed written estimates with no obligation. We pride ourselves on honest, 
                transparent pricing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">What experience do you have?</h3>
              <p className="text-slate-600 leading-relaxed">
                We bring years of hands-on experience in both painting and flooring projects. Our extensive 
                background covers residential and commercial work, ensuring quality results every time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">What is your typical timeline?</h3>
              <p className="text-slate-600 leading-relaxed">
                Project timelines vary based on scope and size. Most residential painting projects take 
                2-5 days, while flooring installations typically take 1-3 days. We work efficiently while 
                maintaining high quality standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">What guarantee do you offer?</h3>
              <p className="text-slate-600 leading-relaxed">
                We stand behind our work with a personal satisfaction guarantee. We use quality materials 
                and proven techniques, and we'll address any concerns to ensure you're completely happy 
                with the results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">What makes you different?</h3>
              <p className="text-slate-600 leading-relaxed">
                As an individual business owner, you work directly with me from start to finish. This means 
                personal attention, direct communication, and competitive pricing without the overhead of 
                large companies.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Do you handle cleanup?</h3>
              <p className="text-slate-600 leading-relaxed">
                Absolutely! We believe in leaving your space cleaner than we found it. All debris, materials, 
                and equipment are removed, and we do a thorough cleanup after every project.
              </p>
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