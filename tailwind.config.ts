import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: 'var(--color-ink)',
        mid: 'var(--color-mid)',
        accent: 'var(--color-accent)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        border: 'var(--color-border)',
        muted: 'var(--color-muted)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(44, 230, 149, 0.25)',
        card: '0 20px 40px rgba(11, 15, 26, 0.35)',
      },
      backgroundImage: {
        'grid-overlay': 'linear-gradient(135deg, rgba(44, 230, 149, 0.08) 0.5px, transparent 0.5px)',
        'radial-spot': 'radial-gradient(circle at top right, rgba(44, 230, 149, 0.35), transparent 45%)',
      },
      animation: {
        glow: 'glow 2.5s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.8' },
        },
      },
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [forms],
};

export default config;
