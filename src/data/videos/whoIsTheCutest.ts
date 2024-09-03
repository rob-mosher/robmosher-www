import { rightSingleQuote } from '@lib'
import type { TVideo } from '@types'

const personnel = [
  {
    id: 'video--who-is-the-cutest--rob-mosher',
    name: 'Rob Mosher',
    role: 'music, concept',
  },
  {
    id: 'video--who-is-the-cutest--christopher-mennuto',
    name: 'Christopher Mennuto',
    role: 'video design',
  },
]

export const whoIsTheCutest: TVideo = {
  id: 'video--who-is-the-cutest',
  alt: 'Watch video for Who Is The Cutest?',
  description: `Spoiler alert: it${rightSingleQuote}s yoooou.`,
  personnel,
  title: 'Who is the Cutest?',
  thumbnailSrc: '/images/video-thumbnails/who-is-the-cutest.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=OOscn6lrabs',
}
