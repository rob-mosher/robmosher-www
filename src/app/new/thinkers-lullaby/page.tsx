import { Video, Section } from '@components'
import { thinkersLullaby, thinkersLullabyBlog } from '@data'

const ThinkersLullaby = () => (
  <Section>
    <Video
      date={thinkersLullabyBlog.date}
      video={thinkersLullaby}
    />
  </Section>
)

export default ThinkersLullaby
