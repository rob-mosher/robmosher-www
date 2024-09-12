import { socialMediaItems } from './data'

export const SocialMedia = () => {
  const socialMediaJSX = socialMediaItems.map((item) => (
    <a href={item.href} aria-label={item.ariaLabel} key={item.href} className='p-1 hover:opacity-75'>
      {item.logo}
    </a>
  ))

  return (
    <section>
      <div className='flex justify-center gap-5'>
        {socialMediaJSX}
      </div>
    </section>
  )
}
