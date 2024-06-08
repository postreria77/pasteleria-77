/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Objectivity", "sans-serif"],
      },
      colors: {
        dark: "#1F1F1F",
        light: "#F8FCFA",
        brand: "#A2D8C8",
        "brand-2": "#1F473B",
        "brand-3": "#49AB8E",
      },
      spacing: {
        page: "var(--page-spacing)",
      },
      backgroundImage: {
        hero: "url('/images/header-bg.png')",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - 16px))" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
