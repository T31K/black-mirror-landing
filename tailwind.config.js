/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "sans-serif"],
        "bodoni-moda": ["var(--font-bodoni-moda)", "serif"],
        "leckerli-one": ["var(--font-leckerli-one)", "cursive"],
        // Legacy camelCase versions for backward compatibility
        fontRaleway: ["var(--font-raleway)", "sans-serif"],
        fontBodoniModa: ["var(--font-bodoni-moda)", "serif"],
        fontLeckerliOne: ["var(--font-leckerli-one)", "cursive"],
      },
      perspective: {
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
