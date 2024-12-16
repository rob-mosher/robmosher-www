'use client'

import { CalendarIcon } from '@heroicons/react/24/outline'
import type { ReactNode as TReactNode } from 'react'
import { mergeClassName } from '@lib'
import type { TIframe } from '@types'
import { Heading } from './Heading'
import { Personnel } from './Personnel'

export const IframePlayer = ({
  children,
  date,
  iframe,
  swapPositions = false,
}: {
  children?: TReactNode
  date?: string
  iframe: TIframe
  swapPositions?: boolean
}) => {
  const dateJSX = date
    ? (
      <div className='mt-4 flex items-center justify-start gap-2 opacity-40'>
        <CalendarIcon width={24} height={24} />
        {date}
      </div>
    ) : null

  const descriptionJSX = iframe.description
    ? <div className='mt-4'>{iframe.description}</div>
    : null

  const personnelJSX = iframe.personnel
    ? <Personnel list={iframe.personnel} />
    : null

  const subTitleJSX = iframe.subTitle
    ? <Heading as='h4'>{iframe.subTitle}</Heading>
    : null

  return (
    <div className={mergeClassName(
      'flex w-full flex-col gap-6 md:flex-row md:gap-9',
      swapPositions ? 'md:flex-row-reverse' : 'md:flex-row',
    )}
    >
      <div className='flex size-full md:flex-[65%]'>
        <div className='relative w-full' style={{ paddingBottom: '300px' }}>
          <iframe
            allow='autoplay'
            className='absolute left-0 top-0 size-full'
            frameBorder='no'
            scrolling='no'
            src={iframe.iframeSrc}
            title={iframe.title}
          />
        </div>
      </div>
      <div className='md:flex-[35%]'>
        <Heading as='h2'>
          {iframe.title}
        </Heading>
        {subTitleJSX}
        {personnelJSX}
        {descriptionJSX}
        {children}
        {dateJSX}
      </div>
    </div>
  )
}
