// NOTE - ReactPlayer requires client-side rendering, and Next's Image therefore requires the DOM
// to loaded before rendering the potential thumbnail.
// TODO account for 'loading'/hydration time

'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import type { ReactNode as TReactNode } from 'react'
import ReactPlayer from 'react-player'
import type { TVideoItem } from '@types'

export const Video = ({
  children,
  video,
}: {
  children: TReactNode
  video: TVideoItem
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className='flex w-full flex-col gap-6 md:flex-row md:gap-9'>
      <div className='flex size-full flex-[50%] bg-gray-700'>
        {isMounted && (
          <ReactPlayer
            controls={video.showControls !== false} // Show by default (even if undefined)
            light={video.thumbnail
              ? (
                <Image
                  alt={video.alt ?? 'Video Thumbnail'}
                  src={video.thumbnail}
                  width={800}
                  height={450}
                />
              ) : false}
            url={video.url}
          />
        )}
      </div>
      <div className='flex-[50%]'>
        {children}
      </div>
    </div>
  )
}
