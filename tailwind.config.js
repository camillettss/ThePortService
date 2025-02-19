/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        elegant: ['"Playfair Display"', 'serif'],
      },

      colors: {
        primary: "#3774a3",  // Blu personalizzato
        secondary: "#FF5733", // Arancione personalizzato
        dark: "#121212", // Grigio molto scuro
        wallpaper: "#c7e0e7",
      },

      borderRadius: {
        md: "8px",  // Bordo arrotondato standard Material
      },
    },
  },
  plugins: [],
};
