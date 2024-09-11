import type { Metadata } from 'next'
import { Section, Video, Button } from '@components'
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
      <Video video={rangosTango}>
        <Button className='mt-9'>
          View Project
        </Button>
        <Button className='mt-9'>
          Buy Album
        </Button>
      </Video>
    </Section>
    <Section>
      <Video video={meetTheMusic} />
    </Section>
  </>
)

export default Videos
