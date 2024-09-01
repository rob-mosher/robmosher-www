import { rightSingleQuote } from '@lib'
import type { TVideo } from '@types'

export const aroundTheBend: TVideo = {
  id: 'video-polebridge-around-the-bend',
  alt: 'Video of Around the Bend',
  personnel: [
    {
      id: 'polebridge-personnel-rob-mosher',
      name: 'Rob Mosher',
      role: 'music, clarinet',
    },
    {
      id: 'polebridge-personnel-micah-killion',
      name: 'Micah Killion',
      role: 'trumpet',
    },
    {
      id: 'polebridge-personnel-zack-brock',
      name: 'Zack Brock',
      role: 'violin',
    },
    {
      id: 'polebridge-personnel-stephanie-nilles',
      name: 'Stephanie Nilles',
      role: 'piano',
    },
    {
      id: 'polebridge-personnel-andrew-small',
      name: 'Andrew Small',
      role: 'acoustic bass',
    },
  ],
  subTitle: 'Polebridge',
  title: 'Around the Bend',
  thumbnailSrc: '/images/video-thumbnails/polebridge-around-the-bend.jpg',
  videoUrl: 'https://www.youtube.com/watch?v=COI1kaomKp0',
}

export const rangosTango: TVideo = {
  id: 'video-polebridge-rangos-tango',
  alt: `Video of Rango${rightSingleQuote}s Tango`,
  subTitle: 'Polebridge',
  title: `Rango${rightSingleQuote}s Tango`,
  videoUrl: 'https://www.youtube.com/watch?v=Y6E4vbYQQLI',
}
