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
        primary: "#66a0ca",  // Blu personalizzato
        secondary: "#FF5733", // Arancione personalizzato
        dark: "#2a263f", // Blu molto scuro
        wallpaper: "#d6eae8", // old: c7e0e7
        wallpaper_dark: "#226e8e",
        detail: "#efd89c",
        wallpaper_darker: "#99b8ba",
      },

      borderRadius: {
        md: "8px",  // Bordo arrotondato standard Material
      },
    },
  },
  plugins: [],
};
