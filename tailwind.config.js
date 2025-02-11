/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#4338CA',
        },
        secondary: {
          DEFAULT: '#EC4899',
          dark: '#DB2777',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'card-hover': 'card-hover 0.3s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'card-hover': {
          '0%': {
            transform: 'translateY(0) scale(1)',
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          },
          '100%': {
            transform: 'translateY(-4px) scale(1.01)',
            boxShadow: '0 20px 25px -5px rgb(79 70 229 / 0.1), 0 8px 10px -6px rgb(79 70 229 / 0.1)',
          },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};