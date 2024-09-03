import Link from 'next/link'
import { Nav } from './Nav'
import { Heading } from '../Heading'
import { Section } from '../Section'

export const Header = () => (
  <Section as='header' outerClassName='bg-white border border-b-gray-120' className='py-4'>
    <div className='flex items-center justify-between'>
      {/* TODO Make text fully centered */}
      <Heading noShrink as='h1'>
        <Link href='/' className='tracking-wider' scroll>
          Rob Mosher
        </Link>
      </Heading>
      <Nav />
    </div>
  </Section>
)
