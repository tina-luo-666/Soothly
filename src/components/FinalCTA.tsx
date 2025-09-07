"use client";

import { ArrowRight, Users } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="py-16 lg:py-24 bg-gradient-to-br from-sage-green to-forest-green text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Users className="w-4 h-4" />
            <span>Join the community</span>
          </div>

          <h2 className="text-display-md font-display font-bold mb-8">
            Join other Australian families already on the priority waitlist
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Get early access to life-changing specialist-approved treatment from
            home. Take the first step toward food confidence for your family.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#waitlist-form"
              className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white px-8 py-4 rounded-xl font-medium transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Join our priority waitlist
              <ArrowRight className="w-5 h-5" />
            </a>

            <div className="text-white/80 text-sm">
              <p>Free to join • No commitment required</p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80">Families joined</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-white/80">AU-based care</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-sm text-white/80">Support available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
