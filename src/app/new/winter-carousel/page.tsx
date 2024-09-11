import type { Metadata } from 'next'
import { Video, Section } from '@components'
import { winterCarousel, winterCarouselBlog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Winter Carousel'),
  description: 'Music and video for Carousel',
}

const WinterCarousel = () => (
  <Section>
    <Video
      date={winterCarouselBlog.date}
      video={winterCarousel}
    />
  </Section>
)

export default WinterCarousel
