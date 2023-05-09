/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'hero': ['Krona One'],
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['Courier New', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
};
