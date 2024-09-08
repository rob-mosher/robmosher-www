import { Section, Video } from '@components'
import { mrHauntingtrope, mrHauntingtropeBlog } from '@data'

const MrHauntingtrope = () => (
  <Section>
    <Video
      date={mrHauntingtropeBlog.date}
      video={mrHauntingtrope}
    />
  </Section>
)

export default MrHauntingtrope
