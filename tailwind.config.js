/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Master neutrals
        cream: '#FAF6EE',        // warm white — primary background
        limestone: '#F1E9DA',    // alt section background
        sand: '#E7DCC6',          // soft divider / card surface
        charcoal: '#2B2622',     // body text / soft dark
        ink: '#1A1612',          // headings / max contrast
        ash: '#7E7468',          // secondary text / eyebrow
        champagne: '#C4A574',    // premium accent
        // Product colors
        sage: '#7FA67E',         // Nudora Green — gut
        citrus: '#E47A3C',       // Nudora Orange — metabolism
        lavender: '#9D85BA',     // Nudora Purple — sleep/mood
        // Tints for soft backgrounds
        'sage-soft': '#E3EBDF',
        'citrus-soft': '#F7E4D2',
        'lavender-soft': '#EAE2F0',
      },
      fontFamily: {
        display: ['Fraunces', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { cinema: '0.18em', wider2: '0.32em' },
      transitionTimingFunction: { cinema: 'cubic-bezier(0.22, 1, 0.36, 1)' },
      maxWidth: { content: '1500px' },
    },
  },
  plugins: [],
};
