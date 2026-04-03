/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'rgba-green': 'rgba(0, 255, 0, 0.7)',
      },
      animation: {
        'pulse-on-hover': 'pulse-on-hover 1.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-on-hover': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
