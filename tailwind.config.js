/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Beacon IR Brand Colors (Official Styleguide v1.0)
        "deep-navy": "#0E1525", // Primary - Backgrounds, UI sections
        "beacon-gold": "#F5C55A", // Accent - Icon, IR highlight, CTA elements
        "pure-white": "#FFFFFF", // Secondary - Logo text, body on dark
        "slate-gray": "#94A3B8", // Neutral warm gray
        "signal-blue": "#3A8DFF", // Utility - Interactive highlights (optional)

        // Enhanced color variations for better blue/gold theme
        "navy-light": "#1B2433", // Lighter navy for subtle backgrounds
        "navy-mid": "#252F40", // Medium navy for cards
        "stone-gray": "#A8A29E", // Warm neutral gray for text
        "slate-light": "#CBD5E1", // Light warm gray for secondary text
        "gold-light": "#F9D979", // Lighter gold for accents
        "gold-dark": "#D4A74A", // Darker gold for hover states

        // Semantic aliases for backward compatibility
        "primary-navy": "#0E1525",
        "accent-gold": "#F5C55A",
        "text-primary": "#FFFFFF",
        "text-secondary": "#A8A29E", // Updated to warm stone-gray
        "background-primary": "#0E1525",
        "background-secondary": "#1B2433", // navy-light
        "background-accent": "#252F40", // navy-mid
      },
      fontFamily: {
        sans: ["Satoshi-Variable", "Satoshi Variable"],
        serif: ["Satoshi-Variable", "Satoshi Variable"],
        mono: ["Satoshi-Variable", "Satoshi Variable"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
