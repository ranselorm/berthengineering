/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Aeonik", "sans-serif"], // Map the font family to Tailwind classes
      },
      colors: {
        // Custom colors
        primary: "#0096ff",
        secondary: "#13193b",
        accent: "#16efd2",
        gray: "#dcdcdc",
      },
      backgroundImage: {
        "radial-custom":
          "radial-gradient(circle at 30% -100%, #042c54 25%, rgba(4, 44, 84, 1) 85%, rgba(27, 120, 222, 1) 100%)",
      },
    },
  },
  plugins: [],
};
