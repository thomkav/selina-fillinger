/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk,md,js}"
  ],
  theme: {
    extend: {
      colors: {
        'forest-dark': '#1a3a2e',
        'forest': '#2d5f4c',
        'forest-light': '#4a8b6f',
        'sage': '#8fb399',
        'cream': '#f5f3ed',
        'earth': '#8b7355',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        'serif': ['Georgia', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
}
