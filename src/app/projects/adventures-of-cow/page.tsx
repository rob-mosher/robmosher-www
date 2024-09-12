import type { Metadata } from 'next'
import { Section, Video } from '@components'
import { adventuresOfCow } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Adventures of Cow'),
  description: 'Music and videos for Adventures of Cow, featuring choir, clarinet, bass clarinet, and English horn',
}

const AdventuresOfCow = () => (
  <Section theme='bright'>
    <Video video={adventuresOfCow} />
  </Section>
)

export default AdventuresOfCow
