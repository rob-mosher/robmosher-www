import { Credits } from './Credits'
import { Maillist } from './Maillist'
import { SocialMedia } from './SocialMedia'
import { Section } from '../Section'

export const Footer = () => (
  <Section outerClassName='bg-stone-800' className='flex flex-col gap-16 text-white'>
    <SocialMedia />
    <Maillist />
    <Credits />
  </Section>
)
