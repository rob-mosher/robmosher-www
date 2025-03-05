import type { Metadata } from 'next'
import { Section, Article } from '@components'
import { ghostPatterns, ghostPatternsBlog } from '@data'
import { getPageTitle } from '@lib'

export const metadata: Metadata = {
  title: getPageTitle('Ghost Patterns: Lost Socks and Rebuilding Trust'),
  description: 'A deep dive into the hidden structures that shape our relationships, creativity, and technology. Co-authored with a brilliant AI collaborator, we explore how absence leaves an imprint—whether in a missing sock, a fractured friendship, or faulting IT hardware.',
}

const GhostPatterns = () => (
  <Section>
    <Article
      date={ghostPatternsBlog.date}
      article={ghostPatterns}
    />
  </Section>
)

export default GhostPatterns
