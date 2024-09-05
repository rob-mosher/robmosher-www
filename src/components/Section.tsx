import type { ElementType as TElementType, ReactNode as TReactNode } from 'react'
import { createElement } from 'react'
import { mergeClassName } from '@lib'
import type { TTheme } from '@types'

const getThemeClassName = (theme: TTheme) => {
  switch (theme) {
    case 'bright':
      return 'bg-bright text-white'

    default:
      return 'bg-white text-black'
  }
}

export const Section = ({
  as = 'section',
  children,
  className = '',
  theme = 'lightest',
  outerClassName = '',
}: {
  as?: TElementType
  children: TReactNode
  className?: string
  theme?: TTheme
  outerClassName?: string
}) => {
  const elementTag = as

  return (

    <div className={mergeClassName(
      'flex w-full justify-center',
      getThemeClassName(theme),
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
