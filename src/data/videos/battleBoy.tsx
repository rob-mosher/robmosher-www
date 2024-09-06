import { ReactNode } from 'react'
import type { TVideo } from '@types'

const descriptionJSX: ReactNode = (
  <>
    <p>
      Written in the 8-bit style of the Nintendo / Famicom utilizing FamiTracker, a virtualized Ricoh 2A03 sound chip from the NES.
    </p>
    <p className='mt-4'>
      Composed, performed, and recorded by Rob Mosher.
    </p>
    <p className='mt-4 italic'>
      Image created by DALL-E from OpenAI.
    </p>
  </>
)

export const battleBoy: TVideo = {
  id: 'video--battle-boy',
  date: 'June 3rd, 2024',
  description: descriptionJSX,
  imageSrc: '/images/video-thumbnails/battle-boy.png',
  slug: 'battle-boy',
  subTitle: 'Music for Nintendo / Famicom',
  title: 'Battle Boy',
  videoUrl: 'https://www.youtube.com/watch?v=wiO1Hczb5Hs',
}
