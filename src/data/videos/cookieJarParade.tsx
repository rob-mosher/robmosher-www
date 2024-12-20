import { ReactNode } from 'react'
import type { TVideo, TBlogItem } from '@types'

const descriptionJSX: ReactNode = (
  <>
    <p className='mt-4'>
      Composed, performed, and recorded by Rob Mosher.
    </p>
    <p className='mt-4 italic'>
      Image created by DALL-E from OpenAI.
    </p>
  </>
)

export const cookieJarParade: TVideo = {
  imageSrc: '/images/videos/cookie-jar-parade.png',
  description: descriptionJSX,
  subTitle: 'Music for Music Box',
  title: 'Cookie Jar Parade',
  videoUrl: 'https://www.youtube.com/watch?v=ekO_g7RQ1E8',
}

export const cookieJarParadeBlog: TBlogItem = {
  date: 'May 29th, 2024',
  slug: 'cookie-jar-parade',
  type: 'video',
  media: cookieJarParade,
}
