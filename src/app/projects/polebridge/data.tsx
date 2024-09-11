import { ReactNode } from 'react'
import { AppleMusicIcon } from '@assets'
import { Heading } from '@components'
import type { TAlbum, TGalleryImage } from '@types'

const cdnHost = process.env.NEXT_PUBLIC_CDN_HOST

const albumDescriptionJSX: ReactNode = (
  <div>
    <Heading as='h4'>
      Concept
    </Heading>
    <p className='mt-4'>
      To compose an album based off my experiences in a picturesque remote town in Northern-Montana. This album brought together my passion to combine improvised and interpreted (composed) music.
    </p>
    <p className='mt-4'>
      Rob Mosher, music/woodwinds; Micah Killion, trumpet; John Marcus violin; Stephanie Nilles, piano; Andrew Small, bass/fiddle.
    </p>
    <p className='mt-4'>
      Guests: Petr Cancura, mandolin; Peter Lutek, contra-alto clarinet and bassoon.
    </p>
  </div>
)

export const polebridge: TAlbum = {
  image: {
    src: '/images/projects/polebridge.png',
  },
  description: albumDescriptionJSX,
  title: 'Polebridge',
  tracks: [
    {
      src: `//${cdnHost}/audio/polebridge-pass-the-beer-bread.mp3`,
      title: 'Pass the Beer Bread',
    },
    {
      src: `//${cdnHost}/audio/polebridge-north-by-northwest.mp3`,
      title: 'North by Northwest',
    },
    {
      src: `//${cdnHost}/audio/polebridge-parade-of-two.mp3`,
      title: 'Parade of Two',
    },
    {
      src: `//${cdnHost}/audio/polebridge-marigold.mp3`,
      title: 'Marigold',
    },
  ],
  vendors: [
    {
      href: 'https://itunes.apple.com/us/album/polebridge/id664908767?uo=4',
      icon: <AppleMusicIcon />,
      text: 'Buy Album',
    },
  ],
}

export const galleryImages: TGalleryImage[] = [
  {
    alt: 'A musician playing an acoustic bass',
    height: 523,
    src: '/images/polebridge-bass.jpg',
    width: 930,
  },
  {
    alt: 'A musician playing an acoustic bass, close-up on the bow',
    height: 523,
    src: '/images/polebridge-bow.jpg',
    width: 930,
  },
  {
    alt: 'A musician playing the trumpet',
    height: 523,
    src: '/images/polebridge-trumpet.jpg',
    width: 930,
  },
  {
    alt: 'A musician playing the violin',
    height: 523,
    src: '/images/polebridge-violin.jpg',
    width: 930,
  },
]
