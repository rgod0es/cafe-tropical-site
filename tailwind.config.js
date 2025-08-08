module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["oswald", "sans-serif"],
        opensans: ['"open-sans"', "serif"],
      },

      colors: {
        primary: "var(--primary-color)",
        bg_white: "var(--bg-white-color)",
      },
    },
  },
  plugins: [],
};
