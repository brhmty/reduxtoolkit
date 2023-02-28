/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2680C0",
        primary_dark: "#282566",
        primary_light: "#85C6F4",
        clr_grey_1: "#102a42",
        clr_grey_5: "#617d98",
        clr_grey_10: "#f1f5f8",
        clr_red_dark: "hsl(360, 67%, 44%)",
        clr_red_light: "hsl(360, 71%, 66%)",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
