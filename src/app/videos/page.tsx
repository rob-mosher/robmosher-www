import { Section, Video, Button } from '@components'
import {
  aroundTheBend, concertoForOboe, meetTheMusic, rangosTango, whoIsTheCutest,
} from '@data'

const Videos = () => (
  <>
    <Section>
      <Video video={aroundTheBend} />
    </Section>
    <Section outerClassName='bg-indigo-800 text-white'>
      <Video video={concertoForOboe} />
    </Section>
    <Section>
      <Video video={whoIsTheCutest} />
    </Section>
    <Section>
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
