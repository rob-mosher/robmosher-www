import type { TVideo } from '@types'

const descriptionJSX = (
  <>
    <p>
      Composed, performed, and recorded by Rob Mosher.
    </p>
    <p className='mt-4 italic'>
      Image created by DALL-E from OpenAI.
    </p>
  </>
)

export const thinkersLullaby: TVideo = {
  id: 'video--thinkers-lullaby',
  date: 'April 15th, 2024',
  description: descriptionJSX,
  imageSrc: '/images/video-thumbnails/thinkers-lullaby.png',
  slug: 'thinkers-lullaby',
  subTitle: 'Music for Music Box',
  title: 'Thinkers Lullaby',
  videoUrl: 'https://www.youtube.com/watch?v=NCvunShmKwQ',
}
