/* eslint-disable max-len */
import { Button } from '../Button'
import { Heading } from '../Heading'

export const Maillist = () => {
  const signupForm = (
    <form
      id='sib-form'
      method='POST'
      // action=''
      className='mt-6 flex flex-col flex-wrap justify-center gap-4 text-gray-900 md:flex-row'
    >
      <input className='w-64 rounded px-3 py-4' placeholder='Email' type='text' id='EMAIL' name='EMAIL' data-required='true' required />
      <input className='w-64 rounded px-3 py-4' placeholder='First Name' type='text' id='FIRSTNAME' name='FIRSTNAME' />
      <input className='w-64 rounded px-3 py-4' placeholder='Last Name' type='text' id='LASTNAME' name='LASTNAME' />
      {/* <input type='text' name='email_address_check' value='' /> */}
      <input type='hidden' name='locale' value='en' />
      <input type='hidden' name='html_type' value='simple' />
      <Button className='w-64 bg-bright px-3 py-4 text-white'>
        Sign Me Up
      </Button>
    </form>
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
