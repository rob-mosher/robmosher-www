import type { Metadata } from 'next'
import { Button, Section } from '@components'
import { defaultPageTitleHomepage } from '@lib'

export const metadata: Metadata = {
  title: defaultPageTitleHomepage,
}

const Home = () => (
  <Section outerClassName='relative bg-robMosher bg-center bg-cover h-[75vh] shadow-inner'>
    <div className='absolute inset-0 z-10 bg-radialGradient from-black/15 via-black/20 to-black/50' />
    <div className='z-50 flex h-full flex-col items-start justify-end gap-4 md:gap-9'>
      <p className='z-50 flex text-1.5xl text-white md:text-2xl'>Composer, Woodwinds, & Technology</p>
      <div className='flex flex-col gap-4 sm:flex-row'>
        <Button href='/new' className='shadow-2xl'>
          New Releases
        </Button>
        <Button href='/projects' className='shadow-2xl'>
          Projects
        </Button>
      </div>
    </div>
  </Section>
)
export default Home
