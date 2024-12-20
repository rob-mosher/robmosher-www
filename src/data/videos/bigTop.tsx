import { ReactNode } from 'react'
import { Heading } from '@components'
import type { TVideo, TBlogItem } from '@types'

const descriptionJSX: ReactNode = (
  <>
    <p>Composed, performed, and recorded by Rob Mosher.</p>
    <p className='mt-4 italic'>Image created by DALL-E from OpenAI.</p>
    <Heading as='h4' className='mt-6'>LYRICS</Heading>
    <p>
      All the things you do,
      <br />
      I&lsquo;m in love with you.
    </p>
  </>
)

export const bigTop: TVideo = {
  description: descriptionJSX,
  imageSrc: '/images/videos/carousel-big-top.png',
  subTitle: 'Music for Carousel',
  title: 'Big Top',
  videoUrl: 'https://www.youtube.com/watch?v=bfza7juxe3g',
}

export const bigTopBlog: TBlogItem = {
  date: 'April 5th, 2024',
  slug: 'big-top',
  type: 'video',
  media: bigTop,
}
