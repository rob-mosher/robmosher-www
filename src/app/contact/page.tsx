'use client'

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'
import {
  ErrorMessage, Field, Form, Formik,
} from 'formik'
import type { FormikHelpers } from 'formik'
import { useState } from 'react'
import { Heading, Section } from '@components'

type TContactFormValues = {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  newsletter: boolean;
};

type TFormStatus = 'idle' | 'success' | 'error';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<TFormStatus>('idle')

  const handleSubmit = async (
    values: TContactFormValues,
    { setSubmitting }: FormikHelpers<TContactFormValues>,
  ) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || 'An error occurred while sending the message')
      }

      setFormStatus('success')
      window.scrollTo(0, 0)
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      console.error('Error:', errorMessage)
      setFormStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  const validate = (values: Record<string, unknown>) => {
    const errors: Record<string, string> = {}
    if (!values.firstName) {
      errors.firstName = 'First name is required'
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email as string)) {
      errors.email = 'Invalid email address'
    }
    if (!values.message) {
      errors.message = 'Message is required'
    }
    return errors
  }

  return (
    <Section theme='bright'>
      <div className='flex flex-col gap-9 md:flex-row'>
        <div className='flex flex-col items-start gap-4 md:flex-[50%]'>

          <Heading>Send a Message</Heading>

          {formStatus === 'success' ? (
            <div className='flex items-center gap-2 text-lg font-semibold text-green-400'>
              <CheckCircleIcon className='size-7 ' />
              <p>Thank you for your message!</p>
            </div>
          ) : (
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                message: '',
                newsletter: false,
              }}
              validate={validate}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className='w-full space-y-4'>
                  <div>
                    <label htmlFor='firstName' className='mb-1 block text-white'>
                      Name
                      {' '}
                      <span className='text-sm'>(required)</span>
                    </label>
                    <div className='flex gap-4'>
                      <div className='flex-1'>
                        <Field
                          name='firstName'
                          type='text'
                          placeholder='First Name'
                          className='w-full rounded-md border border-gray-300 px-4 py-2 text-black'
                        />
                        <ErrorMessage name='firstName' component='div' className='mt-1 text-sm font-semibold text-amber-500' />
                      </div>
                      <div className='flex-1'>
                        <Field
                          name='lastName'
                          type='text'
                          placeholder='Last Name'
                          className='w-full rounded-md border border-gray-300 px-4 py-2 text-black'
                        />
                        <ErrorMessage name='lastName' component='div' className='mt-1 text-sm font-semibold text-amber-500' />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor='email' className='mb-1 block text-white'>
                      Email Address
                      {' '}
                      <span className='text-sm'>(required)</span>
                    </label>
                    <Field
                      name='email'
                      type='email'
                      placeholder='Email Address'
                      className='w-full rounded-md border border-gray-300 px-4 py-2 text-black'
                    />
                    <ErrorMessage name='email' component='div' className='mt-1 text-sm font-semibold text-amber-500' />
                  </div>

                  <div className='flex items-center'>
                    <Field name='newsletter' type='checkbox' className='mr-2' />
                    <label htmlFor='newsletter' className='text-white'>
                      Sign up for news and updates
                    </label>
                  </div>

                  <div>
                    <label htmlFor='message' className='mb-1 block text-white'>
                      Message
                      {' '}
                      <span className='text-sm'>(required)</span>
                    </label>
                    <Field
                      name='message'
                      as='textarea'
                      rows={5}
                      placeholder='Message'
                      className='w-full rounded-md border border-gray-300 px-4 py-2 text-black'
                    />
                    <ErrorMessage name='message' component='div' className='mt-1 text-sm font-semibold text-amber-500' />
                  </div>

                  <div>
                    <button
                      type='submit'
                      disabled={isSubmitting}
                      className={`rounded-md bg-white px-4 py-2 text-teal-600 ${
                        isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                  </div>

                  {formStatus === 'error' && (
                  <div className='flex items-center gap-2 text-lg font-semibold text-amber-500'>
                    <XCircleIcon className='size-7 ' />
                    <p>
                      Something went wrong. Please try again.
                    </p>
                  </div>

                  )}
                </Form>
              )}
            </Formik>
          )}
        </div>

        <div className='flex flex-col items-start gap-4 md:flex-[50%]'>
          <Heading as='h4'>Where are you based?</Heading>
          <p className='mb-4 mt-0'>Brooklyn, NY. Love to travel.</p>
          <Heading as='h4'>Where are you releasing music lately?</Heading>
          <p className='mb-4 mt-0'>
            My YouTube channel is my primary destination for now, and I&rsquo;ve got some nifty plans in the pipeline.
          </p>
          <Heading as='h4'>Are you open to collaborating?</Heading>
          <p className='mb-4 mt-0'>
            Yes. While most of my projects have been with people I&rsquo;ve known and worked with for a long time, I enjoy
            meeting new people and seeing where inspiration or a set plan can lead.
          </p>
        </div>
      </div>
    </Section>
  )
}

export default Contact
