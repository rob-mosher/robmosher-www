import { ReactNode } from 'react'
import type { TAlbum } from '@types'

const cdnHost = process.env.NEXT_PUBLIC_CDN_HOST

const albumDescriptionJSX: ReactNode = (
  <p>
    Utilizing video-game hardware and soundchips to create music inspired from games of their era.
  </p>
)

export const siliconDreams: TAlbum = {
  image: {
    src: '/images/projects/silicon-dreams.png',
  },
  description: albumDescriptionJSX,
  title: 'Silicon Dreams',
  tracks: [
    {
      src: `//${cdnHost}/audio/silicon-dreams-battle-boy.mp3`,
      subTitle: 'Nintendo Entertainment System / Famicom',
      title: 'BattleBoy',
    },
    {
      src: `//${cdnHost}/audio/silicon-dreams-watch-out-for-the-moonlight.mp3`,
      subTitle: 'Sega Genesis / Mega Drive',
      title: 'Watch Out for the Moonlight',
    },
    {
      src: `//${cdnHost}/audio/silicon-dreams-caverns.mp3`,
      subTitle: 'Super Nintendo / Super Famicom',
      title: 'Caverns',
    },
    {
      src: `//${cdnHost}/audio/silicon-dreams-battles-end.mp3`,
      subTitle: 'Sega Genesis / Mega Drive',
      title: 'Battle\'s End',
    },
  ],
}
