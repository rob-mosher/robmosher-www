import { ReactNode } from 'react'
import { TPersonnel } from './personnel'

export interface TVideo {
  id: string
  date?: string
  description?: string | ReactNode
  hideControls?: boolean
  imageSrc: string
  personnel?: TPersonnel[]
  slug?: string
  subTitle?: string
  title: string
  videoUrl: string
}
