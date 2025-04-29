/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "wood-brown": "#7C4B36",
        "soft-beige": "#F7F0E6",
        "forest-green": "#487D57",
      },
      fontFamily: {
        title: ['"Playfair Display"', 'serif'],
        body: ['"Quicksand"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
