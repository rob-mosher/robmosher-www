import type { Metadata } from 'next'
import { Album, Heading, Section } from '@components'
import { getPageTitle } from '@lib'
import { thirtyOneChorales } from './data'

export const metadata: Metadata = {
  title: getPageTitle('31 Chorales'),
  description: 'Music and videos for 31 Chorales album, featuring music for tube, bass clarinet, trumpet, and soprano saxophone',
}

const ThirtyOneChorales = () => (
  <>
    <Section outerClassName='relative'>
      <div className='absolute inset-0 bg-31-chorales bg-cover bg-center bg-no-repeat opacity-50' />
      <Heading className='z-50 flex justify-center py-12 text-6xl'>
        31 Chorales
      </Heading>
    </Section>
    <Section>
      <Album addAlbumBorder album={thirtyOneChorales} hideTitle />
    </Section>
  </>
)

export default ThirtyOneChorales
