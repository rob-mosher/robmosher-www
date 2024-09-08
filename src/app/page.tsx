import {
  Button, Heading, Project, Section,
} from '@components'
import { projects } from './data'

const Home = () => {
  const projectsJSX = projects.map((project) => (
    <Project
      key={project.href}
      alt={project.alt}
      linkClassName='hover:opacity-75 transition-opacity duration-200'
      href={project.href}
      src={project.src}
      title={project.title}
    />
  ))

  return (
    <>
      <Section outerClassName='relative bg-[url("/images/robmosher-antonelli-pan-armonica.jpg")] bg-center bg-cover h-[70vh] shadow-inner'>
        <div className='absolute inset-0 z-10 bg-gradient-radial from-black/15 via-black/20 to-black/50' />
        <div className='z-50 flex h-full flex-col items-start justify-end gap-9'>
          <p className='z-50 flex text-2xl text-white'>Composer, Woodwinds, & Technology</p>
          <Button href='/new'>
            New Releases
          </Button>
        </div>
      </Section>
      <Section outerClassName='bg-white' className='py-12'>
        <div className='flex flex-col md:flex-row'>
          <Heading className='flex-[40%]' as='h1'>About</Heading>
          <p className='flex-[60%] leading-[1.85] text-gray-700'>
            These projects represent the care, craft, and ridiculousness I love to bring to everything I do. I believe that inspiration, coupled with dedication and freedom from ego, lead to an endless, inevitable reshuffling, shaped by the beauty of limitation. The exploration of Science and Art is a privilege and duty that we collectively explore and share together.
          </p>
        </div>
      </Section>
      <Section outerClassName='bg-gray-200'>
        <div className='grid w-full grid-cols-1 gap-x-0 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {projectsJSX}
        </div>
      </Section>
    </>
  )
}
export default Home
