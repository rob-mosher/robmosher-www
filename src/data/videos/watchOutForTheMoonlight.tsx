import { ReactNode } from 'react'
import { Heading } from '@components'
import type { TBlogItem, TVideo } from '@types'

const descriptionJSX: ReactNode = (
  <>
    <Heading as='h4' className='mt-6'>
      Description
    </Heading>
    <p>
      An exploration of the soundchip of the Sega Genesis / Mega Drive, the Yamaha YM2612.
    </p>
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
      Watch out for the moonlight,
      <br />
      It&rsquo;s coming for you.
      <br />
      Watch out for the moonlight,
      <br />
      Oooo.
      <br />
      Watch out for the moonlight,
      <br />
      It&rsquo;s coming for you.
    </p>
    <p className='mt-4'>
      Here comes the sunrise,
      <br />
      It&rsquo;s warm and filling the sky!
    </p>
  </>
)

export const watchOutForTheMoonlight: TVideo = {
  description: descriptionJSX,
  imageSrc: '/images/video-thumbnails/watch-out-for-the-moonlight.png',
  subTitle: 'Music for Sega Genesis / Mega Drive',
  title: 'Watch Out for the Moonlight',
  videoUrl: 'https://www.youtube.com/watch?v=GBPDVF6nhdM',
}

export const watchOutForTheMoonlightBlog: TBlogItem = {
  date: 'Jan 30th, 2024',
  slug: 'watch-out-for-the-moonlight',
  video: watchOutForTheMoonlight,
}
