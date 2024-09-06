import { leftDoubleQuote, rightDoubleQuote } from '@lib'
import { TQuote } from '@types'

export const Quote = ({
  quotation,
  citation,
}: TQuote) => (
  <section className='flex w-3/4 flex-col items-center'>
    <div className='text-center font-title text-4xl uppercase'>
      {leftDoubleQuote}
      {quotation}
      {rightDoubleQuote}
    </div>
    {citation && (
    <p className='mt-4 text-xl'>
      &mdash;
      {citation}
    </p>
    )}
  </section>
)
