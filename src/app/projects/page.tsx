/* eslint-disable max-len */

import { Heading, ProjectItem, Section } from '@components'
import { projects } from './data'

const Projects = () => {
  const projectsJSX = projects.map((project) => (
    <ProjectItem
      key={project.id}
      alt={project.alt}
      href={project.href}
      src={project.src}
      title={project.title}
    />
  ))
  return (
    <>
      <Section outerClassName='bg-white'>
        <div className='flex flex-col md:flex-row'>
          <Heading className='flex-[40%]' as='h1'>About</Heading>
          <p className='flex-[60%] leading-relaxed text-gray-700'>
            These projects represent the care, craft, and ridiculousness I love to bring to everything I do. I believe that inspiration, coupled with dedication and freedom from ego, lead to an endless, inevitable reshuffling, shaped by the beauty of limitation. The exploration of Science and Art is a privilege and duty that we collectively explore and share together.
          </p>
        </div>
      </Section>
      <Section outerClassName='bg-gray-200'>
        <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {projectsJSX}
        </div>
      </Section>
    </>
  )
}
export default Projects
