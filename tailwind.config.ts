import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'deep-indigo': '#4B0082',
        'vibrant-teal': '#00BFA5',
        'soft-lavender': '#E6E6FA',
        'charcoal-gray': '#333333',
        'off-white': '#F5F5F5',
        'coral-red': '#FF4500',
        'forest-green': '#228B22',
        'lime-green': '#32CD32',
      },
      fontFamily: {
        'heading': ['var(--font-montserrat)', 'sans-serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'particle': 'particle 15s infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(50, 205, 50, 0.5), 0 0 20px rgba(50, 205, 50, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(50, 205, 50, 0.8), 0 0 40px rgba(50, 205, 50, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        particle: {
          '0%': { transform: 'translate(0, 0) scale(0)' },
          '10%': { transform: 'translate(-10px, -10px) scale(1)' },
          '100%': { transform: 'translate(100vw, 100vh) scale(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config