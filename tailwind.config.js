/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azulEscuro: '#082349',
        marromEscuro: '#3d2e2e',
        begeClaro: '#dacfc9',
      },
      fontFamily: {
  sans: ['Raleway', 'ui-sans-serif', 'system-ui', 'sans-serif'],
}
,
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        wiggle: 'wiggle 0.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
