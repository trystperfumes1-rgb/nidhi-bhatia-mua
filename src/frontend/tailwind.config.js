import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
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
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
        // Purple replaces gold
        gold: {
          DEFAULT: "#A855F7",
          light: "#c084fc",
          muted: "rgba(168,85,247,0.4)",
          subtle: "rgba(139,92,246,0.12)",
        },
        "rose-gold": {
          DEFAULT: "#8B5CF6",
          light: "#a78bfa",
          muted: "rgba(139,92,246,0.4)",
          subtle: "rgba(124,58,237,0.1)",
        },
        luxury: {
          950: "oklch(var(--luxury-950) / <alpha-value>)",
          900: "oklch(var(--luxury-900) / <alpha-value>)",
          800: "oklch(var(--luxury-800) / <alpha-value>)",
          700: "oklch(var(--luxury-700) / <alpha-value>)",
          600: "oklch(var(--luxury-600) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["Playfair Display", "var(--font-display)", "Georgia", "serif"],
        body: ["Raleway", "var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        subtle: "0 2px 8px rgba(0,0,0,0.4)",
        "glow-subtle": "0 0 18px rgba(139, 92, 246, 0.2)",
        "glow-gold": "0 0 25px rgba(139, 92, 246, 0.45), 0 0 50px rgba(139, 92, 246, 0.2)",
        "glow-rose": "0 0 25px rgba(109, 40, 217, 0.4), 0 0 60px rgba(109, 40, 217, 0.18)",
        "glow-elevated": "0 0 35px rgba(124, 58, 237, 0.35), 0 0 80px rgba(139, 92, 246, 0.18)",
        "glow-particle": "0 0 18px rgba(139, 92, 246, 0.35)",
        "card-luxury": "0 4px 24px rgba(0,0,0,0.5), 0 0 20px rgba(139,92,246,0.08)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.6), 0 0 35px rgba(139,92,246,0.18)",
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
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)", opacity: "0.7" },
          "33%": { transform: "translateY(-22px) rotate(4deg)", opacity: "1" },
          "66%": { transform: "translateY(-10px) rotate(-3deg)", opacity: "0.85" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) scale(1)", opacity: "0.5" },
          "50%": { transform: "translateY(-35px) scale(1.05)", opacity: "0.8" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 18px rgba(139, 92, 246, 0.25), 0 0 35px rgba(139,92,246,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(139, 92, 246, 0.6), 0 0 80px rgba(139,92,246,0.28)" },
        },
        "glow-pulse-rose": {
          "0%, 100%": { boxShadow: "0 0 18px rgba(109,40,217,0.25)" },
          "50%": { boxShadow: "0 0 45px rgba(109,40,217,0.65), 0 0 80px rgba(109,40,217,0.28)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-gentle": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.85" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        orbit: {
          from: { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          to: { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        "orbit-reverse": {
          from: { transform: "rotate(0deg) translateX(90px) rotate(0deg)" },
          to: { transform: "rotate(-360deg) translateX(90px) rotate(360deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.3)" },
        },
        morph: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "50%": { borderRadius: "50% 60% 30% 60% / 30% 40% 70% 50%" },
          "75%": { borderRadius: "40% 30% 60% 50% / 70% 50% 40% 60%" },
        },
        levitate: {
          "0%, 100%": { transform: "translateY(0px) rotateX(0deg) scale(1)" },
          "30%": { transform: "translateY(-20px) rotateX(5deg) scale(1.03)" },
          "60%": { transform: "translateY(-10px) rotateX(-3deg) scale(1.01)" },
        },
        "depth-pulse": {
          "0%, 100%": { transform: "scale(1) perspective(400px) rotateY(0deg)" },
          "50%": { transform: "scale(1.04) perspective(400px) rotateY(8deg)" },
        },
        "glow-wave": {
          "0%": { boxShadow: "0 0 10px rgba(139,92,246,0.2), 0 0 20px rgba(139,92,246,0.1)" },
          "33%": { boxShadow: "0 0 25px rgba(124,58,237,0.5), 0 0 50px rgba(139,92,246,0.25), 0 0 80px rgba(109,40,217,0.1)" },
          "66%": { boxShadow: "0 0 15px rgba(168,85,247,0.4), 0 0 40px rgba(139,92,246,0.2)" },
          "100%": { boxShadow: "0 0 10px rgba(139,92,246,0.2), 0 0 20px rgba(139,92,246,0.1)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        "glow-pulse-rose": "glow-pulse-rose 2.5s ease-in-out infinite",
        "fade-in": "fade-in 0.7s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        "spin-slow-reverse": "spin-slow 28s linear infinite reverse",
        "pulse-gentle": "pulse-gentle 3s ease-in-out infinite",
        "slide-in-left": "slide-in-left 0.7s ease-out",
        "slide-in-right": "slide-in-right 0.7s ease-out",
        orbit: "orbit 8s linear infinite",
        "orbit-reverse": "orbit-reverse 10s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        morph: "morph 8s ease-in-out infinite",
        levitate: "levitate 5s ease-in-out infinite",
        "depth-pulse": "depth-pulse 4s ease-in-out infinite",
        "glow-wave": "glow-wave 3s ease-in-out infinite",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
