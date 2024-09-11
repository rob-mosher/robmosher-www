import { ReactNode } from 'react'
import type { TBlogItem, TVideo } from '@types'

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
  description: descriptionJSX,
  imageSrc: '/images/videos/battle-boy.png',
  subTitle: 'Chiptune Music for Nintendo / Famicom',
  title: 'BattleBoy',
  videoUrl: 'https://www.youtube.com/watch?v=wiO1Hczb5Hs',
}

export const battleBoyBlog: TBlogItem = {
  date: 'June 3rd, 2024',
  slug: 'battle-boy',
  video: battleBoy,
}
