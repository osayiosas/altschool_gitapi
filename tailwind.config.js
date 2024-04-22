/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },

      ham: { max: "900px" },

      md: { max: "767px" },

      sm: { max: "639px" },

      lexical: { max: "600px" },

      xs: { max: "400px" },
    },
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
