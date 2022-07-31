/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#FFFFFF",
      midnight: "#0E273C",
      purple: "#4A306D",
      "light-purple": "#D6D3F0",
      salmon: "#CC5A71",
      green: "#468189",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
    extend: {},
  },
  plugins: [],
};
