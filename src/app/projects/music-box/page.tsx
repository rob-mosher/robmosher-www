import type { Metadata } from 'next'
import { Heading, Section, Video } from '@components'
import { cookieJarParade, thinkersLullaby, twoMinuteWaltz } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Music Box'),
  description: 'Music and videos for Music Box project, featuring Two-Minute Waltz, Thinker\'s Lullaby, and Cookie Jar Parade',
}

const MusicBox = () => (
  <>
    <Section theme='bright'>
      <Heading className='z-50 flex justify-center text-6xl'>
        Music Box
      </Heading>
    </Section>
    <Section>
      <Video video={twoMinuteWaltz} />
    </Section>
    <Section theme='bright'>
      <Video video={thinkersLullaby} />
    </Section>
    <Section>
      <Video video={cookieJarParade} />
    </Section>
  </>
)

export default MusicBox
