import { ReactNode } from 'react'
import type { TVideo, TBlogItem } from '@types'

const descriptionJSX: ReactNode = (
  <>
    <p>
      Written for the Sega Genesis / Mega Drive sound chip, the Yamaha YM2612.
    </p>
    <p className='mt-4'>
      Composed, performed, and recorded by Rob Mosher.
    </p>
    <p className='mt-4 italic'>
      Image created by DALL-E from OpenAI.
    </p>
  </>
)

export const watchOutForTheMoonlight: TVideo = {
  description: descriptionJSX,
  imageSrc: '/images/videos/watch-out-for-the-moonlight.png',
  subTitle: 'Chiptune Music for Sega Genesis / Mega Drive',
  title: 'Watch Out for the Moonlight',
  videoUrl: 'https://www.youtube.com/watch?v=Hs_TlBHVHrs',
}

export const watchOutForTheMoonlightBlog: TBlogItem = {
  date: 'Jan 30th, 2024',
  slug: 'watch-out-for-the-moonlight',
  type: 'video',
  media: watchOutForTheMoonlight,
}
