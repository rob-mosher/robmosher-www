import type { TPodcast } from './podcast'
import type { TVideo } from './video'

interface TBlogItem {
  date: string
  slug: string
}

export interface TPodcastBlogItem extends TBlogItem {
  podcast: TPodcast
}

export interface TVideoBlogItem extends TBlogItem {
  video: TVideo
}
