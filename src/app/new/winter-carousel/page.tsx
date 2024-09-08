import { Video, Section } from '@components'
import { winterCarousel, winterCarouselBlog } from '@data'

const WinterCarousel = () => (
  <Section>
    <Video
      date={winterCarouselBlog.date}
      video={winterCarousel}
    />
  </Section>
)

export default WinterCarousel
