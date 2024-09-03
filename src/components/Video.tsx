// NOTE - ReactPlayer requires client-side rendering, and Next's Image therefore requires the DOM
// to loaded before rendering the potential thumbnail.
// TODO account for 'loading'/hydration time

'use client'

import Image from 'next/image'
import type { ReactNode as TReactNode } from 'react'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import type { ReactPlayerProps as TReactPlayerProps } from 'react-player'
import { mergeClassName } from '@lib'
import type { TVideo } from '@types'
import { Heading } from './Heading'
import { Loader } from './Loader'
import { Personnel } from './Personnel'

export const Video = ({
  children,
  swapPositions = false,
  video,
}: {
  children?: TReactNode
  swapPositions?: boolean
  video: TVideo
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const description = video.description
    ? <div className='mt-4'>{video.description}</div>
    : null
  const personnel = video.personnel
    ? <Personnel list={video.personnel} />
    : null
  const subTitle = video.subTitle
    ? <Heading as='h4'>{video.subTitle}</Heading>
    : null

  const reactPlayerProps: TReactPlayerProps = {
    url: video.videoUrl,
    className: 'size-full',
    controls: !video.hideControls, // Show controls by default
    height: 'fit-content',
    width: 'fit-content',
    light: video.thumbnailSrc
      ? (
        <Image
          alt={video.alt ?? 'Video Thumbnail'}
          src={video.thumbnailSrc}
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
      <div className='flex size-full flex-[65%]'>
        <div className='flex size-full items-center justify-center'>
          {isMounted ? (
            <ReactPlayer {...reactPlayerProps} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <div className='flex-[35%]'>
        <Heading as='h2'>
          {video.title}
        </Heading>
        {subTitle}
        {personnel}
        {description}
        {children}
      </div>
    </div>
  )
}
