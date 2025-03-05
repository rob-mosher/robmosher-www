import type { TArticle } from './article'
import type { TPodcast } from './podcast'
import type { TVideo } from './video'

interface TBaseBlogItem {
  date?: string
  slug?: string
}

interface TMediaContent {
  media: TVideo | TPodcast | TArticle
  type: 'video' | 'podcast' | 'article'
}

export type TBlogItem = TBaseBlogItem & TMediaContent
