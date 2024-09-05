import { BlogPreview } from '@components'
import { blogPreviews } from './data'

const New = () => {
  const blogPreviewJSX = blogPreviews.map((blogPreview, index) => (
    <BlogPreview
      key={blogPreview.key}
      blogPreview={blogPreview}
      // Alternate between themes (aka zebra striping)
      theme={index % 2 === 0 ? 'bright' : undefined}
    />
  ))

  return (
    // Semantic `section`s are handled within each blog preview
    <div>
      {blogPreviewJSX}
    </div>
  )
}

export default New
