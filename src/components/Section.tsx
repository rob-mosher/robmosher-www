import type { ElementType as TElementType, ReactNode as TReactNode } from 'react'
import { createElement } from 'react'
import { mergeClassName } from '@lib'

export const Section = ({
  as = 'section',
  children,
  className = '',
  outerClassName = '',
}: {
  as?: TElementType
  children: TReactNode
  className?: string
  outerClassName?: string
}) => {
  const elementTag = as

  return (

    <div className={mergeClassName(
      'flex w-full justify-center',
      outerClassName,
    )}
    >
      {createElement(
        elementTag,
        {
          className: mergeClassName(
            'flex flex-col w-full max-w-layout px-6 py-24 md:px-12',
            className,
          ),
        },
        children,
      )}

    </div>
  )
}
