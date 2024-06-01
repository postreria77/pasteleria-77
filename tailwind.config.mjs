/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Objectivity", "sans-serif"],
      },
      colors: {
        "dark": "#1F1F1F",
        "light": "#F8FCFA",
        "brand": "#A2D8C8",
        "brand-2": "#1F473B"
      },
      spacing: {
        "page": "var(--page-spacing)",
      },
    },
    plugins: [],
  },
};
