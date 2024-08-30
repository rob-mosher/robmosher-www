import { FacebookIcon } from '@assets'
import { Credits } from './Credits'
import { Section } from '../Section'

export const Footer = () => (
  <Section classNameWrapper='flex bg-emerald-500 text-white'>
    <FacebookIcon />
    <Credits />
  </Section>
)
