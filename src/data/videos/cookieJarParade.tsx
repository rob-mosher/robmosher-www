import { ReactNode } from 'react'
import { Heading } from '@components'
import type { TVideo } from '@types'

const descriptionJSX: ReactNode = (
  <>
    <Heading as='h4' className='mt-6'>
      Description
    </Heading>
    <p className='mt-4'>
      Composed, performed, and recorded by Rob Mosher.
    </p>
    <p className='mt-4 italic'>
      Image created by DALL-E from OpenAI.
    </p>
  </>
)

export const cookieJarParade: TVideo = {
  id: 'video--cookie-jar-parade',
  imageSrc: '/images/video-thumbnails/cookie-jar-parade.png',
  date: 'May 29th, 2024',
  description: descriptionJSX,
  slug: 'cookie-jar-parade',
  subTitle: 'Music for Music Box',
  title: 'Cookie Jar Parade',
  videoUrl: 'https://www.youtube.com/watch?v=ekO_g7RQ1E8',
}
