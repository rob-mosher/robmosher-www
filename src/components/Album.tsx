import Image from 'next/image'
import { ReactNode } from 'react'
import { mergeClassName } from '@lib'
import type { TAlbum } from '@types'
import { AudioPlayer } from './AudioPlayer'
import { Button } from './Button'
import { Heading } from './Heading'
import { Personnel } from './Personnel'

export const Album = ({
  addAlbumBorder = false,
  album,
  children,
  hideTitle = false,
}: {
    addAlbumBorder?: boolean
    album: TAlbum
    children?: ReactNode
    hideTitle?: boolean
  }) => {
  const renderVendors = () => {
    if (!album.vendors || album.vendors.length === 0) return null

    return album.vendors.map((vendor) => (
      <Button key={vendor.href} className='shrink-0' href={vendor.href}>
        <span className='flex gap-3'>
          {vendor.icon && (
          <>
            {vendor.icon}
            {' '}
          </>
          )}
          {vendor.text}
        </span>
      </Button>
    ))
  }

  const personnelJSX = album.personnel
    ? <Personnel list={album.personnel} />
    : null

  return (
    <div className='flex flex-col gap-9 md:flex-row-reverse'>
      <div className='flex flex-col items-center gap-4 md:flex-[50%] lg:flex-[40%]'>
        <div className={mergeClassName(
          'relative h-0 w-full pb-[100%]',
          addAlbumBorder && 'border-2 border-black/10',
        )}
        >
          <Image
            alt={`${album.title} Album Cover`}
            className='object-cover'
            fill
            src={album.image.src}
          />
        </div>
        <div>{renderVendors()}</div>
      </div>

      <div className='flex flex-col gap-4 md:flex-[50%] lg:flex-[60%]'>
        {!hideTitle && (
          <Heading>{album.title}</Heading>
        )}
        {album.description}
        {personnelJSX}
        {children}
        {album.tracks && (
          <div className='space-y-4'>
            <AudioPlayer tracks={album.tracks} />
          </div>
        )}
      </div>
    </div>
  )
}
