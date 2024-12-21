import type { Metadata } from 'next'
import {
  Album, Gallery, Heading, Section, Video,
} from '@components'
import { aroundTheBend, rangosTango } from '@data'
import { getPageTitle } from '@lib'
import { polebridge, galleryImages } from './data'

export const metadata: Metadata = {
  title: getPageTitle('Polebridge'),
  description: 'Music and videos for Polebridge album, featuring music for clarinet, piano, trumpet, violin, bass, and fiddle',
}

const Polebridge = () => (
  <>
    <Section outerClassName='relative'>
      <div className='absolute inset-0 bg-polebridge bg-cover bg-center bg-no-repeat opacity-95' />
      <Heading className='z-50 flex justify-center py-12 text-6xl text-white'>
        Polebridge
      </Heading>
    </Section>
    <Section>
      <Album album={polebridge} hideTitle />
    </Section>
    <Section theme='bright'>
      <Video video={aroundTheBend} />
    </Section>
    <Section>
      <Video video={rangosTango} />
    </Section>
    <Section>
      <Gallery images={galleryImages} />
    </Section>
  </>
)

export default Polebridge
