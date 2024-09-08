import { Section, Video } from '@components'
import { battleBoy, battleBoyBlog } from '@data'

const BattleBoy = () => (
  <Section>
    <Video
      date={battleBoyBlog.date}
      video={battleBoy}
    />
  </Section>
)

export default BattleBoy
