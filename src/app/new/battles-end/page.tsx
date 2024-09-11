import type { Metadata } from 'next'
import { Section, Video } from '@components'
import { battlesEnd, battlesEndBlog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Battle\'s End'),
  description: 'Chiptune music and video with an old-school feel by using the Sega Genesis / Mega Drive sound chip, the Yamaha YM2612',
}

const BattlesEnd = () => (
  <Section>
    <Video
      date={battlesEndBlog.date}
      video={battlesEnd}
    />
  </Section>
)

export default BattlesEnd
