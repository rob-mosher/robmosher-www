import type { Metadata } from 'next'
import { Button, Section, Video } from '@components'
import { whoIsTheCutest } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Who is the Cutest?'),
  description: 'Video for whoisthecutest.com project',
}

const WhoIsTheCutest = () => (
  <Section>
    <Video video={whoIsTheCutest}>
      <Button className='mt-4' href='https://whoisthecutest.com/'>
        whoisthecutest.com
      </Button>
    </Video>
  </Section>
)

export default WhoIsTheCutest
