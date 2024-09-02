import type { ReactNode as TReactNode } from 'react'
import { mergeClassName } from '@lib'

export const Section = ({
  children,
  className = '',
  outerClassName = '',
}: {
  children: TReactNode
  className?: string
  outerClassName?: string
}) => (
  <div className={mergeClassName(
    'flex w-full justify-center bg-white',
    outerClassName,
  )}
  >
    <section className={mergeClassName(
      'flex flex-col w-full max-w-7xl px-6 py-12 text-black md:px-12',
      className,
    )}
    >
      {children}
    </section>

  </div>
)
