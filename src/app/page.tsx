import AnalyticsProvider from "@/components/AnalyticsProvider";
import Hero from "@/components/Hero";
import ProblemCards from "@/components/ProblemCards";
import Introduction from "@/components/Introduction";
import ParallaxProblemSection from "@/components/ParallaxProblemSection";
import FeatureIcons from "@/components/FeatureIcons";
import HowItWorks from "@/components/HowItWorks";
import Evidence from "@/components/Evidence";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <AnalyticsProvider>
      <div className="min-h-screen">
        <Hero />
        <ProblemCards />
        <Introduction />
        <ParallaxProblemSection />
        <FeatureIcons />
        <HowItWorks />
        <Evidence />
        <FAQ />
        <FinalCTA />

        {/* Waitlist Section - At the bottom of the page */}
        <section
          id="waitlist"
          className="bg-primary-cream py-16 relative overflow-hidden"
        >
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/faq-background-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Form Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </AnalyticsProvider>
  );
}
