/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '112':'32rem',
        '128': '38rem',
      },
      margin: {
        'scroll': '20px', 
      },
    },
  },
  plugins: [],
}

