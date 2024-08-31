import type { ReactNode as TReactNode } from 'react'
import { mergeClassName } from '@lib'

export const Section = ({
  children,
  className = '',
  classNameWrapper = '',
}: {
  children: TReactNode
  className?: string
  classNameWrapper?: string
}) => (
  <div className={mergeClassName(
    'flex w-full justify-center bg-white',
    classNameWrapper,
  )}
  >
    <div className={mergeClassName(
      'flex w-full max-w-7xl px-4 py-12 text-black md:px-12',
      className,
    )}
    >
      {children}
    </div>

  </div>
)
