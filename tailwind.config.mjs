/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-1": "#0B0B0A",
        "dark-2": "#1B1A18",
        "dark-3": "#363430",
        "light-1": "#FAF8F4",
        "light-2": "#C3BBAC",
        "brand-1": "#FFC247",
      },
    },
  },
  plugins: [],
};
