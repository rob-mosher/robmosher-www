import { ReactNode } from 'react'
import type { TPersonnel } from './personnel'

export interface TIframe {
  description?: string | ReactNode
  imageSrc?: string
  iframeSrc: string
  personnel?: TPersonnel[]
  subTitle?: string
  summary?: string
  title: string
}
