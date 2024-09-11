import type { Metadata } from 'next'
import { Section, Video } from '@components'
import { caverns, cavernsBlog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Caverns'),
  description: 'Chiptune music and video written in the 16-bit style of the Super Nintendo / Super Famicom.',
}

const Caverns = () => (
  <Section>
    <Video
      date={cavernsBlog.date}
      video={caverns}
    />
  </Section>
)

export default Caverns
