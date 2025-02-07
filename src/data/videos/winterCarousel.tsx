import { ReactNode } from 'react'
import type { TVideo, TBlogItem } from '@types'

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
  description: descriptionJSX,
  imageSrc: '/images/videos/winter-carousel.png',
  subTitle: 'Music for Carousel',
  title: 'Winter Carousel',
  videoUrl: 'https://www.youtube.com/watch?v=DDN_p8FS4YY',
}

export const winterCarouselBlog: TBlogItem = {
  date: 'March 26th, 2024',
  slug: 'winter-carousel',
  type: 'video',
  media: winterCarousel,
}
