import type { TVideo } from '@types'

const personnel = [
  {
    id: 'video--around-the-bend--rob-mosher',
    name: 'Rob Mosher',
    role: 'music, clarinet',
  },
  {
    id: 'video--around-the-bend--micah-killion',
    name: 'Micah Killion',
    role: 'trumpet',
  },
  {
    id: 'video--around-the-bend--zack-brock',
    name: 'Zack Brock',
    role: 'violin',
  },
  {
    id: 'video--around-the-bend--stephanie-nilles',
    name: 'Stephanie Nilles',
    role: 'piano',
  },
  {
    id: 'video--around-the-bend--andrew-small',
    name: 'Andrew Small',
    role: 'acoustic bass',
  },
]

export const aroundTheBend: TVideo = {
  id: 'video--around-the-bend',
  alt: 'Play video of Around the Bend',
  personnel,
  subTitle: 'Polebridge',
  title: 'Around the Bend',
  thumbnailSrc: '/images/video-thumbnails/polebridge-around-the-bend.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=COI1kaomKp0',
}
