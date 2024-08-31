import type { ReactNode as TReactNode } from 'react'
import { mergeClassName } from '@lib'

const headingStyles = {
  h1: 'text-5xl',
  h2: 'text-4xl',
  h3: 'text-3xl',
  h4: 'text-2xl',
  h5: 'text-xl',
  h6: 'text-lg',
}

export const Heading = ({
  as = 'h2',
  children,
  className = '',
  noShrink = false,
  uppercase = true,
}: {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: TReactNode
  className?: string
  noShrink?: boolean
  uppercase?: boolean
}) => {
  const HeadingTag = as

  return (
    <HeadingTag
      className={mergeClassName(
        'mb-3 font-extralight font-title tracking-tight',
        noShrink && 'shrink-0',
        uppercase && 'uppercase',
        headingStyles[as],
        className,
      )}
    >
      {children}
    </HeadingTag>

  )
}
