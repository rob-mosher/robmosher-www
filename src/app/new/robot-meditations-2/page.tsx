import type { Metadata } from 'next'
import { Video, Section } from '@components'
import { robotMeditations2, robotMeditations2Blog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Robot Meditations #2'),
  description: 'Music and video for synthesizer',
}

const RobotMeditations2 = () => (
  <Section>
    <Video
      date={robotMeditations2Blog.date}
      video={robotMeditations2}
    />
  </Section>
)

export default RobotMeditations2
