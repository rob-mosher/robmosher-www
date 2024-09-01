import Image from 'next/image'
import Link from 'next/link'
import type { TProject } from '@types'
import { Heading } from './Heading'

export const Project = ({
  alt,
  src,
  title,
  href,
}: Omit<TProject, 'id'>) => (
  <Link
    className='flex flex-col items-center space-y-4'
    href={href}
  >
    <Image
      alt={alt}
      src={src}
      width={500}
      height={500}
    />
    <Heading as='h4'>{title}</Heading>

  </Link>
)
