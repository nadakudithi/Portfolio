import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        primary: '#F5F5F5',
        'primary-foreground': '#0A0A0A',
        secondary: '#A1A1AA',
        divider: '#27272A',
        accent: '#F97316',
        surface: '#111111'
      },
      maxWidth: {
        container: '1200px',
        reading: '65ch'
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif']
      },
      animation: {
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
      },
      keyframes: {
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      }
    }
  },
  plugins: []
};

export default config;
