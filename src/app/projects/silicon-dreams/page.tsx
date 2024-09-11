import type { Metadata } from 'next'
import { Album, Section } from '@components'
import { getPageTitle } from '@lib'
import { siliconDreams } from './data'

export const metadata: Metadata = {
  title: getPageTitle('Silicon Dreams'),
  description: 'Music and videos for Silicon Dreams project, featuring various Sega and Nintendo consoles',
}

const SiliconDreams = () => (
  <Section>
    <Album album={siliconDreams} />
  </Section>
)

export default SiliconDreams
