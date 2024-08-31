import type { TPersonnelListItem, TVideoItem } from '@types'

export const polebridgePersonnel: TPersonnelListItem[] = [
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
]

export const videos: Record<string, TVideoItem> = {
  aroundTheBend: {
    id: 'video-polebridge-around-the-bend',
    alt: 'Video of Around the Bend',
    thumbnail: '/images/video-thumbnails/polebridge-around-the-bend.jpg',
    url: 'https://www.youtube.com/watch?v=COI1kaomKp0',
  },
}
