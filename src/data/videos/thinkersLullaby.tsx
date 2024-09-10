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

export const thinkersLullaby: TVideo = {
  description: descriptionJSX,
  imageSrc: '/images/videos/thinkers-lullaby.png',
  subTitle: 'Music for Music Box',
  title: 'Thinkers Lullaby',
  videoUrl: 'https://www.youtube.com/watch?v=NCvunShmKwQ',
}

export const thinkersLullabyBlog: TBlogItem = {
  date: 'April 15th, 2024',
  slug: 'thinkers-lullaby',
  video: thinkersLullaby,
}
