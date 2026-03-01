import Link from 'next/link';
import { CheckCircle, Home, Phone, Mail } from 'lucide-react';
import { Logo } from '../../../components/Logo';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Success Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-slate-700 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-16 w-16 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Thank You!
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Your quote request has been successfully submitted. We'll review your project details and contact you within 24 hours.
          </p>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">We Review Your Request</h3>
              <p className="text-slate-600">Our team will carefully review your project details and requirements to prepare a comprehensive response.</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Initial Contact</h3>
              <p className="text-slate-600">We'll call or email you within 24 hours to discuss your project and schedule a convenient site visit.</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Detailed Quote</h3>
              <p className="text-slate-600">After our site visit, you'll receive a comprehensive written quote with all project details and pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reference Information */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
              Your Quote Reference
            </h2>
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-6 mb-6">
              <p className="text-slate-700 mb-2">
                <strong>Reference ID:</strong> <span className="font-mono text-blue-600">PB-{new Date().getFullYear()}-{String(Date.now()).slice(-6)}</span>
              </p>
              <p className="text-slate-700 mb-2">
                <strong>Submitted:</strong> {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p className="text-slate-600 text-sm">
                Please keep this reference number for your records.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-slate-600 mb-6">
                We'll send a confirmation email to the address you provided with all the details.
              </p>
              <Link href="/" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg">
                <Home className="h-5 w-5 mr-2" />
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-xl text-slate-600">
              If you have an urgent project or questions, don't hesitate to contact us directly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg border border-blue-100">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Call Us Now</h3>
              <p className="text-slate-600">(517) 398-6362</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg border border-blue-100">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">quotes@plankandbrush.com</p>
              <p className="text-sm text-slate-500">24-hour response guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-200 text-slate-800">
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