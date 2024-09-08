import { ReactNode } from 'react'
import type { TPersonnel } from './personnel'

export interface TVideo {
  description?: string | ReactNode
  hideControls?: boolean
  imageSrc: string
  personnel?: TPersonnel[]
  subTitle?: string
  title: string
  videoUrl: string
}
