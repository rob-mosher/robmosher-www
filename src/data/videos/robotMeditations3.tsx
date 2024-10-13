import { ReactNode } from 'react'
import type { TBlogItem, TVideo } from '@types'

const descriptionJSX: ReactNode = (
  <>
    <p className='mt-4'>
      Composed, performed, and recorded by Rob Mosher.
    </p>
    <p className='mt-4 italic'>
      Footage is in the public domain, and its digitization is licensed for use.
    </p>
  </>
)

export const robotMeditations3: TVideo = {
  description: descriptionJSX,
  imageSrc: '/images/videos/robot-meditations-3.jpg',
  subTitle: 'Music for Robots',
  title: 'Robot Meditations #3',
  videoUrl: 'https://www.youtube.com/watch?v=1r2KkodqVoc',
}

export const robotMeditations3Blog: TBlogItem = {
  date: 'October 13th, 2024',
  slug: 'robot-meditations-3',
  video: robotMeditations3,
}
