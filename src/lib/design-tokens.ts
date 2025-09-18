/**
 * Design Tokens for Lighthause
 *
 * This file defines the design token system for the Lighthause application.
 * It provides type-safe access to colors, spacing, typography, and other design elements.
 */

// Color Design Tokens
export const colors = {
  // Primary Colors - Core brand identity
  primary: {
    sage: "#87A96B", // Growth, healing, natural progression
    cream: "#F7F5F0", // Safety, comfort, nurturing space
    coral: "#E8A598", // Gentle energy, encouragement, warmth
  },

  // Supporting Colors - Trust and reliability
  supporting: {
    blue: "#7D8DC1", // Trust, reliability, calm confidence
    gray: "#A69B95", // Grounded, practical, approachable expertise
    honey: "#E6B866", // Hope, optimism, small celebrations
  },

  // Accent Colors - Action and emphasis
  accent: {
    forest: "#4A5D3A", // For serious information, depth
    terracotta: "#B7704F", // For call-to-action elements
  },

  // Semantic color mappings
  background: {
    DEFAULT: "#F7F5F0", // warm-cream
    secondary: "#F7F5F0", // warm-cream
    muted: "#A69B95", // warm-gray
  },

  foreground: {
    DEFAULT: "#4A5D3A", // forest-green
    secondary: "#87A96B", // sage-green
    muted: "#A69B95", // warm-gray
  },

  // Interactive states
  interactive: {
    primary: "#87A96B", // sage-green
    secondary: "#E8A598", // soft-coral
    accent: "#B7704F", // terracotta
    hover: "#4A5D3A", // forest-green
  },

  // Status colors
  status: {
    success: "#87A96B", // sage-green
    warning: "#E6B866", // golden-honey
    error: "#B7704F", // terracotta
    info: "#7D8DC1", // dusty-blue
  },
} as const;

// Type definitions for design tokens
export type ColorToken = typeof colors;
export type PrimaryColor = keyof typeof colors.primary;
export type SupportingColor = keyof typeof colors.supporting;
export type AccentColor = keyof typeof colors.accent;
export type BackgroundColor = keyof typeof colors.background;
export type ForegroundColor = keyof typeof colors.foreground;
export type InteractiveColor = keyof typeof colors.interactive;
export type StatusColor = keyof typeof colors.status;

// Utility function to get color value
export function getColor(category: keyof ColorToken, variant: string): string {
  const colorCategory = colors[category];
  if (typeof colorCategory === "object" && colorCategory !== null) {
    return (colorCategory as Record<string, string>)[variant] || "";
  }
  return "";
}

// CSS Custom Properties mapping
export const cssCustomProperties = {
  "--primary-sage": colors.primary.sage,
  "--primary-cream": colors.primary.cream,
  "--primary-coral": colors.primary.coral,
  "--supporting-blue": colors.supporting.blue,
  "--supporting-gray": colors.supporting.gray,
  "--supporting-honey": colors.supporting.honey,
  "--accent-forest": colors.accent.forest,
  "--accent-terracotta": colors.accent.terracotta,
  "--background": colors.background.DEFAULT,
  "--background-secondary": colors.background.secondary,
  "--background-muted": colors.background.muted,
  "--foreground": colors.foreground.DEFAULT,
  "--foreground-secondary": colors.foreground.secondary,
  "--foreground-muted": colors.foreground.muted,
  "--interactive-primary": colors.interactive.primary,
  "--interactive-secondary": colors.interactive.secondary,
  "--interactive-accent": colors.interactive.accent,
  "--interactive-hover": colors.interactive.hover,
  "--status-success": colors.status.success,
  "--status-warning": colors.status.warning,
  "--status-error": colors.status.error,
  "--status-info": colors.status.info,
} as const;

// Tailwind class name utilities
export const tailwindClasses = {
  // Primary colors
  "bg-primary-sage": "bg-primary-sage",
  "bg-primary-cream": "bg-primary-cream",
  "bg-primary-coral": "bg-primary-coral",
  "text-primary-sage": "text-primary-sage",
  "text-primary-cream": "text-primary-cream",
  "text-primary-coral": "text-primary-coral",
  "border-primary-sage": "border-primary-sage",
  "border-primary-cream": "border-primary-cream",
  "border-primary-coral": "border-primary-coral",

  // Supporting colors
  "bg-supporting-blue": "bg-supporting-blue",
  "bg-supporting-gray": "bg-supporting-gray",
  "bg-supporting-honey": "bg-supporting-honey",
  "text-supporting-blue": "text-supporting-blue",
  "text-supporting-gray": "text-supporting-gray",
  "text-supporting-honey": "text-supporting-honey",
  "border-supporting-blue": "border-supporting-blue",
  "border-supporting-gray": "border-supporting-gray",
  "border-supporting-honey": "border-supporting-honey",

  // Accent colors
  "bg-accent-forest": "bg-accent-forest",
  "bg-accent-terracotta": "bg-accent-terracotta",
  "text-accent-forest": "text-accent-forest",
  "text-accent-terracotta": "text-accent-terracotta",
  "border-accent-forest": "border-accent-forest",
  "border-accent-terracotta": "border-accent-terracotta",

  // Interactive states
  "bg-interactive-primary": "bg-interactive-primary",
  "bg-interactive-secondary": "bg-interactive-secondary",
  "bg-interactive-accent": "bg-interactive-accent",
  "hover:bg-interactive-hover": "hover:bg-interactive-hover",

  // Status colors
  "bg-status-success": "bg-status-success",
  "bg-status-warning": "bg-status-warning",
  "bg-status-error": "bg-status-error",
  "bg-status-info": "bg-status-info",
  "text-status-success": "text-status-success",
  "text-status-warning": "text-status-warning",
  "text-status-error": "text-status-error",
  "text-status-info": "text-status-info",
} as const;

export type TailwindClass = keyof typeof tailwindClasses;
