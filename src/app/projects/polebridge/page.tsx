import {
  Button, CurlyQuotes, Heading, PersonnelList, Section, Video,
} from '@components'
import { polebridgePersonnel, videos } from './data'

const Polebridge = () => (
  <Section>
    <Video video={videos.aroundTheBend}>
      <Heading as='h2'>
        Polebridge
      </Heading>
      <Heading as='h3'>
        <CurlyQuotes>Around the Bend</CurlyQuotes>
      </Heading>
      <PersonnelList list={polebridgePersonnel} />
      <Button>
        View Project
      </Button>
    </Video>
  </Section>
)

export default Polebridge
