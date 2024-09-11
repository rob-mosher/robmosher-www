import type { Metadata } from 'next'
import { Video, Section } from '@components'
import { watchOutForTheMoonlight, watchOutForTheMoonlightBlog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Watch Out for the Moonlight'),
  description: 'Chiptune music and video explorating the soundchip of the Sega Genesis / Mega Drive, the Yamaha YM2612',
}

const WatchOutForTheMoonlight = () => (
  <Section>
    <Video
      date={watchOutForTheMoonlightBlog.date}
      video={watchOutForTheMoonlight}
    />
  </Section>
)

export default WatchOutForTheMoonlight
