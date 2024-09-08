import { Section, Video } from '@components'
import { bigTopBlog } from '@data'

const BigTop = () => (
  <Section>
    <Video
      date={bigTopBlog.date}
      video={bigTopBlog.video}
    />
  </Section>
)

export default BigTop
