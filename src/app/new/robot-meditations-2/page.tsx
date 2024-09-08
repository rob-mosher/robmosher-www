import { Video, Section } from '@components'
import { robotMeditations2Blog } from '@data'

const RobotMeditations2 = () => (
  <Section>
    <Video
      date={robotMeditations2Blog.date}
      video={robotMeditations2Blog.video}
    />
  </Section>
)

export default RobotMeditations2
