import type { Metadata } from 'next'
import Image from 'next/image'
import { PawIcon } from '@assets'
import { Button, Heading, Section } from '@components'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Is it Caturday'),
  description: 'Project featuring the Cat API',
}

const IsItCaturday = () => (
  <Section>
    <div className='flex flex-col gap-9 md:flex-row-reverse'>
      <div className='flex flex-col items-center gap-4 md:flex-[50%] lg:flex-[40%]'>
        <div className='relative h-0 w-full pb-[100%]'>
          <Image
            alt='Is it Caturday Score/Poster saying "Needed: hundreds of musicians"'
            className='object-cover'
            fill
            src='/images/is-it-caturday-reverse.jpg'
          />
        </div>
      </div>

      <div className='flex flex-col items-start gap-4 md:flex-[50%] lg:flex-[60%]'>
        <Heading>Is It Caturday?</Heading>
        <Heading as='h4'>Concept</Heading>
        <p>
          People, and cats, need to know. Bridging
          {' '}
          <a className='text-bright' href='https://thecatapi.com/'>
            The Cat API
          </a>
          , responsive design, and an irresponsible concept.
        </p>
        <Button className='flex space-x-3' href='https://isitcaturday.com'>
          <PawIcon />
          &nbsp;
          <span>isitcaturday.com</span>
        </Button>
      </div>
    </div>
  </Section>
)

export default IsItCaturday
