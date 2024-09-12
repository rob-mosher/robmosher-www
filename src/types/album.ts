import { ReactNode } from 'react'
import type { TPersonnel } from './personnel'

interface TImage {
  height?: number
  src: string
  width?: number
}

interface TVendor {
  href: string
  icon?: ReactNode
  text: string
}
export interface TAlbumTrack {
  subTitle?: string
  src: string
  title: string
}

export interface TAlbum {
  description?: string | ReactNode
  image: TImage
  personnel?: TPersonnel[]
  title: string
  tracks?: TAlbumTrack[]
  vendors?: TVendor[]
}
