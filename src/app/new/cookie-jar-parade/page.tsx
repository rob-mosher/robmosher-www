import { Section, Video } from '@components'
import { cookieJarParade, cookieJarParadeBlog } from '@data'

const CookieJarParade = () => (
  <Section>
    <Video
      date={cookieJarParadeBlog.date}
      video={cookieJarParade}
    />
  </Section>
)

export default CookieJarParade
