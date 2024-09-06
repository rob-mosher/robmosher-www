import { BlogRollItem } from '@components'
import {
  battlesEnd,
  battleBoy,
  bigTop,
  caverns,
  cookieJarParade,
  mrHauntingtrope,
  pancakeDaydreams,
  robotMeditations1,
  robotMeditations2,
  thinkersLullaby,
  twoMinuteWaltz,
  watchOutForTheMoonlight,
  winterCarousel,
} from '@data'
import type { TVideo } from '@types'

// Newer blog entries on top.
const blogRoll: TVideo[] = [
  battleBoy,
  cookieJarParade,
  caverns,
  twoMinuteWaltz,
  thinkersLullaby,
  robotMeditations2,
  bigTop,
  robotMeditations1,
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

  // Semantic `section`s are handled within each blog preview.
  return (
    <div>
      {blogRollJSX}
    </div>
  )
}

export default New
