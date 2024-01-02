/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      aspectRatio: {
        '6/5':'6/5',
        '4/3':'4/3'
      }
    },
  },
  plugins: [],
}

