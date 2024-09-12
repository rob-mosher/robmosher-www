import type { Metadata } from 'next'
import { Album, Section } from '@components'
import { getPageTitle } from '@lib'
import { trickle } from './data'

export const metadata: Metadata = {
  title: getPageTitle('Trickle'),
  description: 'Ambient music for classical acoustic guitar',
}

const Trickle = () => (
  <Section>
    <Album album={trickle} />
  </Section>
)

export default Trickle
