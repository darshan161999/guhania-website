import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange-25': '#fefbf7',
        'olive': {
          50: '#f7f8f3',
          100: '#eef0e6',
          200: '#d4d8c1',
          300: '#b8c097',
          400: '#9ca86d',
          500: '#808f43',
          600: '#6b7a2f',
          700: '#56651f',
          800: '#415013',
          900: '#2c3b0a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config; 