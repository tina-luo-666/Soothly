// Configuration file for environment variables
// Copy this to .env.local and fill in your actual values

export const config = {
  // Supabase Configuration
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  },

  // PostHog Analytics
  posthog: {
    key: process.env.NEXT_PUBLIC_POSTHOG_KEY || "",
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
  },

  // Email Configuration
  email: {
    resendApiKey: process.env.RESEND_API_KEY || "",
    fromEmail: process.env.FROM_EMAIL || "noreply@soothly.com.au",
  },

  // App Configuration
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3001",
  },
};

// Environment variables needed:
// NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
// NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
// NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
// NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
// RESEND_API_KEY=your_resend_api_key
// FROM_EMAIL=noreply@soothly.com.au
// NEXT_PUBLIC_APP_URL=http://localhost:3000
