import type { Metadata } from 'next'
import { BlogItem } from '@components'
import {
  battlesEndBlog,
  battleBoyBlog,
  bigTopBlog,
  cavernsBlog,
  cookieJarParadeBlog,
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
  title: getPageTitle('New Releases'),
  description: 'Recently released videos and projects',
}

// Newer blog entries on top.
const blogRoll: TBlogItem[] = [
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
      // Alternate between themes (aka zebra striping)
      theme={index % 2 === 0 ? 'bright' : undefined}
    />
  ))

  // Semantic `section`s are handled within each blog preview.
  return (
    <div>
      {blogRollJSX}
    </div>
  )
}

export default New
