import type { Metadata } from 'next'
import { Section, Video } from '@components'
import { bigTop } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Carousel'),
  description: 'Music and videos for Carousel, featuring Big Top and Winter Carousel',
}

const Carousel = () => (
  <Section>
    <Video video={bigTop} />
  </Section>
)

export default Carousel
