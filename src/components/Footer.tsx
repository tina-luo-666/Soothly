"use client";

import Link from "next/link";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-display-sm font-display font-semibold text-accent-forest mb-4">
            Join the community
          </h2>

          <p className="text-body-lg text-accent-forest mb-4">
            Join other Australian families already on the priority waitlist
          </p>

          <p className="text-body-md text-accent-forest mb-8 max-w-3xl mx-auto">
            Get early access to life-changing specialist-approved treatment from
            home. Take the first step toward food confidence for your family.
          </p>

          <button className="bg-accent-terracotta hover:bg-accent-terracotta/90 text-white px-8 py-4 rounded-xl font-medium transition-all mb-6">
            Join our priority waitlist
          </button>

          <p className="text-sm text-accent-forest mb-12">
            Free to join • No commitment required
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-forest mb-2">
                500+
              </div>
              <div className="text-sm text-accent-forest">Families joined</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-forest mb-2">
                100%
              </div>
              <div className="text-sm text-accent-forest">AU-based care</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-forest mb-2">
                24/7
              </div>
              <div className="text-sm text-accent-forest">
                Support available
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
