/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "wood-brown": "#3C2317",
        "soft-beige": "#F6E6CB",
        "forest-green": "#F6E6CB",
      },
      fontFamily: {
        title: ['"lovelo"', 'serif'],
        body: ['"general"', 'sans-serif'],
        surfClub: ['"boska"', 'sans-serif'],
        eventos: ['"recia"', 'sans-serif'],
        menu: ['"gambarino"', 'sans-serif'],
      },
      scrollMargin: {
        45: '13rem',
      },
      animation: {
        slideDown: 'slideDown 0.3s ease-out',
        fadeIn: 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-10%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
