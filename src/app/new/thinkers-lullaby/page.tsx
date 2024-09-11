import type { Metadata } from 'next'
import { Video, Section } from '@components'
import { thinkersLullaby, thinkersLullabyBlog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Thinker\'s Lullaby'),
  description: 'Music and video for Music Box',
}

const ThinkersLullaby = () => (
  <Section>
    <Video
      date={thinkersLullabyBlog.date}
      video={thinkersLullaby}
    />
  </Section>
)

export default ThinkersLullaby
