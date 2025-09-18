import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Lighthause - Australia's First Evidence-Based Food Allergy Exposure Therapy Platform",
  description:
    "Transform food anxiety into confidence with Australia's first evidence-based exposure therapy platform. Join our priority waitlist for early access to specialist-approved treatment from home.",
  keywords: [
    "food allergy",
    "exposure therapy",
    "Australia",
    "children",
    "anxiety",
    "allergy treatment",
    "home care",
  ],
  authors: [{ name: "Lighthause Team" }],
  creator: "Lighthause",
  publisher: "Lighthause",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://soothly.com.au"),
  openGraph: {
    title:
      "Lighthause - Australia's First Evidence-Based Food Allergy Exposure Therapy Platform",
    description:
      "Transform food anxiety into confidence with Australia's first evidence-based exposure therapy platform. Join our priority waitlist for early access.",
    url: "https://soothly.com.au",
    siteName: "Lighthause",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lighthause - Australia's First Evidence-Based Food Allergy Exposure Therapy Platform",
    description:
      "Transform food anxiety into confidence with Australia's first evidence-based exposure therapy platform.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body className="antialiased">{children}</body>
    </html>
  );
}
