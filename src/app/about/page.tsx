import Link from 'next/link';
import { Users, Award, Shield, Clock, CheckCircle } from 'lucide-react';
import { Logo } from '../../components/Logo';

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
            Personal painting and flooring services with years of experience and dedicated 
            one-on-one attention for every project.
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
                Plank & Brush is our venture into the painting and flooring industry, 
                built on years of hands-on experience and a passion for quality craftsmanship. 
                We bring dedicated personal attention to every project, 
                no matter how big or small.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                With extensive experience in both painting and flooring, we've honed our skills 
                through countless projects, always focusing on quality workmanship and customer 
                satisfaction. Our approach is personal and direct - when you hire Plank & Brush, 
                you're working with professionals who care about your project from start to finish.
              </p>
              <p className="text-slate-600 leading-relaxed">
                As a business, we're committed to building lasting relationships 
                with our customers through honest communication, competitive pricing, and 
                exceptional results. Your satisfaction is our reputation.
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
                Our Expertise
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                With years of hands-on experience in painting and flooring, we bring a wealth 
                of practical knowledge to every project. Our extensive background covers 
                residential and commercial work, ensuring we can handle any challenge with 
                confidence and skill.
              </p>
              <div className="space-y-4">
                <div className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Years of Experience</h4>
                    <p className="text-slate-600">Extensive hands-on experience in both painting and flooring projects</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Personal Attention</h4>
                    <p className="text-slate-600">Direct communication and personal involvement in every aspect of your project</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Quality Commitment</h4>
                    <p className="text-slate-600">We stand behind our work with attention to detail and quality craftsmanship</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0 group-hover:text-amber-600 transition-colors duration-300" />
                  <div>
                    <h4 className="font-semibold text-slate-800">Competitive Pricing</h4>
                    <p className="text-slate-600">Fair, honest pricing with efficient operations and quality results</p>
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
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300 drop-shadow-lg">Expert</div>
              <p className="text-slate-200 group-hover:text-white transition-colors duration-300">Craftsmanship</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300 drop-shadow-lg">100%</div>
              <p className="text-slate-200 group-hover:text-white transition-colors duration-300">Personal Service</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300 drop-shadow-lg">Years</div>
              <p className="text-slate-200 group-hover:text-white transition-colors duration-300">Of Experience</p>
            </div>
            <div className="group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300 drop-shadow-lg">Direct</div>
              <p className="text-slate-200 group-hover:text-white transition-colors duration-300">Communication</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 drop-shadow-sm">
            Ready for Personal Service?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Work with us for dedicated attention to your painting and flooring needs
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