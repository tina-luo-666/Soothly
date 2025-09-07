import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
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

        // Legacy color names for backward compatibility
        "sage-green": "#87A96B",
        "warm-cream": "#F7F5F0",
        "soft-coral": "#E8A598",
        "dusty-blue": "#7D8DC1",
        "warm-gray": "#A69B95",
        "golden-honey": "#E6B866",
        "forest-green": "#4A5D3A",
        terracotta: "#B7704F",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: ["Georgia", "Times New Roman", "serif"],
        display: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-lg": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-md": ["2.5rem", { lineHeight: "1.2", fontWeight: "600" }],
        "display-sm": ["2rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["1.25rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 32px rgba(0, 0, 0, 0.08)",
        ambient: "0 16px 32px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
