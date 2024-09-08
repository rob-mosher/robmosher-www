import { rightSingleQuote } from '@lib'
import type { TPersonnel, TVideo } from '@types'

const personnel: TPersonnel[] = [
  {
    name: 'Rob Mosher',
    role: 'music, concept',
  },
  {
    name: 'Christopher Mennuto',
    role: 'video design',
  },
]

export const whoIsTheCutest: TVideo = {
  imageSrc: '/images/video-thumbnails/who-is-the-cutest.jpg',
  description: `Spoiler alert: it${rightSingleQuote}s yoooou.`,
  personnel,
  title: 'Who is the Cutest?',
  videoUrl: 'https://www.youtube.com/watch?v=OOscn6lrabs',
}
