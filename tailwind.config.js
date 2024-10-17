/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary : '#4CAF50',
        secondary : {
          100: '#A8D8B9',
          200: '#36AF57',
          300: '#D9EEE1',
          400: '#04aa6d',
          500: '#196449',
          600: '#282a35',
          700: '#e7e9eb',
          800: '#ccc',
          900: "#FF0000",
          910: '#0000FF',
          920: '#00BFFF',
          930: '#2e3748',
          940: '#575f6c',
          950: '#2196f3',
          960: '#fff',
          970: '#ddd'
        },
        'custom-thumb': '#1c1c1e', // Thumb color
        'custom-track': '#f1f1f1', // Track color
        darkColor: {
          100: '#1d2935',
          200: '#16202a',
          300: '#282a36',
          400: '#193d3d',
          500: '#37444d',
          600: '#eb8e86',
          700: '#bca9c7',
          800: '#92cbaa'
        }
      },
      fontFamily: {
        Poppins : ['Poppins']
      },
      fontSize: {
        100: ['15px'],
        200: ['21px'],
        300: ['42px'],
        400: ['17px'],
        500: ['16px'],
        600: ['14px']
      },
      width: {
        100: '80%',
        200: '80vw',
        300: '20vw',
        400: '66vw',
        500: '247px',
        600: '100vw'
      },
      screens: {
        fis: '474px',
        ses: '688px',
        ths: '828px',
        fos: '955px',
        ffs: '994px',
        sis: '1170px',
        sft: '615px',
        fhd: '500px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  darkMode: "class"
}

