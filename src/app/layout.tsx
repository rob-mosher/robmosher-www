import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Oswald, Poppins } from 'next/font/google'
import type { ReactNode as TReactNode } from 'react'
import { Footer, Header } from '@components'
import { defaultPageTitle, defaultMetaDescription } from '@lib'
import './globals.css'

const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string

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

export const metadata: Metadata = {
  title: defaultPageTitle,
  description: defaultMetaDescription,
}

const RootLayout = ({
  children,
}: Readonly<{
    children: TReactNode;
  }>) => (
    <html lang='en'>
      {/* Next.js documentation has several recommendations for where to place GoogleTagManager  */}
      <GoogleTagManager gtmId={gtmId} />
      <head>
        <link rel='icon' href='/favicon.png' type='image/png' sizes='32x32' />
      </head>
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
