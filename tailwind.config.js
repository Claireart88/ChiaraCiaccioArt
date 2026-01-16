/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Palette artistica e sofisticata
        peacock: {
          50: '#f0f7fb',
          100: '#d4e8f7',
          200: '#a8d8f0',
          300: '#7cc7e8',
          400: '#5ab9e0',
          500: '#2a9fd8',
          600: '#1e7fb3',
          700: '#16628f', // Grigio ghiaccio principale
          800: '#0f4670',
          900: '#0a2f4d',
        },
        gold: {
          50: '#f0f7fb',
          100: '#d4e8f7',
          200: '#a8d8f0',
          300: '#7cc7e8',
          400: '#5ab9e0',
          500: '#2a9fd8',
          600: '#1e7fb3',
          700: '#16628f', // Grigio ghiaccio per consistency
          800: '#0f4670',
          900: '#0a2f4d',
        },
        night: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#1a1e2c', // Blu notte per testi
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};