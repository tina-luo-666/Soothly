import type { Metadata } from "next";
import { CheckCircle, Mail, Heart } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thank You - Lighthause",
  description:
    "Thank you for joining the Lighthause waitlist. We&apos;ll be in touch soon with early access details.",
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-warm-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-sage-green mx-auto mb-6" />
            <h1 className="text-display-md font-display font-bold text-forest-green mb-4">
              You&apos;re on the list! 🎉
            </h1>
            <p className="text-body-lg text-warm-gray">
              Thank you for joining our priority waitlist. We&apos;re excited to help
              your family on this journey.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft border border-sage-green/20 mb-8">
            <h2 className="text-2xl font-display font-semibold text-forest-green mb-6">
              What happens next?
            </h2>

            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sage-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-5 h-5 text-sage-green" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-forest-green mb-2">
                    Check your email
                  </h3>
                  <p className="text-body-sm text-warm-gray">
                    We&apos;ll send you a confirmation email with next steps and
                    gentle tips to help your family start building confidence
                    around food.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sage-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-5 h-5 text-sage-green" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-forest-green mb-2">
                    Early access updates
                  </h3>
                  <p className="text-body-sm text-warm-gray">
                    You&apos;ll be among the first to know when we launch, with
                    exclusive early access to our platform and special launch
                    pricing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-sage-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-sage-green" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-forest-green mb-2">
                    Gentle guidance
                  </h3>
                  <p className="text-body-sm text-warm-gray">
                    In the meantime, we&apos;ll send you simple, evidence-based tips
                    to help your family take small, confident steps toward food
                    confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-sage-green/5 rounded-xl p-6 border border-sage-green/20">
            <h3 className="font-display font-semibold text-forest-green mb-3">
              Questions or need to update your information?
            </h3>
            <p className="text-body-sm text-warm-gray mb-4">
              We&apos;re here to help. Feel free to reach out if you have any
              questions or need to make changes to your waitlist information.
            </p>
            <a
              href="mailto:hello@soothly.com.au"
              className="inline-flex items-center gap-2 text-sage-green hover:text-forest-green font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact our team
            </a>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sage-green hover:text-forest-green font-medium transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
