import { Section, Video, Button } from '@components'
import { rangosTango } from '@data'

const Videos = () => (
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
)

export default Videos
