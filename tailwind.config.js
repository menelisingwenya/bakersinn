/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d237d',
          light: '#2f247d',
          dark: '#1f1861',
        },
        gold: {
          DEFAULT: '#bf9a4a',
          light: '#c19d4b',
          dark: '#a8843a',
        },
        accent: '#9f91cb',
        cream: '#f7f4e2',
        'text-light': '#ffffff',
        'text-dark': '#2d237d',
      },
      fontFamily: {
        heading: ['"Trebuchet MS"', 'Verdana', 'Geneva', 'Tahoma', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        cabin: ['"Cabin Sketch"', 'cursive'],
      },
    },
  },
  plugins: [],
}