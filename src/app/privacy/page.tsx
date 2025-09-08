import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Soothly",
  description:
    "Soothly's Privacy Policy - How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-warm-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display-md font-display font-bold text-forest-green mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-body-md text-warm-gray mb-8">
              Last updated: {new Date().toLocaleDateString("en-AU")}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                Introduction
              </h2>
              <p className="text-body-md text-warm-gray mb-4">
                Soothly (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                Information We Collect
              </h2>
              <h3 className="text-xl font-display font-semibold text-forest-green mb-3">
                Personal Information
              </h3>
              <p className="text-body-md text-warm-gray mb-4">
                We may collect the following types of personal information:
              </p>
              <ul className="list-disc list-inside text-body-md text-warm-gray mb-4 space-y-2">
                <li>
                  Name and contact information (email address, phone number)
                </li>
                <li>Location information (city, state)</li>
                <li>Child&apos;s age and allergy information</li>
                <li>Health-related information you choose to share</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                How We Use Your Information
              </h2>
              <p className="text-body-md text-warm-gray mb-4">
                We use your personal information to:
              </p>
              <ul className="list-disc list-inside text-body-md text-warm-gray mb-4 space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our platform</li>
                <li>Personalize your experience</li>
                <li>Send you relevant health information and tips</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                Information Sharing
              </h2>
              <p className="text-body-md text-warm-gray mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy or as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                Data Security
              </h2>
              <p className="text-body-md text-warm-gray mb-4">
                We implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                Your Rights
              </h2>
              <p className="text-body-md text-warm-gray mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-body-md text-warm-gray mb-4 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-semibold text-forest-green mb-4">
                Contact Us
              </h2>
              <p className="text-body-md text-warm-gray mb-4">
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <div className="bg-white rounded-xl p-6 border border-sage-green/20">
                <p className="text-body-md text-warm-gray">
                  Email:{" "}
                  <a
                    href="mailto:privacy@soothly.com.au"
                    className="text-sage-green hover:text-forest-green"
                  >
                    privacy@soothly.com.au
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
