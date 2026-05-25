/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        charcoal: '#111111',
        bone: '#F5F5F5',
        ash: '#7A7A7A',
        sand: '#C9B89C',
      },
      fontFamily: {
        display: ['Anton', '"Archivo Narrow"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { cinema: '0.18em', wider2: '0.32em' },
      transitionTimingFunction: { cinema: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      maxWidth: { content: '1500px' },
    },
  },
  plugins: [],
};
