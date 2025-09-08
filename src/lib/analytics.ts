import posthog from "posthog-js";
import { config } from "./config";

// Initialize PostHog
export function initPostHog() {
  if (
    typeof window !== "undefined" &&
    config.posthog.key &&
    config.posthog.key.trim() !== ""
  ) {
    try {
      posthog.init(config.posthog.key, {
        api_host: config.posthog.host,
        loaded: (posthog) => {
          if (process.env.NODE_ENV === "development") {
            posthog.debug();
          }
        },
      });
    } catch (error) {
      console.warn("Failed to initialize PostHog:", error);
    }
  } else {
    console.warn(
      "PostHog not initialized: Missing or invalid API key. Please set NEXT_PUBLIC_POSTHOG_KEY in your .env.local file."
    );
  }
}

// Helper function to safely capture events
function safeCapture(eventName: string, properties?: Record<string, unknown>) {
  try {
    if (
      typeof window !== "undefined" &&
      posthog &&
      config.posthog.key &&
      config.posthog.key.trim() !== ""
    ) {
      posthog.capture(eventName, properties);
    }
  } catch (error) {
    console.warn(`Failed to capture event "${eventName}":`, error);
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
    safeCapture("lp_view", props);
  },

  lpScrollSection: (sectionId: string) => {
    safeCapture("lp_scroll_section", { section_id: sectionId });
  },

  // Waitlist form events
  waitlistOpen: () => {
    safeCapture("waitlist_open");
  },

  waitlistSubmitAttempt: (hasErrors: boolean) => {
    safeCapture("waitlist_submit_attempt", { has_errors: hasErrors });
  },

  waitlistSubmitSuccess: (props: {
    age_bracket: string;
    primary_allergy: string;
    location_state: string;
  }) => {
    safeCapture("waitlist_submit_success", props);
  },

  // FAQ events
  faqExpand: (questionId: string) => {
    safeCapture("faq_expand", { question_id: questionId });
  },

  // Custom events
  customEvent: (eventName: string, properties?: Record<string, unknown>) => {
    safeCapture(eventName, properties);
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
