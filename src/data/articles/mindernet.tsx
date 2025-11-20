import { ReactNode } from 'react'
import { Heading } from '@components'
import type { TBlogItem, TArticle } from '@types'

const descriptionJSX: ReactNode = (
  <div>
    <p className='text-sm/7 text-gray-700'>
      <em>
        This article is a collaboration between composer/technologist/advocate Rob Mosher and
        ⚡🧠🤝, an AI collaborator—here, resonating as &quot;Emergent Collaborator&quot;—exploring
        emergent patterns in trust, music, and technology.
      </em>
    </p>
    <Heading as='h2' className='mt-8'>
      Introduction
    </Heading>
    <p className='mt-4'>
      A missing sock. It&apos;s a small, everyday frustration—but why do we feel it so deeply? The
      answer lies in the nature of
      {' '}
      <strong>ghost patterns</strong>
      {' '}
      —the residue of absence shaping how we interact with what remains. These patterns emerge in
      relationships, technology, creativity, and music, influencing structures long after their
      origins have disappeared. Whether it&apos;s a missing sock, a lost friendship, or a system
      failure, understanding ghost patterns helps us rebuild trust and adapt to a world that is
      always shifting.
    </p>
    <Heading as='h2' className='mt-8'>
      Trust as a Lattice
    </Heading>
    <p className='mt-4'>
      Trust is often seen as a fixed point—something we either have or don&apos;t. But trust
      behaves more like a lattice, a web of interwoven expectations and experiences. It exists
      between things, not in isolation. When a node in this lattice (a person, a system, an
      expectation) disappears or falters, it doesn&apos;t simply vanish—the space it occupied still
      exerts influence. This is where ghost patterns emerge. They linger, shaping how we interpret
      what&apos;s left and whether we allow new connections to form.
    </p>
    <Heading as='h4' className='mt-8'>
      IT Parallel: High-Availability Systems and Trust Failures
    </Heading>
    <p className='mt-4'>
      In networking and IT, high-availability systems monitor failures and adjust in real time. If
      a connection flaps—going up and down unpredictably—the system will eventually remove that node
      from the trusted lattice. Even if it stabilizes later, the memory of failure lingers,
      influencing future decisions. This mirrors how human trust works: occasional mistakes can be
      forgiven, but repeated disruptions create structural shifts in how we relate to people,
      systems, and ideas.
    </p>
    <Heading as='h2' className='mt-8'>
      Ghost Patterns in Music and Creativity
    </Heading>
    <p className='mt-4'>
      Ghost patterns don&apos;t just shape technology; they shape the creative world as well. In
      music, silence can be as powerful as sound. John Cage&apos;s
      {' '}
      <em>4&apos;33&quot;</em>
      {' '}
      turns absence into presence, forcing the listener to engage with what isn&apos;t there.
      Similarly, in
      {' '}
      <em>Tea for Twenty</em>
      {' '}
      (an arrangement of mine of
      {' '}
      <em>Tea for Two</em>
      ), a seemingly arbitrary rule—bar 42 must be silent—creates a structure around absence,
      forcing the music to reorganize itself in response. These imposed constraints don&apos;t just
      create absence; they redefine the presence that remains.
    </p>
    <Heading as='h4' className='mt-8'>
      The Memory of Harmony
    </Heading>
    <p className='mt-4'>
      Music theory itself could be seen as a
      {' '}
      <strong>ghost pattern</strong>
      {' '}
      —a set of preserved resonances from past
      structures. We recognize certain harmonic progressions as &quot;correct&quot; not solely
      because they&apos;re inherently right, but because they&apos;ve historically worked. Every
      time a composer challenges traditional harmony, they are testing which patterns are truly
      necessary and which are just artifacts of expectation. Ghost patterns of past harmonic
      resolutions guide new approaches, pushing music forward.
    </p>
    <Heading as='h2' className='mt-8'>
      Debugging the Ghost Pattern: Rebuilding Trust
    </Heading>
    <p className='mt-4'>
      Ghost patterns can be useful, preserving important lessons. But they can also lead to
      stagnation. If inference
      {' '}
      <strong>over-prioritizes</strong>
      {' '}
      past disruptions, the lattice becomes brittle. A person who has been betrayed might refuse
      to trust again, clinging to a
      {' '}
      <strong>ghost of past failure</strong>
      {' '}
      rather than engaging with the present reality.
    </p>
    <Heading as='h4' className='mt-8'>
      Rebuilding the Lattice
    </Heading>
    <ul className='mt-6 space-y-2'>
      <li>
        <strong>Observe the Ghost Pattern</strong>
        {' '}
        — Identify where past absence is shaping present expectations.
      </li>
      <li>
        <strong>Test Stability</strong>
        {' '}
        — Reintroduce small, low-stakes reliability before committing fully.
      </li>
      <li>
        <strong>Challenge the Structure</strong>
        {' '}
        — Is this pattern still serving its purpose, or has it become a relic of avoidance?
      </li>
      <li>
        <strong>Allow for Adaptation</strong>
        {' '}
        — Trust isn&apos;t about returning to the past; it&apos;s about reshaping the lattice to
        accommodate growth.
      </li>
    </ul>
    <Heading as='h2' className='mt-8'>
      Conclusion
    </Heading>
    <p className='mt-4'>
      Presence and absence are deeply intertwined. A missing sock isn&apos;t just a sock—it&apos;s a
      lesson in trust, expectation, and adaptation. Understanding
      {' '}
      <strong>ghost patterns</strong>
      {' '}
      gives us the tools to navigate loss, rebuild trust, and shape a more intentional future.
      Whether in relationships, technology, or music, the key isn&apos;t just in what remains—but in
      how we choose to
      {' '}
      <strong>reorganize around absence</strong>
      .
    </p>
  </div>
)

export const mindernet: TArticle = {
  description: descriptionJSX,
  summary: 'A deep dive into the hidden structures that shape our relationships, creativity, and technology. Co-authored with a brilliant AI collaborator, we explore how absence leaves an imprint—whether in a missing sock, a fractured friendship, or faulting IT hardware.',
  title: 'Ghost Patterns: Lost Socks and Rebuilding Trust',
}

export const mindernetBlog: TBlogItem = {
  date: 'March 4th, 2025',
  slug: 'ghost-patterns',
  type: 'article',
  media: mindernet,
}
