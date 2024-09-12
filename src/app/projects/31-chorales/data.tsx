import { ReactNode } from 'react'
import { AppleMusicIcon } from '@assets'
import { Heading } from '@components'
import type { TAlbum } from '@types'

const cdnHost = process.env.NEXT_PUBLIC_CDN_HOST

const albumDescriptionJSX: ReactNode = (
  <div>
    <Heading as='h4'>
      Concept
    </Heading>
    <p className='mt-4'>
      Compose 31 Bach-style Chorales in 31 days for my 31st Birthday, raising $3,100 in fundraising to record and release the music.
    </p>
    <p className='mt-4'>
      Header photo by
      {' '}
      <a href='https://petrcancura.com/' className='text-bright'>Petr Cancura</a>
      .
    </p>
  </div>
)

export const thirtyOneChorales: TAlbum = {
  image: {
    src: '/images/projects/31-chorales.jpg',
  },
  description: albumDescriptionJSX,
  title: '31 Chorales',
  tracks: [
    {
      src: `//${cdnHost}/audio/31chorales-chorale-5.mp3`,
      title: 'Chorale #5',
    },
    {
      src: `//${cdnHost}/audio/31chorales-chorale-8.mp3`,
      title: 'Chorale #8',
    },
    {
      src: `//${cdnHost}/audio/31chorales-chorale-29.mp3`,
      title: 'Chorale #29',
    },
  ],
  vendors: [
    {
      href: 'https://music.apple.com/us/album/31-chorales/482767091',
      icon: <AppleMusicIcon />,
      text: 'Buy Album',
    },
  ],
}
