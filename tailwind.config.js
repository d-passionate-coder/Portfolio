/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#090C0D",
      background2: "#18181B",
      foreground: "#ECEDEE",
      foreground2: "#A1A1AA",
      content: "#232323",
      lime: "#0AFF9D",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        neutraface: ["neutraface", "sans-serif"],
        neutrafaceBold: ["neutrafaceBold", "sans-serif"],
      },
    },
  },
};
