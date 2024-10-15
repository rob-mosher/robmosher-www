import { Credits } from './Credits'
import { Maillist } from './Maillist'
import { SocialMedia } from './SocialMedia'
import { Section } from '../Section'

export const Footer = () => (
  <Section as='footer' outerClassName='bg-stone-800' className='flex flex-col gap-14 py-8 text-white md:gap-16 md:py-12'>
    <SocialMedia />
    <Maillist />
    <Credits />
  </Section>
)
