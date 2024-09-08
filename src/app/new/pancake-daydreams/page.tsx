import { Section, Video } from '@components'
import { pancakeDaydreams, pancakeDaydreamsBlog } from '@data'

const PancakeDaydreams = () => (
  <Section>
    <Video
      date={pancakeDaydreamsBlog.date}
      video={pancakeDaydreams}
    />
  </Section>
)

export default PancakeDaydreams
