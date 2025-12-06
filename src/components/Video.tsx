// NOTE - ReactPlayer requires client-side rendering, and Next's Image therefore requires the DOM
// to loaded before rendering the potential thumbnail.
// TODO video stretching to height of right column in md: size (introduced as part of height fix)

'use client'

import { CalendarIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import type { ReactNode as TReactNode } from 'react'
import ReactPlayer from 'react-player'
import type { ReactPlayerProps as TReactPlayerProps } from 'react-player'
import { mergeClassName } from '@lib'
import type { TBlogItem, TVideo } from '@types'
import { Heading } from './Heading'
import { Loader } from './Loader'
import { Personnel } from './Personnel'

const DynamicReactPlayer = dynamic(() => Promise.resolve(ReactPlayer), {
  ssr: false,
  loading: () => <Loader />,
})

export const Video = ({
  children,
  date,
  swapPositions = false,
  video,
}: {
  children?: TReactNode
  date?: TBlogItem['date']
  swapPositions?: boolean
  video: TVideo
}) => {
  const dateJSX = date
    ? (
      <div className='mt-4 flex items-center justify-start gap-2 opacity-40'>
        <CalendarIcon width={24} height={24} />
        {date}
      </div>
    ) : null
  const descriptionJSX = video.description
    ? <div className='mt-4'>{video.description}</div>
    : null
  const personnelJSX = video.personnel
    ? <Personnel list={video.personnel} />
    : null
  const subTitleJSX = video.subTitle
    ? <Heading as='h4'>{video.subTitle}</Heading>
    : null

  const reactPlayerProps: TReactPlayerProps = {
    url: video.videoUrl,
    className: 'size-full',
    controls: !video.hideControls, // Show controls by default
    height: 'fit-content',
    width: 'fit-content',
    light: video.imageSrc
      ? (
        <Image
          alt={`Play video of ${video.title}`}
          src={video.imageSrc}
          width={1600}
          height={900}
        />
      ) : false,
  }

  return (
    <div className={mergeClassName(
      'flex w-full flex-col gap-6 md:flex-row md:gap-9',
      swapPositions ? 'md:flex-row-reverse' : 'md:flex-row',
    )}
    >
      <div className='flex size-full md:flex-[65%]'>
        <div className='relative w-full' style={{ paddingBottom: `${(9 / 16) * 100}%` }}>
          <DynamicReactPlayer
            {...reactPlayerProps}
            className='absolute left-0 top-0'
            width='100%'
            height='100%'
          />
        </div>
      </div>
      <div className='md:flex-[35%]'>
        <Heading as='h2'>
          {video.title}
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
