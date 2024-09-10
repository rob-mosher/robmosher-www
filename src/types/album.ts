import { ReactNode } from 'react'

interface TImage {
  height?: number
  src: string
  width?: number
}

interface TVendor {
  name: string
  url: string
}
export interface TAlbumTrack {
  title: string
  src: string
}

export interface TAlbum {
  description?: string | ReactNode
  image: TImage
  title: string
  tracks?: TAlbumTrack[]
  vendors?: TVendor[]
}
