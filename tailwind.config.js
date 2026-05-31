/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B1120',
        surface: '#111827',
        primary: '#3B82F6',
        secondary: '#6366F1',
        accent: '#10B981',
        'text-main': '#F8FAFC',
        muted: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blob-1': 'drift1 12s ease-in-out infinite alternate',
        'blob-2': 'drift2 12s ease-in-out infinite alternate -4s',
        'blob-3': 'drift3 12s ease-in-out infinite alternate -8s',
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
