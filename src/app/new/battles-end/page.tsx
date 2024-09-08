import { Section, Video } from '@components'
import { battlesEnd, battlesEndBlog } from '@data'

const BattlesEnd = () => (
  <Section>
    <Video
      date={battlesEndBlog.date}
      video={battlesEnd}
    />
  </Section>
)

export default BattlesEnd
