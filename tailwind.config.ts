import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Couleurs premium pour la menuiserie
        primary: {
          50: "#fdf8f6",
          100: "#f2e8e5", 
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2b8a9",
          500: "#D2691E", // Orange bois chaud
          600: "#8B4513", // Marron bois noble
          700: "#6b3410",
          800: "#5a2d0d",
          900: "#2F1B14", // Brun sombre
        },
        woodAccent: {
          50: "#fefdf8",
          100: "#fdf9ed",
          200: "#fcf3d9",
          300: "#faebba",
          400: "#f7dd8e",
          500: "#CD853F", // Or pâle
          600: "#b8703a",
          700: "#a05b32",
          800: "#864d2e",
          900: "#70412a",
        },
        neutral: {
          50: "#F5F5DC", // Beige crème
          100: "#f0f0dc",
          200: "#e8e8d0",
          300: "#dcdcbf",
          400: "#cbcba8",
          500: "#b8b896",
          600: "#a5a584",
          700: "#8f8f73",
          800: "#7a7a62",
          900: "#696951",
        },
        // Couleurs shadcn/ui personnalisées
        wood: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7", 
          300: "#e0cec7",
          400: "#d2b8a9",
          500: "#8B4513", // Marron bois noble
          600: "#6b3410",
          700: "#5a2d0d",
          800: "#2F1B14", // Brun sombre
          900: "#1a0f08",
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;