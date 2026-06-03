import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C5CE7",
          50:  "#F0EEFF",
          100: "#E3DFFF",
          200: "#C8BFFF",
          300: "#A99FFF",
          400: "#8B7EFF",
          500: "#6C5CE7",
          600: "#5A4BD1",
          700: "#483AB8",
          800: "#362B96",
          900: "#261E74",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          secondary: "#F8F8FD",
          tertiary: "#F0EFF8",
        },
        border: {
          DEFAULT: "#EEEEEE",
          light: "#F5F5F5",
        },
        "text-primary":   "#2D3436",
        "text-secondary": "#636E72",
        "text-muted":     "#B2BEC3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card:        "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover":"0 4px 16px rgba(0,0,0,0.08), 0 8px 32px rgba(108,92,231,0.10)",
        sidebar:     "2px 0 16px rgba(0,0,0,0.04)",
        dropdown:    "0 8px 30px rgba(0,0,0,0.12)",
      },
      animation: {
        "fade-in":      "fadeIn 0.3s ease-in-out",
        "slide-up":     "slideUp 0.35s ease-out",
        shimmer:        "shimmer 1.5s infinite",
      },
      keyframes: {
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        shimmer: { "0%": { backgroundPosition: "-1000px 0" }, "100%": { backgroundPosition: "1000px 0" } },
      },
      spacing: {
        "sidebar-w": "220px",
        "topbar-h":  "72px",
      },
      maxWidth: {
        sidebar: "220px",
      },
      width: {
        sidebar: "220px",
      },
    },
  },
  plugins: [],
};

export default config;
