import { BlogPreview } from '@components'
import {
  battlesEnd,
  mrHauntingtrope,
  pancakeDaydreams,
  watchOutForTheMoonlight,
  winterCarousel,
} from '@data'
import type { TVideo } from '@types'

// Newer blog entries on top.
const blogPreviews: TVideo[] = [
  winterCarousel,
  mrHauntingtrope,
  watchOutForTheMoonlight,
  battlesEnd,
  pancakeDaydreams,
]

const New = () => {
  const blogPreviewsJSX = blogPreviews.map((blogPreview, index) => (
    <BlogPreview
      key={blogPreview.id}
      blogPreview={blogPreview}
      // Alternate between themes (aka zebra striping)
      theme={index % 2 === 0 ? 'bright' : undefined}
    />
  ))

  return (
    // Semantic `section`s are handled within each blog preview
    <div>
      {blogPreviewsJSX}
    </div>
  )
}

export default New
