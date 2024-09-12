import { ReactNode } from 'react'
import type { TAlbum } from '@types'

const cdnHost = process.env.NEXT_PUBLIC_CDN_HOST

const albumDescriptionJSX: ReactNode = (
  <>
    <p>
      To effectively write for an instrument, I believe it&rsquo;s important to understand its mechanics &mdash; both in how it operates and how the performer integrates with it. I aim to have the music I compose be equally enjoyable to listen to as it is to perform.
    </p>
    <p>
      The studies below represent some of my explorations that have helped lead me to this goal. I wish to express my gratitude to my friends and colleagues who have shared their time and expertise in shaping the composer I am today.
    </p>
  </>
)

export const studies: TAlbum = {
  image: {
    src: '/images/projects/studies.png',
  },
  description: albumDescriptionJSX,
  title: 'Studies',
  tracks: [
    {
      src: `//${cdnHost}/audio/study-tilt-refrain.mp3`,
      subTitle: 'Composed for David Bohn',
      title: 'Study for Organ - "Tilt, Refrain"',
    },
    {
      src: `//${cdnHost}/audio/study-harp.mp3`,
      subTitle: 'Katie Andrews, Harp',
      title: 'Study for Harp – "Reflections"',
    },
    {
      src: `//${cdnHost}/audio/study-two-minute-waltz.mp3`,
      title: 'Study for Music Box – "Two-Minute Waltz"',
    },
  ],
}
