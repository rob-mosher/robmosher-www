import { BlogRollItem } from '@components'
import {
  battlesEnd,
  mrHauntingtrope,
  pancakeDaydreams,
  watchOutForTheMoonlight,
  winterCarousel,
} from '@data'
import type { TVideo } from '@types'

// Newer blog entries on top.
const blogRoll: TVideo[] = [
  winterCarousel,
  mrHauntingtrope,
  watchOutForTheMoonlight,
  battlesEnd,
  pancakeDaydreams,
]

const New = () => {
  const blogRollJSX = blogRoll.map((blog, index) => (
    <BlogRollItem
      key={blog.id}
      blog={blog}
      // Alternate between themes (aka zebra striping)
      theme={index % 2 === 0 ? 'bright' : undefined}
    />
  ))

  return (
    // Semantic `section`s are handled within each blog preview
    <div>
      {blogRollJSX}
    </div>
  )
}

export default New
