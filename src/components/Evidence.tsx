"use client";

import { Shield, CheckCircle } from "lucide-react";

export default function Evidence() {
  return (
    <section id="evidence" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-display font-semibold text-forest-green mb-6">
              Evidence & safety
            </h2>
            <p className="text-body-lg text-warm-gray">
              Our approach is grounded in proven clinical methods and
              prioritizes safety above all else.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Evidence Points */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sage-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-sage-green" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-forest-green mb-2">
                    Evidence-based approach
                  </h3>
                  <p className="text-body-sm text-warm-gray">
                    Our approach is based on graduated exposure principles
                    widely used to help reduce anxiety and build confidence
                    around food.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sage-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-5 h-5 text-sage-green" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-forest-green mb-2">
                    Safety first
                  </h3>
                  <p className="text-body-sm text-warm-gray">
                    We prioritise safety, clarity, and small steps. Every
                    activity is designed with your child&apos;s wellbeing as the top
                    priority.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sage-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-sage-green" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-forest-green mb-2">
                    Qualified oversight
                  </h3>
                  <p className="text-body-sm text-warm-gray">
                    All programs are designed and overseen by qualified
                    clinicians with expertise in food allergy management and
                    exposure therapy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
