import type { Metadata } from 'next'
import { Video, Section } from '@components'
import { robotMeditations3, robotMeditations3Blog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Robot Meditations #3'),
  description: 'Music and video for synthesizer',
}

const RobotMeditations3 = () => (
  <Section theme='darkest'>
    <Video
      date={robotMeditations3Blog.date}
      video={robotMeditations3}
    />
  </Section>
)

export default RobotMeditations3
