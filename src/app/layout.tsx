import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
)

export default RootLayout
