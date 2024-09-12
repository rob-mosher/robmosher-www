import { AppleMusicIcon } from '@assets'
import type { TAlbum } from '@types'

const cdnHost = process.env.NEXT_PUBLIC_CDN_HOST

// TODO add description
// const albumDescriptionJSX: ReactNode = ()

export const trickle: TAlbum = {
  image: {
    src: '/images/projects/trickle.jpg',
  },
  personnel: [
    {
      name: 'Rupert Boyd',
      role: 'Acoustic Guitars',
    },
    {
      name: 'Rob Mosher',
      role: 'Music',
    },
  ],
  title: 'Trickle',
  tracks: [
    {
      src: `//${cdnHost}/audio/trickle.mp3`,
      title: 'Trickle',
    },
  ],
  vendors: [
    {
      href: 'https://music.apple.com/us/album/trickle-feat-rupert-boyd-single/439121005',
      icon: <AppleMusicIcon />,
      text: 'Buy Album',
    },
  ],
}
