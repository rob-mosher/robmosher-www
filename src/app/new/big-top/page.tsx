import { Section, Video } from '@components'
import { bigTop, bigTopBlog } from '@data'

const BigTop = () => (
  <Section>
    <Video
      date={bigTopBlog.date}
      video={bigTop}
    />
  </Section>
)

export default BigTop
