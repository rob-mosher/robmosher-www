import type { Metadata } from 'next'
import { BlogItem } from '@components'
import {
  battlesEndBlog,
  battleBoyBlog,
  bigTopBlog,
  cavernsBlog,
  cookieJarParadeBlog,
  ghostPatternsBlog,
  industryTacticsEpisode188Blog,
  mrHauntingtropeBlog,
  pancakeDaydreamsBlog,
  robotMeditations1Blog,
  robotMeditations2Blog,
  robotMeditations3Blog,
  thinkersLullabyBlog,
  twoMinuteWaltzBlog,
  watchOutForTheMoonlightBlog,
  winterCarouselBlog,
} from '@data'
import { getPageTitle } from '@lib'
import type { TBlogItem } from '@types'

export const metadata: Metadata = {
  title: getPageTitle('New'),
  description: 'Recently released videos, projects, appearances, and more',
}

// Newer blog entries on top.
const blogRoll: TBlogItem[] = [
  ghostPatternsBlog,
  industryTacticsEpisode188Blog,
  robotMeditations3Blog,
  battleBoyBlog,
  cookieJarParadeBlog,
  cavernsBlog,
  twoMinuteWaltzBlog,
  thinkersLullabyBlog,
  robotMeditations2Blog,
  bigTopBlog,
  robotMeditations1Blog,
  winterCarouselBlog,
  mrHauntingtropeBlog,
  watchOutForTheMoonlightBlog,
  battlesEndBlog,
  pancakeDaydreamsBlog,
]

const New = () => {
  const blogRollJSX = blogRoll.map((blog, index) => (
    <BlogItem
      key={blog.slug}
      blog={blog}
      theme={index % 2 === 0 ? 'bright' : undefined}
    />
  ))

  return (
    <div>
      {blogRollJSX}
    </div>
  )
}

export default New
