
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: "#09090f",
          900: "#10111a",
          800: "#181a26",
          700: "#242638",
        },
        accent: {
          DEFAULT: "#8b5cf6",
          light: "#a78bfa",
        },
      },
    },
  },
  plugins: [],
};
