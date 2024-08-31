import {
  Button, CurlyQuotes, Heading, PersonnelList, Section, Video,
} from '@components'
import { polebridgePersonnel } from './data'

const Polebridge = () => (
  <Section>
    <Video videoUrl='TODO-url-here'>
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
