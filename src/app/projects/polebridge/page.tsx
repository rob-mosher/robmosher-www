import { Gallery, Section, Video } from '@components'
import { aroundTheBend } from '@data'
import { galleryImages } from './data'

const Polebridge = () => (
  <>
    <Section>
      <Video video={aroundTheBend} />
    </Section>
    <Section theme='bright'>
      <Gallery images={galleryImages} />
    </Section>
  </>
)

export default Polebridge
