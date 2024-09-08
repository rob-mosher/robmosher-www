import { Section, Video } from '@components'
import { cookieJarParadeBlog } from '@data'

const CookieJarParade = () => (
  <Section>
    <Video
      date={cookieJarParadeBlog.date}
      video={cookieJarParadeBlog.video}
    />
  </Section>
)

export default CookieJarParade
