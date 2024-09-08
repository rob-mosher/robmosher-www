import { Video, Section } from '@components'
import { watchOutForTheMoonlightBlog } from '@data'

const WatchOutForTheMoonlight = () => (
  <Section>
    <Video
      date={watchOutForTheMoonlightBlog.date}
      video={watchOutForTheMoonlightBlog.video}
    />
  </Section>
)

export default WatchOutForTheMoonlight
