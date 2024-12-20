import type { TPodcast } from './podcast'
import type { TVideo } from './video'

interface TBaseBlogItem {
  date?: string
  slug?: string
}

interface TMediaContent {
  media: TVideo | TPodcast
  type: 'video' | 'podcast'
}

export type TBlogItem = TBaseBlogItem & TMediaContent
