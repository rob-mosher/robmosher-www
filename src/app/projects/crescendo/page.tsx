import type { Metadata } from 'next'
import Image from 'next/image'
import { Heading, Section } from '@components'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Crescendo'),
  description: 'Poster/score for a 16-minute crescendo',
}

const Crescendo = () => (
  <Section>
    <div className='flex flex-col gap-9 md:flex-row-reverse'>
      <div className='flex flex-col items-center gap-4 md:flex-[50%] lg:flex-[60%]'>
        <div className='relative h-0 w-full pb-[60%]'>
          <Image
            alt='Crescendo Score/Poster saying "Needed: hundreds of musicians"'
            className='object-cover'
            fill
            src='/images/crescendo.png'
          />
        </div>
      </div>

      <div className='flex flex-col gap-4 md:flex-[50%] lg:flex-[40%]'>
        <Heading>The Crescendo</Heading>
        <Heading as='h4'>Concept</Heading>
        <p>
          Adjacent poster/score serves as double purpose: to intrigue the passerby and provide instructions on how to participate/perform the piece.
        </p>
        <p>
          Originally performed in the foyer of University of Toronto&rsquo;s main music building in Spring 2002. Approximately 250 people participated, ranging from High School students to seasoned professionals and non-Musicians.
        </p>
      </div>
    </div>
  </Section>
)

export default Crescendo
