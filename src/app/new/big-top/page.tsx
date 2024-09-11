import type { Metadata } from 'next'
import { Section, Video } from '@components'
import { bigTop, bigTopBlog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Big Top'),
  description: 'Music and video for Carousel',
}

const BigTop = () => (
  <Section>
    <Video
      date={bigTopBlog.date}
      video={bigTop}
    />
  </Section>
)

export default BigTop
