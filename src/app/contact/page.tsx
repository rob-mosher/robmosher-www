import type { Metadata } from 'next'
import { Section } from '@components'
import { getPageTitle } from '@lib'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: getPageTitle('Contact'),
  description: 'Contact form and several FAQs',
}

const Contact = () => (
  <Section theme='bright'>
    <div className='flex flex-col gap-9 md:flex-row'>
      <ContactForm />
    </div>
  </Section>
)

export default Contact
