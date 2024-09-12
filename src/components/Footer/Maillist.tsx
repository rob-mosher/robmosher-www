import { Button } from '../Button'
import { Heading } from '../Heading'

const emailSubscribeUrl = process.env.NEXT_PUBLIC_EMAIL_SUBSRIBE_URL

export const Maillist = () => {
  const signupForm = (
    <Button
      className='mt-4 w-64 bg-bright px-3 py-4 text-white'
      href={emailSubscribeUrl}
    >
      Sign Me Up
    </Button>
  )

  return (
    <section
      aria-label='Email Subscription Signup Form'
      className='flex flex-col items-center gap-2'
    >
      <Heading as='h2'>Subscribe</Heading>
      <p className='text-center'>
        Sign up with your email address to receive news and updates. I typically send something every 6-8 weeks.
      </p>
      {signupForm}
    </section>
  )
}
