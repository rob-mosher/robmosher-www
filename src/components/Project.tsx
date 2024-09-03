import Image from 'next/image'
import Link from 'next/link'
import { mergeClassName } from '@lib'
import type { TProject } from '@types'
import { Heading } from './Heading'

export const Project = ({
  alt,
  imageClassName,
  linkClassName,
  src,
  title,
  href,
}: Omit<TProject, 'id'>) => (
  <Link
    className={mergeClassName(
      'flex flex-col items-center space-y-4',
      linkClassName,
    )}
    href={href}
    scroll
  >
    <div className='relative w-full pb-[100%]'>
      <Image
        alt={alt}
        src={src}
        fill
        className={mergeClassName(
          'absolute inset-0 object-cover',
          imageClassName,
        )}
      />
    </div>
    <Heading as='h4'>{title}</Heading>
  </Link>
)
