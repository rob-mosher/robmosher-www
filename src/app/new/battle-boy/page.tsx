import { Section, Video } from '@components'
import { battleBoyBlog } from '@data'

const BattleBoy = () => (
  <Section>
    <Video
      date={battleBoyBlog.date}
      video={battleBoyBlog.video}
    />
  </Section>
)

export default BattleBoy
