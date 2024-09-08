import { Video, Section } from '@components'
import { robotMeditations1Blog } from '@data'

const RobotMeditations1 = () => (
  <Section>
    <Video
      date={robotMeditations1Blog.date}
      video={robotMeditations1Blog.video}
    />
  </Section>
)

export default RobotMeditations1
