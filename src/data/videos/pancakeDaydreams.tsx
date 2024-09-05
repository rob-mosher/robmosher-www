import { Heading } from '@components'
import type { TVideo } from '@types'

const descriptionJSX = (
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
  id: 'video--pancake-daydreams',
  date: 'Dec 30th, 2023',
  description: descriptionJSX,
  imageAlt: 'Image of Pancake Daydreams video',
  imageSrc: '/images/video-thumbnails/pancake-daydreams.png',
  slug: 'pancake-daydreams',
  subTitle: 'Music for Ondioline Synthesizer',
  title: 'Pancake Daydreams',
  videoUrl: 'https://www.youtube.com/watch?v=T9JstPzxeS0',
}
