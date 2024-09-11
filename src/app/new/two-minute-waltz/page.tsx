import type { Metadata } from 'next'
import { Video, Section } from '@components'
import { twoMinuteWaltz, twoMinuteWaltzBlog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Two-Minute Waltz'),
  description: 'Music and video for Music Box',
}

const TwoMinuteWaltz = () => (
  <Section>
    <Video
      date={twoMinuteWaltzBlog.date}
      video={twoMinuteWaltz}
    />
  </Section>
)

export default TwoMinuteWaltz
