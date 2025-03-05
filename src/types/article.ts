import { ReactNode } from 'react'

export interface TArticle {
  description?: string | ReactNode
  imageSrc?: string
  subTitle?: string
  summary?: string
  title: string
}
