/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        charcoal: '#1A1A1A',
        paper: '#F5F5F3',
        line: '#333333',
        mist: '#D4D4D4',
        ash: '#8A8A88',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      keyframes: {
        rise: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
