import posthog from "posthog-js";
import { config } from "./config";

// Initialize PostHog
export function initPostHog() {
  if (typeof window !== "undefined" && config.posthog.key) {
    posthog.init(config.posthog.key, {
      api_host: config.posthog.host,
      loaded: (posthog) => {
        if (process.env.NODE_ENV === "development") {
          posthog.debug();
        }
      },
    });
  }
}

// Analytics events
export const analytics = {
  // Landing page events
  lpView: (props: {
    variant?: string;
    referrer?: string;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
  }) => {
    posthog.capture("lp_view", props);
  },

  lpScrollSection: (sectionId: string) => {
    posthog.capture("lp_scroll_section", { section_id: sectionId });
  },

  // Waitlist form events
  waitlistOpen: () => {
    posthog.capture("waitlist_open");
  },

  waitlistSubmitAttempt: (hasErrors: boolean) => {
    posthog.capture("waitlist_submit_attempt", { has_errors: hasErrors });
  },

  waitlistSubmitSuccess: (props: {
    age_bracket: string;
    primary_allergy: string;
    location_state: string;
  }) => {
    posthog.capture("waitlist_submit_success", props);
  },

  // FAQ events
  faqExpand: (questionId: string) => {
    posthog.capture("faq_expand", { question_id: questionId });
  },

  // Custom events
  customEvent: (eventName: string, properties?: Record<string, any>) => {
    posthog.capture(eventName, properties);
  },
};

// Hook for tracking scroll depth
export function useScrollTracking() {
  if (typeof window === "undefined") return;

  const sections = [
    "hero",
    "problems",
    "introduction",
    "features",
    "how-it-works",
    "evidence",
    "faq",
    "final-cta",
  ];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sections.includes(sectionId)) {
            analytics.lpScrollSection(sectionId);
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }
  });

  return () => observer.disconnect();
}
