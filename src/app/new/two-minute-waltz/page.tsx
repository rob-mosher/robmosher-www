import { Video, Section } from '@components'
import { twoMinuteWaltz, twoMinuteWaltzBlog } from '@data'

const TwoMinuteWaltz = () => (
  <Section>
    <Video
      date={twoMinuteWaltzBlog.date}
      video={twoMinuteWaltz}
    />
  </Section>
)

export default TwoMinuteWaltz
