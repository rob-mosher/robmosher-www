import { HomeIcon } from '@assets'
import type { TNav } from '@types'

export const navItems: TNav[] = [
  {
    href: '/',
    // `md` breakpoint is for desktop navtigation. Everything smaller is for mobile navigation.
    title: <HomeIcon className='relative top-0.5 inline-block size-6 align-baseline md:size-5' />,
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
