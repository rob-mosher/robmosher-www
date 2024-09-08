import {
  Heading, Quote, Section, Video,
} from '@components'
import { meetTheMusic } from '@data'
import { quotes } from './data'

const quotesJSX = quotes.map((quote) => (
  <Quote key={quote.quotation} quotation={quote.quotation} citation={quote.citation} />
))

const Storyville = () => (
  <>
    <Section theme='bright'>
      <Video video={meetTheMusic} />
    </Section>
    <Section className='flex items-center justify-center gap-16'>
      <Heading as='h2' className='text-6xl'>
        Press
      </Heading>
      {quotesJSX}
    </Section>
  </>
)

export default Storyville
