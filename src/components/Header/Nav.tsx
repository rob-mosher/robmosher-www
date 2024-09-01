'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { XMark } from '@assets'
import { mergeClassName } from '@lib'
import { navItems } from './data'

export const Nav = () => {
  const pathName = usePathname()
  const isActive = (path: string) => path === pathName
  const navJSX = navItems.map((navItem) => (
    <Link
      key={navItem.id}
      className={mergeClassName(
        'py-1 text-gray-500',
        isActive(navItem.href) ? 'border-b-2 border-black text-black' : '',
      )}
      href={navItem.href}
    >
      {navItem.title}
    </Link>
  ))

  console.log(pathName)

  return (
    <nav>
      <button
        aria-label='Open Navigation Links'
        className='flex bg-red-200 md:hidden'
        type='button'
      >
        X
      </button>
      <div className='hidden gap-6 font-title text-xl uppercase md:flex'>
        { navJSX }
      </div>
    </nav>
  )
}
