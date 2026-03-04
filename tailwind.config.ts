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
        background: '#FAFAFA',
        primary: '#111111',
        secondary: '#6B7280',
        divider: '#E5E7EB',
        accent: '#2563EB'
      },
      maxWidth: {
        container: '1100px',
        reading: '65ch'
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
