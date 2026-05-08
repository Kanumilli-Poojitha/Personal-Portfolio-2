/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        surface: 'rgba(15, 23, 42, 0.72)',
        border: 'rgba(148, 163, 184, 0.18)',
        text: '#f8fafc',
        muted: '#94a3b8',
        cyan: '#22d3ee',
        purple: '#a855f7',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(34, 211, 238, 0.14), 0 20px 60px rgba(8, 15, 31, 0.5)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(34, 211, 238, 0.16), transparent 55%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.18), transparent 40%)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      screens: {
        xs: '420px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -12px, 0)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
