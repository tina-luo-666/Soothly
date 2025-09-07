import AnalyticsProvider from "@/components/AnalyticsProvider";
import Hero from "@/components/Hero";
import ProblemCards from "@/components/ProblemCards";
import WaitlistForm from "@/components/WaitlistForm";
import Introduction from "@/components/Introduction";
import FeatureIcons from "@/components/FeatureIcons";
import HowItWorks from "@/components/HowItWorks";
import Evidence from "@/components/Evidence";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <AnalyticsProvider>
      <div className="min-h-screen">
        <Hero />
        <ProblemCards />

        {/* Waitlist Section - Below the fold */}
        <section id="waitlist" className="bg-primary-cream py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </section>

        <Introduction />
        <FeatureIcons />
        <HowItWorks />
        <Evidence />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </AnalyticsProvider>
  );
}
