import type { ReactNode as TReactNode } from 'react'
import {
  leftSingleQuote, leftDoubleQuote, rightSingleQuote, rightDoubleQuote,
} from '@lib'

export const CurlyQuotes = ({
  children,
  useSingle = false,
}:
{
  children: TReactNode
  useSingle?: boolean
}) => (useSingle
  ? `${leftSingleQuote}${children}${rightSingleQuote}`
  : `${leftDoubleQuote}${children}${rightDoubleQuote}`)
