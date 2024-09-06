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
    <Heading as='h4' className='mt-6'>
      Lyrics
    </Heading>
    <p>
      Two-minute waltz,
      <br />
      Two-minute waltz,
      <br />
      Mmm.
    </p>
  </>
)

export const twoMinuteWaltz: TVideo = {
  id: 'video--two-minute-waltz',
  imageSrc: '/images/video-thumbnails/two-minute-waltz.jpg',
  description: descriptionJSX,
  slug: 'two-minute-waltz',
  subTitle: 'Music for Music Box',
  title: 'Two-Minute Waltz',
  videoUrl: 'https://www.youtube.com/watch?v=GCI0K1Rw54U',
}
