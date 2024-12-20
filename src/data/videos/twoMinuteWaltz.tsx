import { ReactNode } from 'react'
import { Heading } from '@components'
import type { TVideo, TBlogItem } from '@types'

const descriptionJSX: ReactNode = (
  <>
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
      Hmm.
    </p>
  </>
)

export const twoMinuteWaltz: TVideo = {
  imageSrc: '/images/videos/two-minute-waltz.jpg',
  description: descriptionJSX,
  subTitle: 'Music for Music Box',
  title: 'Two-Minute Waltz',
  videoUrl: 'https://www.youtube.com/watch?v=GCI0K1Rw54U',
}

export const twoMinuteWaltzBlog: TBlogItem = {
  date: 'May 6th, 2024',
  slug: 'two-minute-waltz',
  type: 'video',
  media: twoMinuteWaltz,
}
