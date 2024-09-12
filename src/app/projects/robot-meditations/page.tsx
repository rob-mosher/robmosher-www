import type { Metadata } from 'next'
import { Heading, Section, Video } from '@components'
import { robotMeditations1, robotMeditations2 } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Silicon Dreams'),
  description: 'Music and videos for Silicon Dreams project, featuring various Sega and Nintendo consoles',
}

const RobotMeditations = () => (
  <>
    <Section theme='bright'>
      <Heading className='z-50 flex justify-center text-6xl'>
        Robot Meditations
      </Heading>
    </Section>
    <Section>
      <Video video={robotMeditations1} />
    </Section>
    <Section theme='bright'>
      <Video video={robotMeditations2} />
    </Section>
  </>
)

export default RobotMeditations
