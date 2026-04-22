/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme - GitHub inspired
        bg: {
          primary: '#0D1117',
          secondary: '#161B22',
          tertiary: '#0D1117',
        },
        // Accents
        accent: {
          blue: '#3B82F6',
          green: '#22C55E',
          purple: '#A855F7',
          amber: '#F59E0B',
          red: '#EF4444',
        },
        // Text
        text: {
          primary: '#E6EDF3',
          secondary: '#9DA7B3',
          tertiary: '#7D8590',
        },
        // Borders
        border: {
          default: '#30363D',
          light: '#21262D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        'section-sm': '2rem',
        'section-md': '4rem',
        'section-lg': '6rem',
      },
    },
  },
  plugins: [],
}