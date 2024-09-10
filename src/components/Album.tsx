import Image from 'next/image'
import { ReactNode } from 'react'
import type { TAlbum } from '@types'
import { AudioPlayer } from './AudioPlayer'
import { Heading } from './Heading'

export const Album = ({ album, children }: {
    album: TAlbum, children?: ReactNode }) => (
      <div className='flex flex-col gap-9 md:flex-row-reverse'>
        <div className='flex-[50%] md:flex'>
          <div className='relative h-0 w-full bg-red-200 pb-[100%]'>
            <Image
              alt={`${album.title} Album Cover`}
              className='object-cover'
              fill
              src={album.image.src}
            />
          </div>
        </div>
        <div className='flex flex-[50%] flex-col gap-4'>
          <Heading>
            {album.title}
          </Heading>
          {album.description}
          {children}
          <div className='space-y-4'>
            {album.tracks && (
              <AudioPlayer tracks={album.tracks} />
            )}
          </div>
        </div>
      </div>
)
