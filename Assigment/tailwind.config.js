/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-shadow-1': 'inset 0px 3.26px 3.26px rgba(255, 255, 255, 0.15)',
        'inner-shadow-2': 'inset 0px 0px 48.91px rgba(255, 255, 255, 0.05)',
        'drop-shadow-1': '9px 10px 7.1px rgba(0, 0, 0, 0.4)',
        'drop-shadow-2': '-0.5px -0.5px 6.9px rgba(255, 255, 255, 0.25)',
        'custom1': '4px 5px 5px 5px rgba(16, 18, 19, 1)',
        'custom2': '-5px -3px -10px 30px rgba(150, 190, 231, 1)',
      },
    },
  },
  plugins: [],
}