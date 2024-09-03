'use client'

import { useRouter } from 'next/navigation'
import type { ReactNode as TReactNode } from 'react'
import { mergeClassName } from '@lib'

export const Button = ({
  className = '',
  children,
  href,
}: {
  className?: string
  children: TReactNode
  href?: string
}) => {
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      router.push(href)
      window.scrollTo(0, 0)
    }
  }

  return (
    <button
      className={mergeClassName(
        'rounded bg-bright px-6 py-3 text-white uppercase font-title text-2xl tracking-wider',
        className,
      )}
      type='button'
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
