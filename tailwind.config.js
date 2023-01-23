/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
                primary: '#219EBC',
                'primary-light': '#8ECAE6',
                secondary: '#023047',
                accent: '#FB8500',
                'accent-light': '#FFB703',
            },
    },
  },
  plugins: [],
}