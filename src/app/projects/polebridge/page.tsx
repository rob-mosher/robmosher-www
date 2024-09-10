import {
  Album, Gallery, Section, Video,
} from '@components'
import { aroundTheBend } from '@data'
import { polebridge, galleryImages } from './data'

const Polebridge = () => (
  <>
    <Section>
      <Album album={polebridge} />
    </Section>
    <Section theme='bright'>
      <Video video={aroundTheBend} />
    </Section>
    <Section>
      <Gallery images={galleryImages} />
    </Section>
  </>
)

export default Polebridge
