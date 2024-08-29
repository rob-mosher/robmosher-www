import {
  Button, Heading, PersonnelList, Section, Video,
} from '@components'
import { polebridgePersonnel } from '@data'

const Polebridge = () => (
  <Section>
    <Video videoUrl='TODO-url-here'>
      <Heading as='h2'>
        Polebridge
      </Heading>
      <Heading as='h3'>
        &quot;Around the Bend&quot;
      </Heading>
      <PersonnelList list={polebridgePersonnel} />
      <Button>
        View Project
      </Button>
    </Video>
  </Section>
)

export default Polebridge
