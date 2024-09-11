import { ReactNode } from 'react'
import { AppleMusicIcon } from '@assets'
import type { TAlbum, TQuote } from '@types'

const cdnHost = process.env.NEXT_PUBLIC_CDN_HOST

const albumDescriptionJSX: ReactNode = (
  <p>
    <span className='italic'>Storytime &mdash; The Tortoise</span>
    , their debut CD, is a lushly scored musical odyssey that contains echoes of Wayne Shorter, Gil Evans, Kurt Weill, Darius Milhaud, Debussy and Bach, reflecting Mosher’s embrace of a wide range of influences which have coalesced to create his singularly independent compositional voice.  The CD traverses many musical landscapes — all held together by Mosher’s multi-faceted orchestration and ingenious use of instrumentation (saxophones, oboe, English horn, clarinets, flute, trumpet, French horn, trombone, electric and acoustic guitar, plus bass and drums).
  </p>
)

export const storyville: TAlbum = {
  image: {
    src: '/images/projects/storyville.jpg',
  },
  description: albumDescriptionJSX,
  title: 'Storyville',
  tracks: [
    {
      src: `//${cdnHost}/audio/storyville-what-snowflakes-are-plotting.mp3`,
      title: 'What Snowflakes are Plotting',
    },
    {
      src: `//${cdnHost}/audio/storyville-sands-of-maundune.mp3`,
      title: 'The Sands of Maundune',
    },
    {
      src: `//${cdnHost}/audio/storyville-sleeplesslullaby.mp3`,
      title: 'Sleepless Lullaby',
    },
  ],
  vendors: [
    {
      href: 'https://itunes.apple.com/us/album/storytime-the-tortoise/id292311820?uo=4',
      icon: <AppleMusicIcon />,
      text: 'Buy Album',
    },
  ],
}

export const quotes: TQuote[] = [
  {
    quotation: 'Strong, well crafted, highly arranged, listenable, and accessible music',
    citation: 'All Music Guide',
  },
  {
    quotation: 'A gifted composer who offers a fresh and updated approach',
    citation: 'All About Jazz',
  },
  {
    quotation: 'Ambitious, thoroughly composed music',
    citation: 'Ottawa Citizen',
  },

]
