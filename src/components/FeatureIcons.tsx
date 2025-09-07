"use client";

import { TrendingUp, Users, Truck, Heart } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "Graduated exposure",
    description:
      "We'll walk alongside you through carefully designed, small steps that build confidence one step at a time.",
    color: "sage-green",
  },
  {
    icon: Users,
    title: "Expert oversight",
    description:
      "You'll have qualified clinicians in your corner, providing guidance and support throughout your journey.",
    color: "dusty-blue",
  },
  {
    icon: Truck,
    title: "Home delivery",
    description:
      "Whether you're in the city or on a farm, our platform brings expert care directly to your kitchen.",
    color: "soft-coral",
  },
  {
    icon: Heart,
    title: "Whole family",
    description:
      "Everyone who loves your child can learn and participate, creating a supportive environment for growth.",
    color: "golden-honey",
  },
];

export default function FeatureIcons() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-display font-semibold text-forest-green mb-6">
            How Soothly works
          </h2>
          <p className="text-body-lg text-warm-gray max-w-3xl mx-auto">
            Our approach combines proven clinical methods with the convenience
            and comfort of home-based care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 bg-${feature.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent
                    className={`w-10 h-10 text-${feature.color}`}
                  />
                </div>

                <h3 className="text-xl font-display font-semibold text-forest-green mb-4">
                  {feature.title}
                </h3>

                <p className="text-body-sm text-warm-gray leading-relaxed">
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
