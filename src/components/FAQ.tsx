"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { analytics } from "@/lib/analytics";

const faqs = [
  {
    id: "safety-severe-allergies",
    question: "Is Soothly safe for severe allergies?",
    answer:
      "Yes, our approach is designed with safety as the top priority. We work with families to assess their comfort level and design activities that are appropriate for their specific situation. All programs are overseen by qualified clinicians, and we always recommend consulting with your healthcare provider before starting any new approach.",
  },
  {
    id: "handling-reactions",
    question: "How do you handle reactions or setbacks?",
    answer:
      "Setbacks are a normal part of the process, and we're here to support you through them. Our platform includes guidance on recognizing and managing reactions, when to pause activities, and how to adjust your approach. We always prioritize your child's safety and wellbeing above all else.",
  },
  {
    id: "different-from-clinic",
    question: "What makes Soothly different from in-clinic care?",
    answer:
      "Soothly brings expert care to your home, allowing you to work at your own pace and in your own environment. Unlike traditional clinic visits, you have continuous support and can access guidance whenever you need it. Our approach is also more affordable and accessible, especially for families in regional areas.",
  },
  {
    id: "health-insurance",
    question: "Is this covered by private health insurance?",
    answer:
      "Coverage varies depending on your insurance provider and plan. We recommend checking with your insurance company about coverage for digital health programs and exposure therapy. We can provide documentation to support your claim if needed.",
  },
  {
    id: "multiple-caregivers",
    question: "Can multiple caregivers access the plan?",
    answer:
      "Absolutely! We understand that multiple people care for your child. Our platform allows you to share access with partners, grandparents, babysitters, or other trusted caregivers so everyone can be on the same page and provide consistent support.",
  },
  {
    id: "specialist-referral",
    question: "Do I need a specialist referral?",
    answer:
      "While we recommend consulting with your healthcare provider, you don't need a specialist referral to join our waitlist. Our team includes qualified clinicians who can work with you directly. However, we always encourage ongoing communication with your existing healthcare team.",
  },
  {
    id: "time-commitment",
    question: "How much time does this take each week?",
    answer:
      "The time commitment varies based on your family's needs and comfort level. Most families spend 15-30 minutes, 2-3 times per week on activities, plus time for planning and check-ins. The beauty of our approach is that you can adjust the pace to what works for your family.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    const isCurrentlyOpen = openItems.includes(id);

    setOpenItems((prev) =>
      isCurrentlyOpen ? prev.filter((item) => item !== id) : [...prev, id]
    );

    // Track FAQ expand events
    if (!isCurrentlyOpen) {
      analytics.faqExpand(id);
    }
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-sage-green/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-display-md font-display font-semibold text-forest-green mb-6">
              Frequently asked questions
            </h2>
            <p className="text-body-lg text-warm-gray">
              Here are the most common questions from parents like you—answered
              in plain English.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => {
              const isOpen = openItems.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-sage-green/20 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-sage-green/5 transition-colors focus:outline-none focus:ring-2 focus:ring-sage-green/20"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-display font-semibold text-forest-green pr-4">
                      {faq.question}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-sage-green flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-sage-green flex-shrink-0" />
                    )}
                  </button>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-body-sm text-warm-gray leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-body-sm text-warm-gray mb-4">
              Still have questions?
            </p>
            <a
              href="mailto:hello@soothly.com.au"
              className="inline-flex items-center gap-2 text-sage-green hover:text-forest-green font-medium transition-colors"
            >
              Contact our team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
