/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '112':'32rem',
        '128': '38rem',
      }
    },
  },
  plugins: [],
}

