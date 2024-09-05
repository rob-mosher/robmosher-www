'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { TBlogPreview, TTheme } from '@types'
import { Heading } from './Heading'
import { Section } from './Section'

export const BlogPreview = ({
  blogPreview,
  theme,
}: {
  blogPreview: TBlogPreview
  theme?: TTheme
}) => {
  const router = useRouter()
  const blogPath = `/new/${blogPreview.slug}`

  const handleClick = () => router.push(blogPath)

  return (
    <Section
      className='flex flex-row gap-9 py-9'
      theme={theme}
    >
      <div className='flex-[40%]'>
        <Image
          alt={blogPreview.imageAlt}
          className='w-full cursor-pointer hover:opacity-75'
          src={blogPreview.imageSrc}
          width={450}
          height={800}
          onClick={handleClick}
        />
      </div>
      <div className='flex flex-[60%] flex-col'>
        <Heading>
          <Link href={blogPath} className='hover:underline hover:opacity-75'>
            {blogPreview.title}
          </Link>
        </Heading>
        <p className='opacity-70'>
          {blogPreview.date}
        </p>
        <p className='mt-4 text-lg'>
          {blogPreview.body}
        </p>
        <Link
          className='mt-9 tracking-wide underline hover:opacity-75'
          href={blogPath}
        >
          Read more
        </Link>
      </div>
    </Section>
  )
}
