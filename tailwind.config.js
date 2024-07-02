/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {},
    fontFamily: {
      logo: ["Libre Barcode 39 Text", "system-ui"],
    },
  },
  plugins: [],
};

