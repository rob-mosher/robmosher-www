import { Video, Section } from '@components'
import { winterCarouselBlog } from '@data'

const WinterCarousel = () => (
  <Section>
    <Video
      date={winterCarouselBlog.date}
      video={winterCarouselBlog.video}
    />
  </Section>
)

export default WinterCarousel
