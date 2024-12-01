import type { Metadata } from 'next'
import { Heading, Project, Section } from '@components'
import { getPageTitle } from '@lib'
import { projects } from './data'

export const metadata: Metadata = {
  title: getPageTitle('Projects'),
  description: 'Projects consisting of chamber music, chip tunes, carousel, music box, and more.',
}

const Projects = () => {
  const projectsJSX = projects.map((project) => (
    <Project
      key={project.href}
      linkClassName='hover:opacity-75 transition-opacity duration-200'
      href={project.href}
      src={project.src}
      title={project.title}
    />
  ))

  return (
    <>
      <Section outerClassName='bg-white' className='py-12'>
        <div className='flex flex-col md:flex-row'>
          <Heading className='flex-[30%]' as='h1'>Projects</Heading>
          <p className='mt-4 flex-[70%] leading-[1.85] text-gray-700 md:mt-0'>
            These projects represent the
            {' '}
            <span className='font-medium'>
              care
            </span>
            ,
            {' '}
            <span className='font-medium'>
              craft
            </span>
            , and
            {' '}
            <span className='font-medium'>
              curiosity
            </span>
            {' '}
            I bring to the things I love doing. I believe that inspiration, coupled with dedication and freedom from ego, lead to an endless, inevitable reshuffling, shaped by the beauty of limitation. The exploration of Science and Art is a privilege and duty that we collectively explore and share together.
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

export default Projects
