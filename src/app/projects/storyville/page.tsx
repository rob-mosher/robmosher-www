import type { Metadata } from 'next'
import {
  Album, Heading, Quote, Section, Video,
} from '@components'
import { meetTheMusic } from '@data'
import { getPageTitle } from '@lib'
import { quotes, storyville } from './data'

export const metadata: Metadata = {
  title: getPageTitle('Storyville'),
  description: 'Music and videos for Storyville, previously known as Storytime, music for soprano sax, oboe, English horn, alto sax, flute, piccolo, tenor sax, clarinet, baritone sax, bass clarinet, trumpet, French horn, trombone, guitar, bass, and drums',
}

const quotesJSX = quotes.map((quote) => (
  <Quote key={quote.quotation} quotation={quote.quotation} citation={quote.citation} />
))

const Storyville = () => (
  <>
    <Section>
      <Album album={storyville} />
    </Section>
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
