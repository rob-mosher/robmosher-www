/** @type {import('next').NextConfig} */

if (!process.env.AWS_ACCESS_KEY_ID) {
  throw new Error('Missing environment variable: AWS_ACCESS_KEY_ID')
}

if (!process.env.AWS_REGION) {
  throw new Error('Missing environment variable: AWS_REGION')
}

if (!process.env.AWS_SECRET_ACCESS_KEY) {
  throw new Error('Missing environment variable: AWS_SECRET_ACCESS_KEY')
}

if (!process.env.AWS_SES_RECEIVER_EMAIL) {
  throw new Error('Missing environment variable: AWS_SES_RECEIVER_EMAIL')
}

if (!process.env.AWS_SES_SENDER_EMAIL) {
  throw new Error('Missing environment variable: AWS_SES_SENDER_EMAIL')
}

if (!process.env.NEXT_PUBLIC_CDN_HOST) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_CDN_HOST')
}

if (!process.env.NEXT_PUBLIC_EMAIL_SUBSRIBE_URL) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_EMAIL_SUBSRIBE_URL')
}

if (!process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID) {
  throw new Error('Missing environment variable: NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID')
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
    NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
  },
}

export default nextConfig
