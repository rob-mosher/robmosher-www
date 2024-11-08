import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        fourFourThreeElevatr: 'url("/images/443elevatr-bg.jpg")',
        radialGradient: 'radial-gradient(var(--tw-gradient-stops))',
        polebridge: 'url("/images/polebridge-map.jpg")',
        robMosher: 'url("/images/robmosher-antonelli-pan-armonica.jpg")',
        thirtyOneChorales: 'url("/images/31-chorales-score-and-pencil.jpg")',
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
