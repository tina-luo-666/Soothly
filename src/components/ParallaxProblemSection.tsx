"use client";

import { Heart, Brain, DollarSign, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const problems = [
  {
    icon: Heart,
    title: "social isolation",
    description:
      "We know how hard it is when birthday cake becomes a worry instead of a celebration, or when you find yourself saying &apos;maybe next time&apos; to playdates because managing allergies feels overwhelming",
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
      "Living hours away from the nearest specialist shouldn&apos;t mean your family has to choose between expert care and staying close to home",
    color: "primary-sage",
  },
];

export default function ParallaxProblemSection() {
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
      id="problems"
      className="relative min-h-screen bg-white overflow-hidden"
    >
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-cream/20 via-white to-primary-sage/10"></div>

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Problem Container */}
        <div className="mb-16">
          <div
            className="p-4 lg:p-6 max-w-5xl mx-auto"
            style={
              {
                // backgroundColor: "#FFFFFF",
                // boxShadow: `
                //   0 20px 40px rgba(0, 0, 0, 0.15),
                //   0 8px 16px rgba(0, 0, 0, 0.1),
                //   inset 0 1px 0 rgba(255, 255, 255, 0.1)
                // `,
                // border: `1px solid rgba(255, 255, 255, 0.1)`,
              }
            }
          >
            <h2
              className="text-display-xl lg:text-display-2xl font-display font-semibold mb-6 text-center"
              style={{
                color: "#4A5D3A",
                fontFamily: "Avenir Next, system-ui, sans-serif",
                fontSize: "28px",
                transform: `scale(${1 + scrollY * 0.8})`,
                transition: "transform 0.1s ease-out",
                opacity: 0.8 + scrollY * 0.2,
              }}
            >
              THE PROBLEM
            </h2>
            <p
              className="text-xl lg:text-2xl leading-relaxed text-center"
              style={{
                color: "#4A5D3A",
                fontFamily: "Avenir Next, system-ui, sans-serif",
                transform: `scale(${1 + scrollY * 0.6})`,
                transition: "transform 0.1s ease-out",
                opacity: 0.8 + scrollY * 0.2,
              }}
            >
              While Australia excels at emergency medical care, we&apos;re
              failing families who need help transitioning from complete food
              avoidance to confident, normal living.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen">
          {/* Left Side - Video with Parallax */}
          <div className="relative">
            <div
              className="relative w-full max-w-xl mx-auto lg:mx-0 pl-0"
              style={{
                transform: `translateY(${scrollY * 50}px) translateX(${
                  -50 + scrollY * 80
                }px) scale(${0.7 + scrollY * 0.4})`,
                transition: "transform 0.1s ease-out",
                opacity: isVisible ? 1 : 0.3,
              }}
            >
              {/* Video Container */}
              <div
                className="relative aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl bg-gray-100"
                style={{
                  transform: `rotateY(${scrollY * 5}deg) rotateX(${
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
                  <source src="/problem-video.mp4" type="video/mp4" />
                  {/* Placeholder for video */}
                  <div className="w-full h-full bg-gradient-to-br from-primary-sage/20 to-primary-coral/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-primary-sage/30 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-primary-sage"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-primary-sage font-medium">
                        Video placeholder
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Upload your vertical video here
                      </p>
                    </div>
                  </div>
                </video>

                {/* Video overlay for subtle effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Floating elements for visual interest */}
              <div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary-coral/20 rounded-full blur-sm"
                style={{
                  transform: `translateY(${scrollY * -30}px) translateX(${
                    scrollY * 15
                  }px) scale(${1 + scrollY * 0.2})`,
                  transition: "transform 0.1s ease-out",
                  opacity: 0.6 + scrollY * 0.4,
                }}
              ></div>
              <div
                className="absolute -bottom-6 -left-6 w-12 h-12 bg-supporting-blue/20 rounded-full blur-sm"
                style={{
                  transform: `translateY(${scrollY * 20}px) translateX(${
                    scrollY * -10
                  }px) scale(${1 - scrollY * 0.1})`,
                  transition: "transform 0.1s ease-out",
                  opacity: 0.4 + scrollY * 0.6,
                }}
              ></div>
              <div
                className="absolute top-1/2 -left-8 w-6 h-6 bg-primary-sage/30 rounded-full blur-sm"
                style={{
                  transform: `translateY(${scrollY * -15}px) translateX(${
                    scrollY * 25
                  }px) rotate(${scrollY * 45}deg)`,
                  transition: "transform 0.1s ease-out",
                  opacity: 0.3 + scrollY * 0.7,
                }}
              ></div>
            </div>
          </div>

          {/* Right Side - Problem Text and Cards */}
          <div
            className="space-y-6 lg:space-y-8 px-4 lg:px-0"
            style={{
              transform: `translateY(${scrollY * -20}px) translateX(${
                scrollY * 30
              }px)`,
              transition: "transform 0.1s ease-out",
              opacity: isVisible ? 1 : 0.7,
            }}
          >
            {/* Problem Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {problems.map((problem, index) => {
                const IconComponent = problem.icon;
                return (
                  <div
                    key={index}
                    className="group rounded-2xl p-8 transition-all duration-1000 hover:-translate-y-3 relative overflow-hidden"
                    style={{
                      backgroundColor: "#4A5D3A",
                      boxShadow: `
                        0 20px 40px rgba(0, 0, 0, 0.3),
                        0 8px 16px rgba(0, 0, 0, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1),
                        inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                      `,
                      border: `1px solid rgba(255, 255, 255, 0.1)`,
                      animationDelay: `${index * 0.1}s`,
                      transform: `translateY(${
                        scrollY * (10 + index * 5)
                      }px) translateX(${scrollY * (5 + index * 2)}px) scale(${
                        1 - scrollY * 0.02
                      }) rotateX(${scrollY * 2}deg) rotateY(${scrollY * 1}deg)`,
                      transition:
                        "transform 0.1s ease-out, box-shadow 0.3s ease-out",
                      opacity: 0.8 + scrollY * 0.2,
                    }}
                  >
                    {/* Fade overlay on all edges */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: `
      radial-gradient(
        circle,
        rgba(74, 93, 58, 0) 70%,     /* center fully transparent */
        rgba(74, 93, 58, 0.6) 100%  /* edges softly faded */
      )
    `,
                        mixBlendMode: "multiply",
                      }}
                    ></div>

                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300`}
                      style={{
                        backgroundColor: "transparent",
                        boxShadow: `
                          0 4px 8px rgba(0, 0, 0, 0.2),
                          inset 0 1px 0 rgba(255, 255, 255, 0.3),
                          inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                        `,
                        border: `2px solid #87A96B`,
                      }}
                    >
                      <IconComponent
                        className={`w-6 h-6 text-${problem.color} drop-shadow-sm`}
                        style={{
                          filter: `drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))`,
                        }}
                      />
                    </div>

                    <h3
                      className="text-lg font-display font-semibold mb-3"
                      style={{
                        color: "#F7F5F0",
                      }}
                    >
                      {problem.title}
                    </h3>

                    <p
                      className="text-body-sm leading-relaxed"
                      style={{
                        color: "#F7F5F0",
                      }}
                    >
                      {problem.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-sage/5 rounded-full blur-3xl -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary-coral/5 rounded-full blur-3xl translate-x-1/2"></div>
    </section>
  );
}
