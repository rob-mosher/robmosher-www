/** @type {import('next').NextConfig} */

if (!process.env.NEXT_PUBLIC_CDN_HOST) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_CDN_HOST')
}

if (!process.env.NEXT_PUBLIC_EMAIL_SUBSRIBE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_EMAIL_SUBSRIBE_URL')
}

const nextConfig = {
  // Uncomment the below to support SSG export
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },
  env: {
    NEXT_PUBLIC_CDN_HOST: process.env.NEXT_PUBLIC_CDN_HOST,
    NEXT_PUBLIC_EMAIL_SUBSRIBE_URL: process.env.NEXT_PUBLIC_EMAIL_SUBSRIBE_URL,
  },
}

export default nextConfig
