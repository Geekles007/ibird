import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      primary: '#FBD708',
    },
    extend: {
      screens: {
        xs: '425px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'logo-enter': {
          '0%': {
            transform: 'scale(.1)',
          },
          '100%': {
            top: '0',
          },
        },
      },
      animation: {
        'logo-in':
          'logo-enter 0.5s .4s cubic-bezier(0.76, 0, 0.24, 1) forwards',
      },
    },
  },
  plugins: [],
};
export default config;
