import type { Metadata } from 'next'
import { Section, Video } from '@components'
import { cookieJarParade, cookieJarParadeBlog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Cookie Jar Parade'),
  description: 'Music and video for Music Box',
}

const CookieJarParade = () => (
  <Section>
    <Video
      date={cookieJarParadeBlog.date}
      video={cookieJarParade}
    />
  </Section>
)

export default CookieJarParade
