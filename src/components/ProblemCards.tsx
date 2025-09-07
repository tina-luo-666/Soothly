"use client";

import { Heart, Brain, DollarSign, MapPin } from "lucide-react";

const problems = [
  {
    icon: Heart,
    title: "social isolation",
    description:
      "We know how hard it is when birthday cake becomes a worry instead of a celebration, or when you find yourself saying 'maybe next time' to playdates because managing allergies feels overwhelming",
    color: "primary-coral",
  },
  {
    icon: Brain,
    title: "anxiety",
    description:
      "When every lunch table feels like a minefield and your child starts asking to stay home, we understand that the worry has gotten too big",
    color: "supporting-blue",
  },
  {
    icon: DollarSign,
    title: "financial strain",
    description:
      "Between specialist visits that stretch the family budget and taking time off work for appointments, it feels like food allergies are affecting every part of your life",
    color: "supporting-honey",
  },
  {
    icon: MapPin,
    title: "geographic barriers",
    description:
      "Living hours away from the nearest specialist shouldn't mean your family has to choose between expert care and staying close to home",
    color: "primary-sage",
  },
];

export default function ProblemCards() {
  return (
    <section id="problems" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-display font-semibold text-accent-forest mb-6">
            Problem
          </h2>
          <p className="text-body-lg text-supporting-gray max-w-3xl mx-auto">
            While Australia excels at emergency medical care, we're failing
            families who need help transitioning from complete food avoidance to
            confident, normal living.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="group bg-primary-cream rounded-2xl p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-16 h-16 bg-${problem.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <IconComponent className={`w-8 h-8 text-${problem.color}`} />
                </div>

                <h3 className="text-xl font-display font-semibold text-accent-forest mb-4">
                  {problem.title}
                </h3>

                <p className="text-body-sm text-supporting-gray leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile carousel indicator */}
        <div className="flex justify-center mt-8 lg:hidden">
          <div className="flex gap-2">
            {problems.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-primary-sage/30 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
