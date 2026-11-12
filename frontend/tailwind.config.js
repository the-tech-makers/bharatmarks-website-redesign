/** @type {import('tailwindcss').Config} */
module.exports = {
  blocklist: ["overline"],
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#070B19",
          800: "#0B132B",
          700: "#1C2541",
          600: "#242F4F",
        },
        gold: {
          200: "#F8EFCB",
          300: "#F3E5AB",
          400: "#E3C566",
          500: "#D4AF37",
          600: "#C5A059",
          700: "#B48E28",
        },
        ivory: "#F8FAFC",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
