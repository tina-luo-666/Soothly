"use client";

import { ArrowRight, Shield, Home, Users } from "lucide-react";

const features = [
  {
    icon: ArrowRight,
    title: "Graduated exposure",
    description:
      "We&apos;ll walk alongside you as your family builds confidence with food, one step at a time",
  },
  {
    icon: Shield,
    title: "Expert oversight",
    description:
      "You&apos;ll have an expert in your corner and someone to call when you need reassurance",
  },
  {
    icon: Home,
    title: "Home delivery",
    description:
      "Whether you&apos;re at home in the city or on a farm hours from town, support is right there within arm&apos;s reach",
  },
  {
    icon: Users,
    title: "Whole family",
    description:
      "Everyone who loves your child can learn how to be part of this journey - from grandparents to babysitters to big brothers and sisters",
  },
];

export default function Introduction() {
  return (
    <section id="introduction" className="py-16 lg:py-24 bg-primary-sage/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-display-md font-display font-semibold text-accent-forest mb-8">
            Introduction
          </h2>

          <h3 className="text-display-sm font-display font-semibold text-accent-forest mb-6">
            Introducing [name]
          </h3>

          <p className="text-body-lg text-supporting-gray leading-relaxed">
            Australia&apos;s first evidence-based exposure therapy platform designed
            to transform food anxiety into confidence, restriction into freedom
            and isolation into normal family life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-sage/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-primary-sage" />
                </div>

                <h4 className="text-lg font-display font-semibold text-accent-forest mb-4">
                  {feature.title}
                </h4>

                <p className="text-body-sm text-supporting-gray leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
