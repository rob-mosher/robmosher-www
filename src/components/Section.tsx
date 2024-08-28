import { ReactNode } from 'react'
import { mergeClassName } from '@lib'

export const Section = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) => (
  <div className={mergeClassName(
    'flex w-full justify-center bg-white',
    className,
  )}
  >
    <div className='flex w-full max-w-7xl px-4 py-12 text-black sm:px-12'>
      {children}
    </div>

  </div>
)
