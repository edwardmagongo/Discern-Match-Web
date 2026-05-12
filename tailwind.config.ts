import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0F1E2D',
          DEFAULT: '#1A2C42',
          soft: '#2A3D54',
        },
        gold: {
          DEFAULT: '#B8924A',
          warm: '#C9A55C',
          pale: '#E8D9B8',
        },
        cream: {
          DEFAULT: '#F5EFE4',
          warm: '#EFE6D2',
          deep: '#E8DCC0',
        },
        paper: '#FAF6EC',
        ink: {
          DEFAULT: '#1A1A1A',
          soft: '#4A4A4A',
          mute: '#8A8275',
        },
        line: {
          DEFAULT: '#D8CFB8',
          soft: '#E5DCC4',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Iowan Old Style', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.3em',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        slow: '600ms',
      },
    },
  },
  plugins: [],
};
export default config;
