import { rightSingleQuote } from '@lib'
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

export const rangosTango: TVideo = {
  imageSrc: '/images/video-thumbnails/polebridge-rangos-tango.jpg',
  description: 'Filmed and edited by Garrett Burns (Memetic Studios).',
  personnel,
  subTitle: 'Polebridge',
  title: `Rango${rightSingleQuote}s Tango`,
  videoUrl: 'https://www.youtube.com/watch?v=Y6E4vbYQQLI',
}
