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
  thinkersLullabyBlog,
  twoMinuteWaltzBlog,
  watchOutForTheMoonlightBlog,
  winterCarouselBlog,
} from '@data'
import type { TBlogItem } from '@types'

// Newer blog entries on top.
const blogRoll: TBlogItem[] = [
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
