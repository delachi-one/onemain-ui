module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
         black: "#000000",
         white: "#ffffff",
      },
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         fontSize: {
            base: "1rem",
            xxs: "0.75rem",
            "3xs": "0.65rem",
         },
      },
   },
  variants: {
    extend: {},
  },
  plugins: [],
}
