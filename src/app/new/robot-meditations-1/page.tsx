import { Video, Section } from '@components'
import { robotMeditations1, robotMeditations1Blog } from '@data'

const RobotMeditations1 = () => (
  <Section>
    <Video
      date={robotMeditations1Blog.date}
      video={robotMeditations1}
    />
  </Section>
)

export default RobotMeditations1
