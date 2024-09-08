import { Section, Video } from '@components'
import { pancakeDaydreamsBlog } from '@data'

const PancakeDaydreams = () => (
  <Section>
    <Video
      date={pancakeDaydreamsBlog.date}
      video={pancakeDaydreamsBlog.video}
    />
  </Section>
)

export default PancakeDaydreams
