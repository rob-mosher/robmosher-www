import type { Metadata } from 'next'
import { Oswald, Poppins } from 'next/font/google'
import type { ReactNode as TReactNode } from 'react'
import { Footer, Header } from '@components'
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
    children: TReactNode;
  }>) => (
    <html lang='en'>
      <body className={`font-sans font-extralight ${oswald.variable} ${poppins.variable}`}>
        <div className='flex size-full min-h-screen flex-col'>
          <Header />
          <main className='flex grow flex-col'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
)

export default RootLayout
