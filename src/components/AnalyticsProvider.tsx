"use client";

import { useEffect } from "react";
import { initPostHog, useScrollTracking } from "@/lib/analytics";

export default function AnalyticsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize PostHog
    initPostHog();

    // Set up scroll tracking
    const cleanup = useScrollTracking();

    // Track page view
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get("utm_source");
      const utmMedium = urlParams.get("utm_medium");
      const utmCampaign = urlParams.get("utm_campaign");

      // Import analytics here to avoid SSR issues
      import("@/lib/analytics").then(({ analytics }) => {
        analytics.lpView({
          variant: "default",
          referrer: document.referrer,
          utm_source: utmSource || undefined,
          utm_medium: utmMedium || undefined,
          utm_campaign: utmCampaign || undefined,
        });
      });
    }

    return cleanup;
  }, []);

  return <>{children}</>;
}
