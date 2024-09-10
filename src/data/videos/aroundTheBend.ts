import type { TPersonnel, TVideo } from '@types'

const personnel: TPersonnel[] = [
  {
    name: 'Rob Mosher',
    role: 'music, clarinet',
  },
  {
    name: 'Micah Killion',
    role: 'trumpet',
  },
  {
    name: 'Zack Brock',
    role: 'violin',
  },
  {
    name: 'Stephanie Nilles',
    role: 'piano',
  },
  {
    name: 'Andrew Small',
    role: 'acoustic bass',
  },
]

export const aroundTheBend: TVideo = {
  imageSrc: '/images/videos/polebridge-around-the-bend.jpg',
  personnel,
  subTitle: 'Polebridge',
  title: 'Around the Bend',
  videoUrl: 'https://www.youtube.com/watch?v=COI1kaomKp0',
}
