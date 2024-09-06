import { Quote, Section, Video } from '@components'
import { meetTheMusic } from '@data'
import { quotes } from './data'

const quotesJSX = quotes.map((quote) => (
  <Quote key={quote.citation} quotation={quote.quotation} citation={quote.citation} />
))

const Storyville = () => (
  <>
    <Section theme='bright'>
      <Video video={meetTheMusic} />
    </Section>
    <Section className='flex items-center justify-center gap-10'>
      {quotesJSX}
    </Section>
  </>
)

export default Storyville
