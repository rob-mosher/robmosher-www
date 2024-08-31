import { Nav } from './Nav'
import { Heading } from '../Heading'

export const Header = () => (
  <header className='bg-gray-200'>
    <div className='m-4 flex items-center justify-between'>
      <Heading noShrink as='h1'>Rob Mosher</Heading>
      <Nav />
    </div>
  </header>
)
