import { Section, Video } from '@components'
import { mrHauntingtropeBlog } from '@data'

const MrHauntingtrope = () => (
  <Section>
    <Video
      date={mrHauntingtropeBlog.date}
      video={mrHauntingtropeBlog.video}
    />
  </Section>
)

export default MrHauntingtrope
