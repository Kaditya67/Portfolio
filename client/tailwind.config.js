/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A192F',
        secondary: '#F97316',
        tertiary: '#54D6BB',
      }
    },
    screens: {
      
      'ssm': '320px',
      
      'sm': '640px',


      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',
     
      '2xl': '1536px',
      
    },
  },
  plugins: [],
}