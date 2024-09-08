import { Video, Section } from '@components'
import { twoMinuteWaltzBlog } from '@data'

const TwoMinuteWaltz = () => (
  <Section>
    <Video
      date={twoMinuteWaltzBlog.date}
      video={twoMinuteWaltzBlog.video}
    />
  </Section>
)

export default TwoMinuteWaltz
