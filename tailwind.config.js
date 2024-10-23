/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Aeonik", "sans-serif"], // Map the font family to Tailwind classes
      },
    },
  },
  plugins: [],
};
