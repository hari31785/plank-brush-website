import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";import { Logo } from "../components/Logo";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plank & Brush | Professional Painting & Flooring Services",
  description: "Transform your space with Plank & Brush - premier painting and flooring specialists. Quality craftsmanship, competitive prices, and exceptional service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="shadow-xl border-b border-blue-100 relative" style={{background: 'linear-gradient(to right, rgb(248 250 252), rgb(239 246 255))'}}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-60 relative overflow-visible">
              {/* Left Navigation */}
              <div className="hidden md:flex items-center space-x-8 flex-1 z-40 relative">
                <Link href="/" className="text-slate-700 hover:text-blue-700 px-4 py-2 text-lg font-semibold transition-all duration-300 hover:bg-blue-50 rounded-lg cursor-pointer">
                  Home
                </Link>
                <div className="relative group">
                  <span className="text-slate-700 hover:text-blue-700 px-4 py-2 text-lg font-semibold transition-all duration-300 cursor-pointer flex items-center hover:bg-blue-50 rounded-lg">
                    Services 
                    <svg className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                  <div className="absolute left-0 top-full mt-2 w-56 rounded-xl shadow-2xl bg-white border border-blue-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100]">
                    <div className="py-6">
                      <Link href="/services/painting" className="block px-4 py-4 text-base text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-200 font-medium border-b border-slate-200">
                        🎨 Painting Services
                        <div className="text-xs text-slate-500 mt-2">Interior & Exterior Painting</div>
                      </Link>
                      <Link href="/services/flooring" className="block px-4 py-4 text-base text-slate-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 hover:text-amber-700 transition-all duration-200 font-medium">
                        🏠 Flooring Services
                        <div className="text-xs text-slate-500 mt-2">Hardwood, Laminate & More</div>
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="/portfolio" className="text-slate-700 hover:text-blue-700 px-4 py-2 text-lg font-semibold transition-all duration-300 hover:bg-blue-50 rounded-lg cursor-pointer">
                  Portfolio
                </Link>
              </div>

              {/* Center Logo */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Logo />
              </div>

              {/* Right Navigation */}
              <div className="hidden md:flex items-center space-x-8 flex-1 justify-end z-40">
                <Link href="/about" className="text-slate-700 hover:text-blue-700 px-4 py-2 text-lg font-semibold transition-all duration-300 hover:bg-blue-50 rounded-lg cursor-pointer">
                  About
                </Link>
                <Link href="/contact" className="text-slate-700 hover:text-blue-700 px-4 py-2 text-lg font-semibold transition-all duration-300 hover:bg-blue-50 rounded-lg cursor-pointer">
                  Contact
                </Link>
                <Link href="/quote" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border-2 border-blue-600">
                  Get Quote
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-gray-700 hover:text-blue-600 p-2">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
