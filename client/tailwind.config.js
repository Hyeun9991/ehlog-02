/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['Crimson Text', 'sans-serif'],
      },
      colors: {
        primaryColor: {
          light: '#60a5fa',
          dark: '#93c5fd',
        },
        secondColor: {
          light: '#18181b',
          dark: '#71717a',
        },
        bgColor: {
          light: '#f9fafb',
          dark: '#1f2937',
        },
        textColor: {
          light: '#18181b',
          dark: '#d4d4d8',
        },
      },
    },
  },
  plugins: [],
};
