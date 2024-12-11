/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "rings-pattern-dark":
          'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400"><g fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"><circle cx="200" cy="200" r="50"/><circle cx="200" cy="200" r="100"/><circle cx="200" cy="200" r="150"/><circle cx="200" cy="200" r="200"/></g></svg>\')',
        "rings-pattern-light":
          'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400"><g fill="none" stroke="rgba(58,58,58,0.1)" stroke-width="1"><circle cx="200" cy="200" r="50"/><circle cx="200" cy="200" r="100"/><circle cx="200" cy="200" r="150"/><circle cx="200" cy="200" r="200"/></g></svg>\')',
        "dual-pattern":
          'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400"><g fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"><circle cx="200" cy="200" r="50"/><circle cx="200" cy="200" r="100"/><circle cx="200" cy="200" r="150"/><circle cx="200" cy="200" r="200"/></g></svg>\'),url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400"><g fill="none" stroke="rgba(58,58,58,0.1)" stroke-width="1"><circle cx="200" cy="200" r="50"/><circle cx="200" cy="200" r="100"/><circle cx="200" cy="200" r="150"/><circle cx="200" cy="200" r="200"/></g></svg>\')',
      },
      backgroundSize: {
        "full-cover": "30%",
      },
      backgroundPosition: {
        "custom-right": "-22% top", // Adjust this value for half visibility
      },
      height: {
        "screen-full": "50%",
      },
    },
    fontFamily: {
      logo: ["Libre Barcode 39 Text", "system-ui"],
    },
  },
  plugins: [],
};

