import { rightSingleQuote } from '@lib'
import type { TBlogPreview } from '@types'

// Newer blog entries on top.
export const blogPreviews: TBlogPreview[] = [
  {
    key: 'blog-preview--battles-end',
    body: 'Processional Music for Space, via the Sega Genesis / Mega Drive.',
    date: 'Jan 16th, 2024',
    imageAlt: `Image of Battle${rightSingleQuote}s End`,
    imageSrc: '/images/video-thumbnails/battles-end.png',
    slug: 'battles-end',
    title: `Battle${rightSingleQuote}s End`,
  },
  {
    key: 'blog-preview--pancake-daydreams',
    body: 'Music for Ondioline Synthesizer.',
    date: 'Dec 30th, 2023',
    imageAlt: 'Image of Pancake Daydreams',
    imageSrc: '/images/video-thumbnails/pancake-daydreams.png',
    slug: 'pancake-daydreams',
    title: 'Pancake Daydreams',
  },
]
