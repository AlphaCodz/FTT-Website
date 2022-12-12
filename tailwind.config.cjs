/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#FDBE02",
        primaryDisabled: "#fdbe0291",
        ash: "#FDFDF5",
        placeholder: "#2d281c82"
      },
      screens: {
        sm: { max: "639px" },
        md: { max: "767px" },
        lg: { max: "1023px" },
        xl: { max: "1279px" }
      }
    }
  },
  plugins: []
};
