import { ReactNode } from 'react'
import type { TVideo } from '@types'

const descriptionJSX: ReactNode = (
  <>
    <p>
      Exploring various musical tropes, but with a spooky twist.
    </p>
    <p className='mt-4'>
      Composed, performed, and recorded by Rob Mosher.
    </p>
    <p className='mt-4 italic'>
      Image created by DALL-E from OpenAI.
    </p>
  </>
)

export const mrHauntingtrope: TVideo = {
  id: 'video--mr-hauntingtrope',
  date: 'March 15th, 2024',
  description: descriptionJSX,
  imageSrc: '/images/video-thumbnails/mr-hauntingtrope.png',
  slug: 'mr-hauntingtrope',
  subTitle: 'Music for synthesizer and percussion',
  title: 'Mr. Hauntingtrope',
  videoUrl: 'https://www.youtube.com/watch?v=1rNB7DYYffI',
}
