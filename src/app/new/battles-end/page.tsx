import { Section, Video } from '@components'
import { battlesEndBlog } from '@data'

const BattlesEnd = () => (
  <Section>
    <Video
      date={battlesEndBlog.date}
      video={battlesEndBlog.video}
    />
  </Section>
)

export default BattlesEnd
