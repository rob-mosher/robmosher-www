import type { Metadata } from 'next'
import { Heading, Section, Video } from '@components'
import { robotMeditations1, robotMeditations2, robotMeditations3 } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Robot Meditations'),
  description: 'Music and videos for Robot Meditations project',
}

const RobotMeditations = () => (
  <>
    <Section theme='bright'>
      <Heading className='z-50 flex justify-center text-6xl'>
        Robot Meditations
      </Heading>
    </Section>
    <Section theme='darkest'>
      <Video video={robotMeditations3} />
    </Section>
    <Section theme='bright'>
      <Video video={robotMeditations2} />
    </Section>
    <Section>
      <Video video={robotMeditations1} />
    </Section>
  </>
)

export default RobotMeditations
