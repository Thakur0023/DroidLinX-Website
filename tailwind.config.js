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
        // Dark theme with vibrant accents
        bg: {
          primary: '#0F0A1F',
          secondary: '#1a1535',
          tertiary: '#251f45',
        },
        // Vibrant accents
        accent: {
          blue: '#00D9FF',
          cyan: '#0FD7FF',
          green: '#00FF88',
          purple: '#D946EF',
          pink: '#FF006E',
          amber: '#FFB703',
          red: '#FF4757',
          violet: '#8B5CF6',
        },
        // Text
        text: {
          primary: '#F5F7FA',
          secondary: '#B8BDCC',
          tertiary: '#8B92A3',
        },
        // Borders
        border: {
          default: '#4A3F6B',
          light: '#3A2F5B',
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
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
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
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 217, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 217, 255, 0.8)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
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