import type { Metadata } from 'next'
import { Button, Section } from '@components'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('443-ELE-VATR'),
  description: 'Telephone number album 443-ELE-VATR',
}

const FourFourThreeElevatr = () => (
  <Section outerClassName='relative'>
    <div className='absolute inset-0 bg-fourFourThreeElevatr bg-cover bg-center bg-no-repeat' />
    <div className='z-50 flex flex-col items-center justify-center py-12 text-3xl text-white'>
      <p className='text-center leading-relaxed'>
        It&rsquo;s a bird.
        <br />
        It&rsquo;s a plane.
        <br />
        …it&rsquo;s a
        {' '}
        <span className='font-semibold'>phone number</span>
        ?
      </p>
      <Button className='mt-9' href='https://443elevatr.com'>
        Visit 443elevatr.com
      </Button>
    </div>
  </Section>
)

export default FourFourThreeElevatr
