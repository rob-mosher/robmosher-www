import type { Metadata } from 'next'
import {
  Album, Gallery, Section, Video,
} from '@components'
import { aroundTheBend } from '@data'
import { getPageTitle } from '@lib'
import { polebridge, galleryImages } from './data'

export const metadata: Metadata = {
  title: getPageTitle('Polebridge'),
  description: 'Music and videos for Polebridge album, featuring music for clarinet, piano, trumpet, violin, bass, and fiddle',
}

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
