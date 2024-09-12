import type { Metadata } from 'next'
import { Heading, Section, Video } from '@components'
import { bigTop, winterCarousel } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Carousel'),
  description: 'Music and videos for Carousel, featuring Big Top and Winter Carousel',
}

const Carousel = () => (
  <>
    <Section theme='bright'>
      <Heading className='z-50 flex justify-center text-6xl'>
        Carousel
      </Heading>
    </Section>
    <Section>
      <Video video={bigTop} />
    </Section>
    <Section theme='bright'>
      <Video video={winterCarousel} />
    </Section>
  </>
)

export default Carousel
