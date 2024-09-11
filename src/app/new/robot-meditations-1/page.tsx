import type { Metadata } from 'next'
import { Video, Section } from '@components'
import { robotMeditations1, robotMeditations1Blog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Robot Meditations #1'),
  description: 'Music and video for synthesizer',
}

const RobotMeditations1 = () => (
  <Section>
    <Video
      date={robotMeditations1Blog.date}
      video={robotMeditations1}
    />
  </Section>
)

export default RobotMeditations1
