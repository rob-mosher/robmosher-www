'use client'

import { CalendarIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { mergeClassName } from '@lib'
import type { TTheme, TBlogItem } from '@types'
import { Heading } from './Heading'
import { Section } from './Section'

export const BlogItem = ({
  blog,
  theme,
}: {
  blog: TBlogItem
  theme?: TTheme
}) => {
  const router = useRouter()
  const blogPath = blog.slug ? `/new/${blog.slug}` : '#'
  const { media } = blog
  const { imageSrc } = media

  const handleClick = () => {
    window.scrollTo(0, 0)
    router.push(blogPath)
  }

  const date = blog.date
    ? (
      <div className='flex items-center justify-start gap-2 opacity-40'>
        <CalendarIcon width={24} height={24} />
        {blog.date}
      </div>
    ) : null

  return (
    <Section
      className={mergeClassName(
        'flex flex-col gap-9 py-9',
        imageSrc && 'md:flex-row-reverse',
      )}
      theme={theme}
    >
      {imageSrc && (
        <div className='flex-[50%]'>
          <Image
            alt={`View page for ${media.title}`}
            className='w-full cursor-pointer hover:opacity-75'
            src={imageSrc}
            width={450}
            height={800}
            onClick={handleClick}
          />
        </div>
      )}
      <div className={mergeClassName(
        'flex flex-col',
        imageSrc && 'flex-[50%]',
      )}
      >
        <Heading>
          <Link
            className='hover:underline hover:opacity-75'
            href={blogPath}
            scroll
          >
            {media.title}
          </Link>
        </Heading>
        {date}
        <p className='mt-4 text-lg'>
          {media.subTitle && `${media.subTitle}.`}
          {media.subTitle && <br />}
          {media.summary && `${media.summary}`}
        </p>
        <Link
          className='mt-9 tracking-wide underline hover:opacity-75'
          href={blogPath}
          scroll
        >
          Read more
        </Link>
      </div>
    </Section>
  )
}
