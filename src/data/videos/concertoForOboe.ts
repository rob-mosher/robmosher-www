import type { TVideo } from '@types'

const personnel = [
  {
    id: 'video--concerto-for-oboe--trumpet',
    name: 'Micah Killion',
    role: 'Trumpet',
  },
  {
    id: 'video--concerto-for-oboe--harpsichord',
    name: 'Rob Mosher',
    role: 'Harpsichord',
  },
  {
    id: 'video--concerto-for-oboe--violin',
    name: 'Jen McKeeman, Alison Hall',
    role: 'Violin',
  },
  {
    id: 'video--concerto-for-oboe--viola',
    name: 'Hailey Walterman',
    role: 'Viola',
  },
  {
    id: 'video--concerto-for-oboe--cello',
    name: 'Megan Chartier',
    role: 'Cello',
  },
]

export const concertoForOboe: TVideo = {
  id: 'video--concerto-for-oboe',
  description: 'Film and Lighting by Ryan Gates.',
  imageSrc: '/images/video-thumbnails/concerto-for-oboe.jpg',
  personnel,
  title: 'Concerto for Oboe',
  videoUrl: 'https://www.youtube.com/watch?v=LWP9XBz7XM0',
}
