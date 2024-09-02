import { rightSingleQuote } from '@lib'
import type { TVideo } from '@types'

export const rangosTango: TVideo = {
  id: 'video--rangos-tango',
  alt: `Play video of Rango${rightSingleQuote}s Tango`,
  description: 'Filmed and edited by Garrett Burns (Memetic Studios).',
  personnel: [
    {
      id: 'video--rangos-tango--rob-mosher',
      name: 'Rob Mosher',
      role: 'music, clarinet',
    },
    {
      id: 'video--rangos-tango--micah-killion',
      name: 'Micah Killion',
      role: 'trumpet',
    },
    {
      id: 'video--rangos-tango--zack-brock',
      name: 'Zack Brock',
      role: 'violin',
    },
    {
      id: 'video--rangos-tango--stephanie-nilles',
      name: 'Stephanie Nilles',
      role: 'piano',
    },
    {
      id: 'video--rangos-tango--andrew-small',
      name: 'Andrew Small',
      role: 'acoustic bass',
    },
  ],
  subTitle: 'Polebridge',
  title: `Rango${rightSingleQuote}s Tango`,
  thumbnailSrc: '/images/video-thumbnails/polebridge-rangos-tango.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=Y6E4vbYQQLI',
}
