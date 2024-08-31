import type { ReactNode as TReactNode } from 'react'

export const Button = ({
  children,
}: {
  children: TReactNode
}) => (
  <button
    className='rounded bg-stone-300 px-4 py-2'
    type='button'
  >
    {children}
  </button>
)
