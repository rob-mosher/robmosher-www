import Link from 'next/link'
import { socialMediaItems } from './data'

export const SocialMedia = () => {
  const socialMediaJSX = socialMediaItems.map((item) => (
    <Link href={item.href} aria-label={item.ariaLabel} key={item.id} className='p-1 hover:opacity-75'>
      {item.logo}
    </Link>
  ))

  return (
    <section>
      <div className='flex justify-center gap-5'>
        {socialMediaJSX}
      </div>
    </section>
  )
}
