import { ReactNode } from 'react'
import { Heading } from '@components'
import type { TVideo, TBlogItem } from '@types'

const descriptionJSX: ReactNode = (
  <>
    <p>
      Composed and performed 30-Dec-2023 by Rob Mosher.
    </p>
    <p className='mt-4 italic'>
      Image created by DALL-E from OpenAI.
    </p>
    <Heading as='h4' className='mt-6'>
      Lyrics
    </Heading>
    <p>
      Let the syrup pour and pour,
      <br />
      Gravity shall bring us more.
    </p>
  </>
)

export const pancakeDaydreams: TVideo = {
  description: descriptionJSX,
  imageSrc: '/images/videos/pancake-daydreams.png',
  subTitle: 'Music for Ondioline Synthesizer',
  title: 'Pancake Daydreams',
  videoUrl: 'https://www.youtube.com/watch?v=T9JstPzxeS0',
}

export const pancakeDaydreamsBlog: TBlogItem = {
  date: 'Dec 30th, 2023',
  slug: 'pancake-daydreams',
  type: 'video',
  media: pancakeDaydreams,
}
