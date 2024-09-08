import { Section, Video } from '@components'
import { caverns, cavernsBlog } from '@data'

const Caverns = () => (
  <Section>
    <Video
      date={cavernsBlog.date}
      video={caverns}
    />
  </Section>
)

export default Caverns
