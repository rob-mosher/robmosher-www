import type { ReactNode as TReactNode } from 'react'

export const CurlyQuotes = ({
  children,
  useSingle = false,
}:
{
  children: TReactNode
  useSingle?: boolean
}) => {
  const leftSingleQuote = '\u2018'
  const leftDoubleQuote = '\u201C'

  const rightSingleQuote = '\u2019'
  const rightDoubleQuote = '\u201D'

  return useSingle
    ? `${leftSingleQuote}${children}${rightSingleQuote}`
    : `${leftDoubleQuote}${children}${rightDoubleQuote}`
}
