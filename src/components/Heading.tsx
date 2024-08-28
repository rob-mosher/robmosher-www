import { ReactNode } from 'react'
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
  uppercase = true,
}: {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: ReactNode
  className?: string
  uppercase?: boolean
}) => (
  <div
    className={mergeClassName(
      'mb-3 font-extralight tracking-tight',
      'h-auto', // needed for `scale-y-[...]` below
      className,
      uppercase && 'uppercase',
      headingStyles[as],
    )}
  >
    {/* TODO research if/why `flex` is needed below */}
    <span className='flex scale-y-125'>
      {children}
    </span>
  </div>

)
