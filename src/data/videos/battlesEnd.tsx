import { ReactNode } from 'react'
import { rightSingleQuote } from '@lib'
import type { TVideo } from '@types'

const descriptionJSX: ReactNode = (
  <>
    <p>
      My take on a Stately Processional in Space, with an old-school feel by using the Sega Genesis / Mega Drive sound chip, the Yamaha YM2612.
    </p>
    <p className='mt-6'>
      Composed, performed, and recorded 16-Jan-2024 by Rob Mosher.
    </p>
    <p className='mt-6 italic'>
      Image created by DALL-E from OpenAI.
    </p>

  </>
)

export const battlesEnd: TVideo = {
  id: 'video--battles-end',
  date: 'Jan 16th, 2024',
  description: descriptionJSX,
  imageSrc: '/images/video-thumbnails/battles-end.png',
  slug: 'battles-end',
  subTitle: 'Processional Music for Space, via the Sega Genesis / Mega Drive',
  title: `Battle${rightSingleQuote}s End`,
  videoUrl: 'https://www.youtube.com/watch?v=572yRWJYG6I',
}
