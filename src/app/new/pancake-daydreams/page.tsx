import type { Metadata } from 'next'
import { Section, Video } from '@components'
import { pancakeDaydreams, pancakeDaydreamsBlog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Pancake Daydreams'),
  description: 'Music and video the Ondioline synthesizer',
}

const PancakeDaydreams = () => (
  <Section>
    <Video
      date={pancakeDaydreamsBlog.date}
      video={pancakeDaydreams}
    />
  </Section>
)

export default PancakeDaydreams
