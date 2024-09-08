import { Video, Section } from '@components'
import { thinkersLullabyBlog } from '@data'

const ThinkersLullaby = () => (
  <Section>
    <Video
      date={thinkersLullabyBlog.date}
      video={thinkersLullabyBlog.video}
    />
  </Section>
)

export default ThinkersLullaby
