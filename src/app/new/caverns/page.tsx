import { Section, Video } from '@components'
import { cavernsBlog } from '@data'

const Caverns = () => (
  <Section>
    <Video
      date={cavernsBlog.date}
      video={cavernsBlog.video}
    />
  </Section>
)

export default Caverns
