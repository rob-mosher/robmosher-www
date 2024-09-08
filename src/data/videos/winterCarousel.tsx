import { ReactNode } from 'react'
import type { TBlogItem, TVideo } from '@types'

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
  imageSrc: '/images/video-thumbnails/winter-carousel.png',
  subTitle: 'Music for Carousel',
  title: 'Winter Carousel',
  videoUrl: 'https://www.youtube.com/watch?v=DDN_p8FS4YY',
}

export const winterCarouselBlog: TBlogItem = {
  date: 'March 26th, 2024',
  slug: 'winter-carousel',
  video: winterCarousel,
}
