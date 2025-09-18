"use client";

import { TrendingUp, Users, Truck, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate scroll progress (0 to 1)
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - elementTop) / (windowHeight + elementHeight)
          )
        );

        // Check if section is visible
        const visibility =
          elementTop < windowHeight && elementTop > -elementHeight;
        setIsVisible(visibility);

        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-16 lg:py-24 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-display-md font-display font-semibold text-forest-green mb-6">
            How Lighthause works
          </h2>
          <p className="text-body-lg text-warm-gray max-w-3xl mx-auto">
            Our approach combines proven clinical methods with the convenience
            and comfort of home-based care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Features */}
          <div
            className="space-y-6 lg:space-y-8 px-4 lg:px-0"
            style={{
              transform: `translateY(${scrollY * -20}px) translateX(${
                scrollY * -30
              }px)`,
              transition: "transform 0.1s ease-out",
              opacity: isVisible ? 1 : 0.7,
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 -mt-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="text-center group bg-white rounded-2xl p-6 shadow-soft border border-sage-green/20 hover:shadow-ambient transition-all duration-300"
                    style={{
                      transform: `translateY(${
                        scrollY * (10 + index * 5)
                      }px) translateX(${scrollY * (-5 - index * 2)}px) scale(${
                        1 - scrollY * 0.02
                      })`,
                      transition: "transform 0.1s ease-out, box-shadow 0.3s ease-out",
                      opacity: 0.8 + scrollY * 0.2,
                    }}
                  >
                    <div
                      className={`w-16 h-16 bg-${feature.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent
                        className={`w-8 h-8 text-${feature.color}`}
                      />
                    </div>

                    <h3 className="text-lg font-display font-semibold text-forest-green mb-3">
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

          {/* Right Side - Video with Parallax */}
          <div className="relative">
            <div
              className="relative w-full max-w-xl mx-auto lg:ml-auto lg:mr-0"
              style={{
                transform: `translateY(${scrollY * 50}px) translateX(${
                  50 - scrollY * 80
                }px) scale(${0.7 + scrollY * 0.4})`,
                transition: "transform 0.1s ease-out",
                opacity: isVisible ? 1 : 0.3,
              }}
            >
              {/* Video Container */}
              <div
                className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-gray-100"
                style={{
                  transform: `rotateY(${-scrollY * 5}deg) rotateX(${
                    scrollY * 2
                  }deg)`,
                  transition: "transform 0.1s ease-out",
                  filter: `brightness(${1 - scrollY * 0.1}) contrast(${
                    1 + scrollY * 0.05
                  })`,
                }}
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/video-poster.svg"
                >
                  <source src="/how-it-works-video.mp4" type="video/mp4" />
                  {/* Placeholder for video */}
                  <div className="w-full h-full bg-gradient-to-br from-sage-green/20 to-golden-honey/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-sage-green/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-sage-green"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-sage-green font-medium">
                        How it works video
                      </p>
                    </div>
                  </div>
                </video>

                {/* Video overlay for subtle effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Floating elements for visual interest */}
              <div
                className="absolute -top-4 -left-4 w-8 h-8 bg-sage-green/20 rounded-full blur-sm"
                style={{
                  transform: `translateY(${scrollY * -30}px) translateX(${
                    -scrollY * 15
                  }px) scale(${1 + scrollY * 0.2})`,
                  transition: "transform 0.1s ease-out",
                  opacity: 0.6 + scrollY * 0.4,
                }}
              ></div>
              <div
                className="absolute -bottom-6 -right-6 w-12 h-12 bg-golden-honey/20 rounded-full blur-sm"
                style={{
                  transform: `translateY(${scrollY * 20}px) translateX(${
                    scrollY * 10
                  }px) scale(${1 - scrollY * 0.1})`,
                  transition: "transform 0.1s ease-out",
                  opacity: 0.4 + scrollY * 0.6,
                }}
              ></div>
              <div
                className="absolute top-1/2 -right-8 w-6 h-6 bg-dusty-blue/30 rounded-full blur-sm"
                style={{
                  transform: `translateY(${scrollY * -15}px) translateX(${
                    scrollY * -25
                  }px) rotate(${-scrollY * 45}deg)`,
                  transition: "transform 0.1s ease-out",
                  opacity: 0.3 + scrollY * 0.7,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
