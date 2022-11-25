/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        table: '677px',
        bigScreen: "1035px"
      },
    },
  },
  plugins: [],
};
