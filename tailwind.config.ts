import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        bright: '#0896A6',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        title: ['var(--font-oswald)', 'sans-serif'],
      },
      fontSize: {
        '1.5xl': ['1.375rem', { lineHeight: '1.875rem' }], // 22px font size, 30px line height
      },
      maxWidth: {
        layout: '1600px',
      },
    },
  },
  plugins: [],
}
export default config
