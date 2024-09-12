import type { Metadata } from 'next'
import { Section, Video } from '@components'
import {
  aroundTheBend, concertoForOboe, meetTheMusic, rangosTango, whoIsTheCutest,
} from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Videos'),
  description: 'Videos featuring music and performances with Rob Mosher',
}

const Videos = () => (
  <>
    <Section>
      <Video video={aroundTheBend} />
    </Section>
    <Section theme='bright'>
      <Video video={concertoForOboe} />
    </Section>
    <Section>
      <Video video={whoIsTheCutest} />
    </Section>
    <Section theme='bright'>
      <Video video={rangosTango} />
    </Section>
    <Section>
      <Video video={meetTheMusic} />
    </Section>
  </>
)

export default Videos
