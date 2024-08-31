import type { ReactNode as TReactNode } from 'react'
import { mergeClassName } from '@lib'

export const Button = ({
  className = '',
  children,
}: {
  className?: string
  children: TReactNode
}) => (
  <button
    className={mergeClassName(
      'rounded bg-stone-300 px-4 py-2',
      className,
    )}
    type='button'
  >
    {children}
  </button>
)
