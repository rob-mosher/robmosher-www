import { HomeIcon } from '@assets'
import type { TNav } from '@types'

export const navItems: TNav[] = [
  {
    href: '/',
    title: <HomeIcon className='relative top-0.5 inline-block size-5 align-baseline' />,
  },
  {
    href: '/new',
    title: 'New',
  },
  {
    href: '/projects',
    title: 'Projects',
  },
  {
    href: '/videos',
    title: 'Videos',
  },
  {
    href: '/contact',
    title: 'Contact',
  },
]
