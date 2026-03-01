'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Phone, Mail, MapPin, Calculator, CheckCircle, Loader2 } from 'lucide-react';
import { Logo } from '../../components/Logo';

export default function GetQuote() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    projectType: [] as string[],
    paintingProjectSize: '',
    paintingBudget: '',
    flooringProjectSize: '',
    flooringBudget: '',
    timeline: '',
    description: ''
  });

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '');
    
    // Format as XXX-XXX-XXXX
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    } else {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'phone') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }));
      
      // Validate phone number
      if (formattedPhone && !validatePhoneNumber(formattedPhone)) {
        setPhoneError('Phone number must be in format: 111-111-1111');
      } else {
        setPhoneError('');
      }
    } else if (name === 'projectType' && type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      const checked = target.checked;
      
      setFormData(prev => ({
        ...prev,
        projectType: checked 
          ? [...prev.projectType, value]
          : prev.projectType.filter(type => type !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number before submission
    if (formData.phone && !validatePhoneNumber(formData.phone)) {
      setPhoneError('Please enter a valid phone number in format: 111-111-1111');
      return;
    }
    
    // Validate project type selection
    if (formData.projectType.length === 0) {
      alert('Please select at least one project type.');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Simulate email sending (in a real app, you'd call an API or email service)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In production, you would integrate with:
      // - EmailJS for client-side email sending
      // - An API route that uses SendGrid, Resend, or similar
      // - A form service like Formspree or Netlify Forms
      
      // For now, we'll log the form data and redirect
      console.log('Quote request submitted:', formData);
      
      // Redirect to thank you page
      router.push('/quote/thank-you');
    } catch (error) {
      console.error('Error submitting quote request:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-slate-700 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-blue-200 hover:text-white mb-8 font-semibold">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Calculator className="h-16 w-16 text-blue-200 mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Get Your Free Quote
              </h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your space? Get a detailed, no-obligation quote for your painting or flooring project. 
              We'll provide accurate pricing and timeline estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
              Project Information
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    maxLength={12}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-blue-500 transition-colors text-slate-900 ${
                      phoneError ? 'border-red-500 focus:ring-red-500' : 'border-slate-300 focus:ring-blue-500'
                    }`}
                    placeholder="111-111-1111"
                  />
                  {phoneError && (
                    <p className="mt-1 text-sm text-red-600">{phoneError}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Property Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900"
                  placeholder="123 Main Street, Okemos, MI, ZIP"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-4">
                  Project Type * (Select all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-blue-300 transition-colors">
                    <input 
                      type="checkbox" 
                      name="projectType" 
                      value="painting" 
                      checked={formData.projectType.includes('painting')}
                      onChange={handleInputChange}
                      className="mr-3 text-blue-600 h-4 w-4" 
                    />
                    <div>
                      <div className="font-semibold text-slate-800">🎨 Painting Services</div>
                      <div className="text-sm text-slate-600">Interior painting services</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border-2 border-slate-200 rounded-lg cursor-pointer hover:border-amber-300 transition-colors">
                    <input 
                      type="checkbox" 
                      name="projectType" 
                      value="flooring" 
                      checked={formData.projectType.includes('flooring')}
                      onChange={handleInputChange}
                      className="mr-3 text-amber-600 h-4 w-4" 
                    />
                    <div>
                      <div className="font-semibold text-slate-800">🏠 Flooring Services</div>
                      <div className="text-sm text-slate-600">Hardwood, laminate, vinyl</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Conditional Project Details based on selected services */}
              {formData.projectType.includes('painting') && (
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                    🎨 Painting Project Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Painting Area (sq ft)
                      </label>
                      <input
                        type="number"
                        name="paintingProjectSize"
                        value={formData.paintingProjectSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900"
                        placeholder="e.g., 1200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Painting Budget Range
                      </label>
                      <select 
                        name="paintingBudget"
                        value={formData.paintingBudget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900"
                      >
                        <option value="">Select budget range</option>
                        <option>Under $1,000</option>
                        <option>$1,000 - $3,000</option>
                        <option>$3,000 - $7,000</option>
                        <option>$7,000 - $15,000</option>
                        <option>$15,000+</option>
                        <option>Not sure</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {formData.projectType.includes('flooring') && (
                <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-6 border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
                    🏠 Flooring Project Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Flooring Area (sq ft)
                      </label>
                      <input
                        type="number"
                        name="flooringProjectSize"
                        value={formData.flooringProjectSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-slate-900"
                        placeholder="e.g., 800"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Flooring Budget Range
                      </label>
                      <select 
                        name="flooringBudget"
                        value={formData.flooringBudget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-slate-900"
                      >
                        <option value="">Select budget range</option>
                        <option>Under $2,000</option>
                        <option>$2,000 - $5,000</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000 - $20,000</option>
                        <option>$20,000+</option>
                        <option>Not sure</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Timeline */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Project Timeline
                </label>
                <select 
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900"
                >
                  <option value="">Select timeline</option>
                  <option>ASAP</option>
                  <option>Within 2 weeks</option>
                  <option>Within 1 month</option>
                  <option>Within 3 months</option>
                  <option>Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Additional Project Details
                </label>
                <textarea
                  rows={5}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-slate-900"
                  placeholder="Please describe your project in detail. Include specific requirements, preferences, material choices, and any special considerations..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Quote Request'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-gradient-to-br from-slate-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            What Happens Next?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Review & Contact</h3>
              <p className="text-slate-600">We'll review your request and contact you within 24 hours to discuss your project.</p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Schedule Visit</h3>
              <p className="text-slate-600">We'll arrange a convenient time to visit your property and assess the project scope.</p>
            </div>
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Detailed Quote</h3>
              <p className="text-slate-600">You'll receive a comprehensive written quote with pricing, timeline, and project details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Need to Talk to Someone?
            </h2>
            <p className="text-xl text-slate-600">
              Prefer to discuss your project over the phone? We're here to help!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg border border-blue-100">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Call Us</h3>
              <p className="text-slate-600">(517) 398-6362</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg border border-blue-100">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Email Us</h3>
              <p className="text-slate-600 mb-2">quotes@plankandbrush.com</p>
              <p className="text-sm text-slate-500">24-hour response time</p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 shadow-lg border border-blue-100">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Service Area</h3>
              <p className="text-slate-600 mb-2">Okemos, MI & Surrounding Areas</p>
              <p className="text-sm text-slate-500">Free estimates within 25 miles</p>
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