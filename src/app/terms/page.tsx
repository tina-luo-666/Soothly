import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - Soothly",
  description:
    "Soothly's Terms of Service - Terms and conditions for using our platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-warm-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display-md font-display font-bold text-forest-green mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-body-md text-warm-gray mb-8">
              Last updated: {new Date().toLocaleDateString("en-AU")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-body-md text-warm-gray mb-4">
                By accessing and using Soothly's services, you accept and agree
                to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                Medical Disclaimer
              </h2>
              <div className="bg-forest-green/5 border border-forest-green/20 rounded-xl p-6 mb-4">
                <p className="text-body-md text-forest-green font-medium mb-2">
                  Important Medical Notice
                </p>
                <p className="text-body-sm text-forest-green/80">
                  Soothly is not a substitute for medical advice, diagnosis, or
                  treatment. Always seek the advice of your physician or other
                  qualified health provider with any questions you may have
                  regarding a medical condition. If you suspect anaphylaxis or
                  have any medical concerns, call 000 immediately.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                Use of Service
              </h2>
              <p className="text-body-md text-warm-gray mb-4">
                You agree to use our service only for lawful purposes and in
                accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc list-inside text-body-md text-warm-gray mb-4 space-y-2">
                <li>
                  Use the service for any unlawful purpose or to solicit others
                  to perform unlawful acts
                </li>
                <li>
                  Violate any international, federal, provincial, or state
                  regulations, rules, laws, or local ordinances
                </li>
                <li>
                  Transmit or procure the sending of any advertising or
                  promotional material without our prior written consent
                </li>
                <li>
                  Impersonate or attempt to impersonate another person or entity
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                User Responsibilities
              </h2>
              <p className="text-body-md text-warm-gray mb-4">
                As a user of our service, you are responsible for:
              </p>
              <ul className="list-disc list-inside text-body-md text-warm-gray mb-4 space-y-2">
                <li>Providing accurate and complete information</li>
                <li>Maintaining the confidentiality of your account</li>
                <li>
                  Consulting with healthcare providers before making medical
                  decisions
                </li>
                <li>Following safety guidelines and recommendations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                Limitation of Liability
              </h2>
              <p className="text-body-md text-warm-gray mb-4">
                In no event shall Soothly, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                Changes to Terms
              </h2>
              <p className="text-body-md text-warm-gray mb-4">
                We reserve the right to modify or replace these Terms at any
                time. If a revision is material, we will try to provide at least
                30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                Contact Information
              </h2>
              <p className="text-body-md text-warm-gray mb-4">
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <div className="bg-white rounded-xl p-6 border border-sage-green/20">
                <p className="text-body-md text-warm-gray">
                  Email:{" "}
                  <a
                    href="mailto:legal@soothly.com.au"
                    className="text-sage-green hover:text-forest-green"
                  >
                    legal@soothly.com.au
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
