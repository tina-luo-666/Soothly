# Soothly Waitlist Landing Page

Australia's first evidence-based food allergy exposure therapy platform - waitlist landing page.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Accessibility**: WCAG AA compliant with proper focus states and screen reader support
- **Analytics**: PostHog integration for tracking user behavior and conversions
- **Database**: Supabase integration for collecting waitlist signups
- **Form Validation**: Client-side validation with helpful error messages
- **SEO Optimized**: Proper meta tags, Open Graph, and structured data

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Database**: Supabase (PostgreSQL)
- **Analytics**: PostHog
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Design System

### Colors

- **Primary**: Sage Green (#87A96B)
- **Background**: Warm Cream (#F7F5F0)
- **Accent**: Soft Coral (#E8A598)
- **Supporting**: Dusty Blue (#7D8DC1), Warm Gray (#A69B95), Golden Honey (#E6B866)
- **Serious**: Forest Green (#4A5D3A)
- **CTA**: Terracotta (#B7704F)

### Typography

- **Headlines**: Avenir Next / Source Sans Pro (600/700)
- **Body**: Georgia / Crimson Text (400/500, 18-20px)
- **UI/Form**: Inter / Open Sans (400/500)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com

# Email Configuration (optional)
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@soothly.com.au

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Database Setup

Create a Supabase project and run the following SQL to create the waitlist_signups table:

```sql
CREATE TABLE waitlist_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  age_bracket TEXT NOT NULL,
  primary_allergy TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT FALSE,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer TEXT
);

-- Create indexes for better performance
CREATE INDEX idx_waitlist_signups_email ON waitlist_signups(email);
CREATE INDEX idx_waitlist_signups_created_at ON waitlist_signups(created_at);
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Analytics Events

The application tracks the following events in PostHog:

- `lp_view`: Landing page view with UTM parameters
- `lp_scroll_section`: When user scrolls to specific sections
- `waitlist_open`: When user focuses on the waitlist form
- `waitlist_submit_attempt`: Form submission attempt (with error status)
- `waitlist_submit_success`: Successful form submission
- `faq_expand`: When user expands FAQ items

## Pages

- `/` - Main landing page
- `/privacy` - Privacy policy
- `/terms` - Terms of service
- `/thanks` - Thank you page after form submission

## Form Fields

The waitlist form collects:

- Parent/Guardian name (required)
- Email address (required, validated)
- Location - city/state (required)
- Child's age bracket (required dropdown)
- Primary food allergy concern (required dropdown)
- Consent checkbox (required)

## Accessibility Features

- Proper heading hierarchy (h1, h2, h3)
- ARIA labels and descriptions
- Focus management and visible focus states
- Screen reader friendly form validation
- High contrast ratios (WCAG AA compliant)
- Keyboard navigation support

## Performance

- Optimized images and fonts
- Lazy loading for non-critical components
- Minimal JavaScript bundle
- Efficient CSS with Tailwind's purging

## Deployment

The application is ready for deployment on Vercel, Netlify, or any other Next.js hosting platform. Make sure to set up the environment variables in your deployment environment.

## Support

For questions or support, contact the development team at hello@soothly.com.au
