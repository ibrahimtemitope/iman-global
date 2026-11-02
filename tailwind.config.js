/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#06152D',
          900: '#002366',
          800: '#0D2F6E',
          700: '#1B428A',
          100: '#EBF0F8',
          50: '#F5F7FA',
        },
        gold: {
          600: '#9A742D',
          500: '#B68D40',
          400: '#CCA862',
          200: '#EADBBE',
          100: '#F7F2E6',
          50: '#FCF9F2',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 32px -12px rgba(6, 21, 45, 0.08)',
        cardHover: '0 20px 44px -14px rgba(0, 35, 102, 0.14)',
      },
    },
  },
  plugins: [],
};
