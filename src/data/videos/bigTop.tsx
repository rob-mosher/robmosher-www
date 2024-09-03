import { Heading } from '@components'
// import { rightSingleQuote } from '@lib'
import type { TVideo } from '@types'

const descriptionJSX = (
  <div>
    <p>Composed, performed, and recorded by Rob Mosher.</p>
    <p>Image created by DALL-E from OpenAI.</p>
    <Heading as='h4'>LYRICS</Heading>
    <p>
      All the things you do,
      <br />
      I&lsquo;m in love with you.
    </p>
  </div>
)

export const bigTop: TVideo = {
  id: 'video--big-top',
  alt: 'Play video of Big Top',
  description: descriptionJSX,
  title: 'Big Top',
  thumbnailSrc: '/images/video-thumbnails/carousel-big-top.png',
  videoUrl: 'https://www.youtube.com/watch?v=bfza7juxe3g',
}
