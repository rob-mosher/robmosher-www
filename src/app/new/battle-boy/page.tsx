import type { Metadata } from 'next'
import { Section, Video } from '@components'
import { battleBoy, battleBoyBlog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('BattleBoy'),
  description: 'Chiptune music and video written in the 8-bit style of the Nintendo / Famicom utilizing FamiTracker, a virtualized Ricoh 2A03 sound chip from the NES',
}

const BattleBoy = () => (
  <Section>
    <Video
      date={battleBoyBlog.date}
      video={battleBoy}
    />
  </Section>
)

export default BattleBoy
