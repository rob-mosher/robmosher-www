/* eslint-disable max-len */

import { Heading, ProjectItem, Section } from '@components'
import { TProjectItem } from '@types'

const Projects = () => {
  const projects: TProjectItem[] = new Array(7).fill(
    {
      alt: 'Polebridge',
      href: '/projects/polebridge',
      src: '/images/polebridge.png',
      title: 'Polebridge',
    },
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const projectsJSX: any = projects.map((project, index) => (
    <ProjectItem
      // eslint-disable-next-line react/no-array-index-key
      key={`project-item-${index}`}
      alt={project.alt}
      href={project.href}
      src={project.src}
      title={project.title}
    />
  ))
  return (
    <>
      <Section>
        <div className='flex flex-col md:flex-row'>
          <Heading className='flex-[40%]'>About</Heading>
          <p className='flex-[60%] leading-relaxed text-gray-700'>
            These projects represent the care, craft, and ridiculousness I love to bring to everything I do. I believe that inspiration, coupled with dedication and freedom from ego, lead to an endless, inevitable reshuffling, shaped by the beauty of limitation. The exploration of Science and Art is a privilege and duty that we collectively explore and share together.
          </p>
        </div>
      </Section>
      <Section className='bg-gray-200'>
        <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {projectsJSX}
        </div>
      </Section>
    </>

  )
}
export default Projects
