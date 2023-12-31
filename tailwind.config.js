/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bali-hai': {
          '50': '#f8fafa',
          '100': '#f1f4f6',
          '200': '#e6ecee',
          '300': '#d2dbe0',
          '400': '#b8c5cd',
          '500': '#8fa2b0',
          '600': '#8294a5',
          '700': '#6f8092',
          '800': '#5d6c7a',
          '900': '#4d5965',
          '950': '#323b43',
      },      
      },
      fontFamily: {
        'primary': ['Lato', 'sans-serif'],
      },
    }
  },
  plugins: []
}
