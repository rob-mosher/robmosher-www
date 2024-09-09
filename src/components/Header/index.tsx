'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mergeClassName } from '@lib'
import { navItems } from './data'
import { Heading } from '../Heading'
import { Section } from '../Section'

export const Header = () => {
  const pathName = usePathname()
  const isActive = (path: string) => path === pathName

  return (
    <Section as='header' outerClassName='bg-white border border-b-gray-120' className='py-4'>
      <Disclosure>
        {({ open }) => (
          <>
            {/* Main Header Section */}
            <div className='flex items-center justify-between'>
              <Heading noShrink as='h1'>
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
                        isActive(navItem.href)
                          ? 'border-b-2 border-black text-black'
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
                      'block w-full text-center rounded px-3 py-6 text-1.5xl tracking-wide font-title uppercase',
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
          </>
        )}
      </Disclosure>
    </Section>
  )
}
