import { ReactNode } from 'react'
import { TPersonnel } from './personnel'

export interface TVideo {
  id: string
  alt: string
  description?: string | ReactNode
  personnel?: TPersonnel[]
  hideControls?: boolean
  subTitle?: string
  thumbnailSrc?: string
  title: string
  videoUrl: string
}
