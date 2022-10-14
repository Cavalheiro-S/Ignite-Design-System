/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**.tsx"
  ],
  theme: {
    fontSize: {
      "xs": 12,
      "sm": 14,
      "md": 18,
      "lg": 20,
      "xl": 24,
      "2xl": 32
    },

    colors: {

      transparent: "transparent",

      gray: {
        200: "#f3f3f3",
        600: "#878787",
        900: "#333333"
      },

      lime: {
        400: "#a3e635",
      },

      green: {
        700: "#09d3ac",
        800: "#01b390"
      }

    },
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      }
    },
  },
  plugins: [],
}
