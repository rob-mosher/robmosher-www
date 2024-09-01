// NOTE - ReactPlayer requires client-side rendering, and Next's Image therefore requires the DOM
// to loaded before rendering the potential thumbnail.
// TODO account for 'loading'/hydration time

'use client'

import Image from 'next/image'
import type { ReactNode as TReactNode } from 'react'
import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import type { TVideo } from '@types'
import { CurlyQuotes } from './CurlyQuotes'
import { Heading } from './Heading'
import { Personnel } from './Personnel'

export const Video = ({
  children,
  video,
}: {
  children?: TReactNode
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
    ? <Heading as='h4' className='text-gray-700'>{video.subTitle}</Heading>
    : null

  return (
    <div className='flex w-full flex-col gap-6 md:flex-row md:gap-9'>
      <div className='flex size-full flex-[50%] bg-gray-700'>
        {isMounted && (
          <ReactPlayer
            controls={video.showControls !== false} // Show by default (even if undefined)
            light={video.thumbnailSrc
              ? (
                <Image
                  alt={video.alt ?? 'Video Thumbnail'}
                  src={video.thumbnailSrc}
                  width={800}
                  height={450}
                />
              ) : false}
            url={video.videoUrl}
          />
        )}
      </div>
      <div className='flex-[50%]'>
        <Heading as='h2'>
          <CurlyQuotes>{video.title}</CurlyQuotes>
        </Heading>
        {subTitle}
        {personnel}
        {description}
        {children}
      </div>
    </div>
  )
}
