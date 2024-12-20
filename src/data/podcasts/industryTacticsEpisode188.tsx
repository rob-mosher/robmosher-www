import { ReactNode } from 'react'
import type { TBlogItem, TPodcast } from '@types'

const descriptionJSX: ReactNode = (
  <blockquote>
    &ldquo;What a time catching up with the great Rob Mosher from his apartment in New York City.
    We get into a heavy conversation about collaboration, carousels, 8-bit chips and a case
    of egg nog. Put on your festive sweaters and let&lsquo;s get into some serious tactics with the
    creative force, Rob Mosher! Check out Rob&apos;s Collaborators Framework at
    {' '}
    <a href='https://collaborators.group' className='underline hover:opacity-75'>collaborators.group</a>
    &rdquo;
  </blockquote>
)

export const industryTacticsEpisode188: TPodcast = {
  description: descriptionJSX,
  imageSrc: '/images/podcasts/industry-tactics-episode-188.jpg',
  podcastUrl: 'https://soundcloud.com/industry-tactics/ep-188-rob-mosher',
  subTitle: 'Episode 188 - Rob Mosher',
  summary: '"What a time catching up with the great Rob Mosher from his apartment in New York City. We get into a heavy conversation about collaboration, ..."',
  title: 'Podcast: Industry Tactics',
}

export const industryTacticsEpisode188Blog: TBlogItem = {
  date: 'December 9th, 2024',
  slug: 'industry-tactics-episode-188',
  type: 'podcast',
  media: industryTacticsEpisode188,
}
