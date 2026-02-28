import Link from 'next/link';
import { Users, Award, Shield, Clock, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-blue-600 to-slate-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-amber-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            About <span className="text-amber-400">Plank & Brush</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Your trusted partners in transforming spaces with professional painting and flooring services. 
            Built on quality, reliability, and exceptional customer service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gradient-to-r from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 drop-shadow-sm">Our Story</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Founded with a simple mission: to provide exceptional painting and flooring services 
                that exceed our customers' expectations. What started as a small local business has 
                grown into a trusted name in the community, known for quality workmanship and 
                reliable service.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Over the years, we've built our reputation on attention to detail, use of premium 
                materials, and a commitment to customer satisfaction. Every project, whether big or 
                small, receives the same level of care and professionalism.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, Plank & Brush continues to be family-owned and operated, bringing personal 
                service and local expertise to every job we undertake.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-200 to-blue-200 rounded-lg h-96 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300">
                <span className="text-slate-600 font-medium">Company Story Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gradient-to-br from-slate-100 via-blue-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 drop-shadow-sm">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-1 transition-all duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Quality</h3>
              <p className="text-slate-600">
                We use only premium materials and proven techniques to ensure lasting results.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-1 transition-all duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Reliability</h3>
              <p className="text-slate-600">
                Count on us to complete your project on time, within budget, and to your satisfaction.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-1 transition-all duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Service</h3>
              <p className="text-slate-600">
                Exceptional customer service is at the heart of everything we do.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transform group-hover:-translate-y-1 transition-all duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Integrity</h3>
              <p className="text-slate-600">
                Honest communication, fair pricing, and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-16 bg-gradient-to-l from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-200 to-slate-200 rounded-lg h-96 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300">
                <span className="text-slate-600 font-medium">Team Experience Image</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 drop-shadow-sm">
                Experience You Can Trust
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our team brings decades of combined experience in painting and flooring. We've worked 
                on everything from small residential touch-ups to large commercial projects, always 
                delivering the same high standard of workmanship.
              </p>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Licensed & Insured</h4>
                    <p className="text-slate-600">Fully licensed contractors with comprehensive insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Trained Professionals</h4>
                    <p className="text-slate-600">Ongoing training in latest techniques and safety protocols</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Quality Guarantee</h4>
                    <p className="text-slate-600">We stand behind our work with comprehensive warranties</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Local Expertise</h4>
                    <p className="text-slate-600">Deep understanding of local building codes and climate conditions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-blue-600 to-amber-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-amber-600/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300 drop-shadow-lg">15+</div>
              <p className="text-slate-200 group-hover:text-white transition-colors duration-300">Years Experience</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300 drop-shadow-lg">500+</div>
              <p className="text-slate-200 group-hover:text-white transition-colors duration-300">Projects Completed</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300 drop-shadow-lg">100%</div>
              <p className="text-slate-200 group-hover:text-white transition-colors duration-300">Customer Satisfaction</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300 drop-shadow-lg">24/7</div>
              <p className="text-slate-200 group-hover:text-white transition-colors duration-300">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 drop-shadow-sm">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Experience the Plank & Brush difference on your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Get Free Quote
            </Link>
            <Link href="/portfolio" className="border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-lg hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">P&B</span>
              </div>
              <span className="text-lg font-bold">Plank & Brush</span>
            </div>
            <p className="text-slate-400 text-sm">
              © 2026 Plank & Brush. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}