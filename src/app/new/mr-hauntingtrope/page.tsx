import type { Metadata } from 'next'
import { Section, Video } from '@components'
import { mrHauntingtrope, mrHauntingtropeBlog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Mr. Hauntingtrope'),
  description: 'Music and videos Music for synthesizer and percussion, exploring various musical tropes, but with a spooky twist',
}

const MrHauntingtrope = () => (
  <Section>
    <Video
      date={mrHauntingtropeBlog.date}
      video={mrHauntingtrope}
    />
  </Section>
)

export default MrHauntingtrope
