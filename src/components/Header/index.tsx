'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mergeClassName } from '@lib'
import { navItems } from './data'
import { Heading } from '../Heading'
import { Section } from '../Section'

const matchesBasePath = (path: string, pathName: string): boolean => {
  // Exact match or sub-path match (e.g., `/new/foo-bar` matches `/new`)
  return path === pathName || pathName.startsWith(`${path}/`)
}

export const Header = () => {
  const pathName = usePathname()

  const isActive = (path: string) => matchesBasePath(path, pathName)

  return (
    <Section as='header' outerClassName='bg-white border border-b-gray-120' className='py-3 md:py-4'>
      <Disclosure>
        {({ open }) => (
          <div>
            {/* NOTE: Must use a div wrapper instead of Fragment (<>) because Headless UI's Disclosure
                passes props like `data-headlessui-state` to its children, and React Fragments can
                only accept `key` and `children` props. */}
            {/* Main Header Section */}
            <div className='flex items-center justify-between'>
              <Heading noShrink as='h1' className='mb-0 text-3xl md:text-4xl'>
                <Link href='/' className='tracking-wider' scroll>
                  Rob Mosher
                </Link>
              </Heading>

              {/* Mobile menu button and Desktop Navigation */}
              <div className='flex items-center justify-end'>
                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                  <DisclosureButton
                    aria-label='Toggle navigation'
                    className='p-2 text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300'
                  >
                    {open ? (
                      <XMarkIcon className='size-7' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='size-7' aria-hidden='true' />
                    )}
                  </DisclosureButton>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden gap-6 font-title text-xl uppercase md:flex'>
                  {navItems.map((navItem) => (
                    <Link
                      key={navItem.href}
                      href={navItem.href}
                      className={mergeClassName(
                        'py-1 text-gray-500',
                        // For visual consistency, always include a transparent bottom border.
                        // (required after adding 'home' icon)
                        'border-b-2 border-transparent',
                        isActive(navItem.href)
                          // Overwrite the active element's border from transparent to visible.
                          ? 'border-black text-black'
                          : 'hover:text-black',
                      )}
                    >
                      {navItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Navigation Panel (below the header) */}
            <DisclosurePanel className='mt-2 w-full md:hidden'>
              <div className='space-y-2'>
                {navItems.map((navItem) => (
                  <DisclosureButton
                    key={navItem.href}
                    as={Link}
                    href={navItem.href}
                    className={mergeClassName(
                      'block w-full text-center rounded px-3 py-5 text-2xl tracking-wide font-title uppercase',
                      isActive(navItem.href)
                        ? 'bg-bright text-white'
                        : 'text-gray-700 hover:bg-gray-300 hover:text-black',
                    )}
                  >
                    {navItem.title}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </div>
        )}
      </Disclosure>
    </Section>
  )
}
