import type { Metadata } from 'next'
import { Album, Section } from '@components'
import { getPageTitle } from '@lib'
import { studies } from './data'

export const metadata: Metadata = {
  title: getPageTitle('Studies'),
  description: 'Music for various studies including harp and organ',
}

const Studies = () => (
  <Section>
    <Album album={studies} />
  </Section>
)

export default Studies
