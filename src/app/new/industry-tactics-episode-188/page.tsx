import type { Metadata } from 'next'
import { Section, IframePlayer } from '@components'
import { industryTacticsEpisode188, industryTacticsEpisode188Blog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Industry Tactics Episode 188'),
  description: 'Podcast episode featuring Rob Mosher discussing collaboration, carousels, 8-bit chips and more',
}

const IndustryTacticsEpisode188 = () => (
  <Section>
    <IframePlayer
      date={industryTacticsEpisode188Blog.date}
      iframe={{
        description: industryTacticsEpisode188.description,
        iframeSrc: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1976593659&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
        subTitle: industryTacticsEpisode188.subTitle,
        title: industryTacticsEpisode188.title,
      }}
    />
  </Section>
)

export default IndustryTacticsEpisode188
