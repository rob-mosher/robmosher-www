import { ReactNode } from 'react'
import { Heading } from '@components'
import type { TVideo } from '@types'

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
  id: 'video--big-top',
  description: descriptionJSX,
  imageSrc: '/images/video-thumbnails/carousel-big-top.png',
  title: 'Big Top',
  videoUrl: 'https://www.youtube.com/watch?v=bfza7juxe3g',
}
