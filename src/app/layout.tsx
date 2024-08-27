import type { Metadata } from 'next'
import { Oswald, Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import { mergeClassName } from '@/lib'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['200', '300', '400', '500', '600', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: 'Rob Mosher',
  description: 'TODO Site Description',
}

const RootLayout = ({
  children,
}: Readonly<{
    children: ReactNode;
  }>) => (
    <html lang='en'>
      <body className={mergeClassName(
        oswald.variable,
        poppins.variable,
        'font-sans',
      )}
      >
        {children}
      </body>
    </html>
)

export default RootLayout
