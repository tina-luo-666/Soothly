"use client";

import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

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
                    activity is designed with your child's wellbeing as the top
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

            {/* Safety Notice */}
            <div className="bg-forest-green/5 border border-forest-green/20 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-8 h-8 bg-forest-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-forest-green" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-forest-green mb-2">
                    Important medical notice
                  </h3>
                  <p className="text-body-sm text-forest-green/80">
                    Soothly is not a substitute for medical advice. If you
                    suspect anaphylaxis or have any medical concerns, call 000
                    immediately.
                  </p>
                </div>
              </div>

              <div className="bg-white/60 rounded-xl p-4">
                <p className="text-sm text-forest-green font-medium mb-2">
                  Emergency contact
                </p>
                <p className="text-lg font-bold text-forest-green">000</p>
                <p className="text-xs text-forest-green/70 mt-1">
                  For life-threatening allergic reactions
                </p>
              </div>
            </div>
          </div>

          {/* Additional Safety Information */}
          <div className="bg-warm-cream rounded-2xl p-8 border border-sage-green/20">
            <h3 className="font-display font-semibold text-forest-green mb-4">
              What makes our approach different
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-forest-green mb-2">
                  Traditional clinic approach
                </h4>
                <ul className="text-sm text-warm-gray space-y-1">
                  <li>• Limited appointment availability</li>
                  <li>• One-size-fits-all programs</li>
                  <li>• Infrequent check-ins</li>
                  <li>• High cost per session</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-forest-green mb-2">
                  Soothly's approach
                </h4>
                <ul className="text-sm text-warm-gray space-y-1">
                  <li>• Continuous support and guidance</li>
                  <li>• Personalized for your family</li>
                  <li>• Regular progress monitoring</li>
                  <li>• Affordable ongoing care</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
