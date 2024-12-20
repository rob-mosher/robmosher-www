import { ReactNode } from 'react'
import type { TVideo, TBlogItem } from '@types'

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
  description: descriptionJSX,
  imageSrc: '/images/videos/mr-hauntingtrope.png',
  subTitle: 'Music for synthesizer and percussion',
  title: 'Mr. Hauntingtrope',
  videoUrl: 'https://www.youtube.com/watch?v=1rNB7DYYffI',
}

export const mrHauntingtropeBlog: TBlogItem = {
  date: 'March 15th, 2024',
  slug: 'mr-hauntingtrope',
  type: 'video',
  media: mrHauntingtrope,
}
