import type { TPersonnel, TVideo } from '@types'

const personnel: TPersonnel[] = [
  {
    name: 'Micah Killion',
    role: 'Trumpet',
  },
  {
    name: 'Rob Mosher',
    role: 'Harpsichord',
  },
  {
    name: 'Jen McKeeman, Alison Hall',
    role: 'Violin',
  },
  {
    name: 'Hailey Walterman',
    role: 'Viola',
  },
  {
    name: 'Megan Chartier',
    role: 'Cello',
  },
]

export const concertoForOboe: TVideo = {
  description: 'Film and Lighting by Ryan Gates.',
  imageSrc: '/images/videos/concerto-for-oboe.jpg',
  personnel,
  title: 'Concerto for Oboe',
  videoUrl: 'https://www.youtube.com/watch?v=LWP9XBz7XM0',
}
