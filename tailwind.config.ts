import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bright: '#0896A6',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        title: ['var(--font-oswald)', 'sans-serif'],
      },
      maxWidth: {
        layout: '1600px',
      },
    },
  },
  plugins: [],
}
export default config
