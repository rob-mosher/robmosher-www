import { Video, Section } from '@components'
import { watchOutForTheMoonlight, watchOutForTheMoonlightBlog } from '@data'

const WatchOutForTheMoonlight = () => (
  <Section>
    <Video
      date={watchOutForTheMoonlightBlog.date}
      video={watchOutForTheMoonlight}
    />
  </Section>
)

export default WatchOutForTheMoonlight
