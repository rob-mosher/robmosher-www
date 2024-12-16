import { ReactNode } from 'react'

export interface TPodcast {
  description?: string | ReactNode
  imageSrc?: string
  podcastUrl: string
  subTitle?: string
  summary?: string
  title: string
}
