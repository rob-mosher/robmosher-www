'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Calendar } from '@assets'
import type { TVideo, TTheme } from '@types'
import { Heading } from './Heading'
import { Section } from './Section'

export const BlogRollItem = ({
  blog,
  theme,
}: {
  blog: TVideo
  theme?: TTheme
}) => {
  const router = useRouter()
  const blogPath = blog.slug ? `/new/${blog.slug}` : '#'

  const handleClick = () => router.push(blogPath)

  const date = blog.date
    ? (
      <div className='flex items-center justify-start gap-2 opacity-40'>
        <Calendar />
        {blog.date}
      </div>
    ) : null

  return (
    <Section
      className='flex flex-col gap-9 py-9 md:flex-row-reverse'
      theme={theme}
    >
      <div className='flex-[50%]'>
        <Image
          alt={`View page for ${blog.title}`}
          className='w-full cursor-pointer hover:opacity-75'
          src={blog.imageSrc}
          width={450}
          height={800}
          onClick={handleClick}
        />
      </div>
      <div className='flex flex-[50%] flex-col'>
        <Heading>
          <Link href={blogPath} className='hover:underline hover:opacity-75'>
            {blog.title}
          </Link>
        </Heading>
        {date}
        <p className='mt-4 text-lg'>
          {blog.subTitle && `${blog.subTitle}.`}
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
