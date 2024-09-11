/** @type {import('next').NextConfig} */

if (!process.env.NEXT_PUBLIC_CDN_HOST) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_CDN_HOST')
}

// Uncomment the below to support SSG export
const nextConfig = {
  // output: 'export',
  // images: {
  //   unoptimized: true,
  // },
  env: {
    NEXT_PUBLIC_CDN_HOST: process.env.NEXT_PUBLIC_CDN_HOST, // Make available client-side
  },
}

export default nextConfig
