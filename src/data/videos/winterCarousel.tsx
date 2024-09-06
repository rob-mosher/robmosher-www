import { ReactNode } from 'react'
import type { TVideo } from '@types'

const descriptionJSX: ReactNode = (
  <>
    <p>
      Composed, performed, and recorded by Rob Mosher.
    </p>
    <p className='mt-4 italic'>
      Image created by DALL-E from OpenAI.
    </p>
  </>
)

export const winterCarousel: TVideo = {
  id: 'video--winter-carousel',
  date: 'March 26th, 2024',
  description: descriptionJSX,
  imageSrc: '/images/video-thumbnails/winter-carousel.png',
  slug: 'winter-carousel',
  subTitle: 'Music for Carousel',
  title: 'Winter Carousel',
  videoUrl: 'https://www.youtube.com/watch?v=DDN_p8FS4YY',
}
