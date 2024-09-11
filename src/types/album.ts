import { ReactNode } from 'react'

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
  title: string
  tracks?: TAlbumTrack[]
  vendors?: TVendor[]
}
