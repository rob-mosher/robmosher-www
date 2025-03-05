import { CalendarIcon } from '@heroicons/react/24/outline'
import type { ReactNode as TReactNode } from 'react'
import type { TBlogItem, TArticle } from '@types'
import { Heading } from './Heading'

export const Article = ({
  children,
  date,
  article,
}: {
  children?: TReactNode
  date?: TBlogItem['date']
  article: TArticle
}) => {
  const dateJSX = date
    ? (
      <div className='mt-4 flex items-center justify-start gap-2 opacity-40'>
        <CalendarIcon width={24} height={24} />
        {date}
      </div>
    ) : null
  const descriptionJSX = article.description
    ? <div className='mt-4'>{article.description}</div>
    : null
  const subTitleJSX = article.subTitle
    ? <Heading as='h4'>{article.subTitle}</Heading>
    : null

  return (
    <div className='flex size-full flex-col items-center'>
      <div className='flex size-full flex-col text-base/7 md:size-3/4 lg:size-3/5'>
        <Heading as='h2'>
          {article.title}
        </Heading>
        {subTitleJSX}
        {descriptionJSX}
        {children}
        {dateJSX}
      </div>
    </div>
  )
}
