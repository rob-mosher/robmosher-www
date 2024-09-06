import { ReactNode } from 'react'
import type { TVideo } from '@types'

const descriptionJSX: ReactNode = (
  <>
    <p className='mt-4'>
      Composed, performed, and recorded by Rob Mosher.
    </p>
    <p className='mt-4'>
      Written in the 16-bit style of the Super Nintendo / Super Famicom.
    </p>
    <p className='mt-4 italic'>
      Image created by DALL-E from OpenAI.
    </p>
  </>
)

export const caverns: TVideo = {
  id: 'video--caverns',
  date: 'May 23rd, 2024',
  description: descriptionJSX,
  imageSrc: '/images/video-thumbnails/caverns.png',
  slug: 'caverns',
  subTitle: 'Music for Super Nintendo / Super Famicom',
  title: 'Caverns',
  videoUrl: 'https://www.youtube.com/watch?v=ddf_osbh8vA',
}
