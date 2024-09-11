import type { Metadata } from 'next'
import { Section, Video } from '@components'
import { bigTop, winterCarousel } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Carousel'),
  description: 'Music and videos for Carousel, featuring Big Top and Winter Carousel',
}

const Carousel = () => (
  <>
    <Section theme='bright'>
      <Video video={bigTop} />
    </Section>
    <Section>
      <Video video={winterCarousel} />
    </Section>
  </>
)

export default Carousel
