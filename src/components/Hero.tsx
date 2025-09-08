"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Full-screen Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/video-poster.svg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don&apos;t support video */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-black to-blue-800"></div>
        </video>

        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <span className="text-xl font-bold">Soothly</span>
          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-white hover:text-gray-300 transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#how-it-works"
              className="text-white hover:text-gray-300 transition-colors"
            >
              HOW IT WORKS
            </a>
            <a
              href="#evidence"
              className="text-white hover:text-gray-300 transition-colors"
            >
              EVIDENCE
            </a>
            <a
              href="#faq"
              className="text-white hover:text-gray-300 transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#pricing"
              className="text-white hover:text-gray-300 transition-colors"
            >
              PRICING
            </a>
            <button className="border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition-colors">
              GET STARTED
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800">
            <div className="px-6 py-4 space-y-4">
              <a
                href="#about"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                ABOUT
              </a>
              <a
                href="#how-it-works"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                HOW IT WORKS
              </a>
              <a
                href="#evidence"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                EVIDENCE
              </a>
              <a
                href="#faq"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                FAQ
              </a>
              <a
                href="#pricing"
                className="block text-white hover:text-gray-300 transition-colors"
              >
                PRICING
              </a>
              <button className="w-full border border-white px-6 py-2 text-white hover:bg-white hover:text-black transition-colors">
                GET STARTED
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight max-w-4xl">
          <span className="relative z-10">
            Our children deserve a life without fearing their food
          </span>
        </h1>

        {/* Sub-headline */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Australia has the world&apos;s highest childhood food allergy rates. But
            as a mother with a son living with a nut and egg allergy, I&apos;ve
            realised that beyond the potential for medical emergencies, it&apos;s the
            anxiety and fear that&apos;s stealing a carefree childhood from families.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#waitlist"
          className="bg-[#87A96B] hover:bg-[#7A9660] text-white font-semibold py-4 px-12 text-lg uppercase tracking-wider rounded-full inline-block transition-all duration-500 ease-out hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
        >
          JOIN THE WAITLIST
        </a>
      </div>

      {/* Background Effects - Above video but below content */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
