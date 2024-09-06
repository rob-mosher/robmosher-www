import Image from 'next/image'
import type { TGalleryImage } from '@types'

export const Gallery = ({ images }: {images: TGalleryImage[]}) => {
  const galleryJSX = images.map((image) => (
    <div key={image.src} className='flex w-full'>
      <Image
        alt={image.alt}
        height={image.height}
        src={image.src}
        width={image.width}
        className='h-auto w-full object-cover'
      />
    </div>
  ))

  return (
    <div className='grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-4'>
      {galleryJSX}
    </div>
  )
}
