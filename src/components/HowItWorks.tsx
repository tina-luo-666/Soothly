"use client";

import { CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Start small",
    description:
      "Join the waitlist and answer a few gentle questions about your family&apos;s needs and comfort level.",
    icon: "🌱",
  },
  {
    number: 2,
    title: "Match & plan",
    description:
      "We outline a step-by-step path designed specifically for your family, taking into account your child&apos;s age, allergies, and readiness.",
    icon: "🗺️",
  },
  {
    number: 3,
    title: "Grow confidence",
    description:
      "Celebrate milestones together as you progress through carefully designed activities, pausing when needed.",
    icon: "🌱",
  },
  {
    number: 4,
    title: "Ongoing support",
    description:
      "Receive plain-language check-ins and expert guidance throughout your journey, with adjustments as needed.",
    icon: "🤝",
  },
];

export default function HowItWorks() {
  return (
    <section id="form" className="py-16 lg:py-24 bg-warm-cream relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster="/video-poster.svg"
        >
          <source src="/faq-background-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don&apos;t support video */}
          <div className="w-full h-full bg-gradient-to-br from-sage-green/20 to-warm-cream/20"></div>
        </video>
        {/* Video overlay for better content readability */}
        <div className="absolute inset-0 bg-warm-cream/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-display font-semibold text-forest-green mb-6">
            Your journey to food confidence
          </h2>
          <p className="text-body-lg text-warm-gray max-w-3xl mx-auto">
            We believe in taking small, manageable steps that build confidence
            over time. Here&apos;s how the process works.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Progress line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-sage-green/20 transform translate-x-6 z-0"></div>
                )}

                <div className="relative bg-white rounded-2xl p-8 shadow-soft border border-sage-green/20 hover:shadow-ambient transition-shadow">
                  {/* Step number and icon */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-sage-green rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <div className="text-3xl">{step.icon}</div>
                  </div>

                  <h3 className="text-xl font-display font-semibold text-forest-green mb-4">
                    {step.title}
                  </h3>

                  <p className="text-body-sm text-warm-gray leading-relaxed">
                    {step.description}
                  </p>

                  {/* Check mark for completed steps */}
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-6 h-6 text-sage-green/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile progress indicator */}
          <div className="flex justify-center mt-8 md:hidden">
            <div className="flex items-center gap-2">
              {steps.map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-sage-green rounded-full"></div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-sage-green/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
