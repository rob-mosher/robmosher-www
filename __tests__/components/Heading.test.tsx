import { render, screen } from '@testing-library/react'
import { Heading } from '../../src/components/Heading'
import type { THeadingLevel } from '../../src/types/headingLevel'

test('renders the correct heading tag for h1-h6', () => {
  const headingLevels: THeadingLevel[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

  headingLevels.forEach((level) => {
    render(<Heading as={level}>{`Heading ${level}`}</Heading>)
    const headingElement = screen.getByText(`Heading ${level}`)
    expect(headingElement.tagName.toLowerCase()).toBe(level)
  })
})

test('applies correct class names for default props', () => {
  render(<Heading>Default Heading</Heading>)
  const headingElement = screen.getByText('Default Heading')

  // Check for default h2 class and uppercase
  expect(headingElement).toHaveClass('text-4xl uppercase')
})

test('applies custom class names and noShrink', () => {
  render(
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <Heading className='custom-class-1c7579c8-4cb1-42b4-afa2-d71ad729b68d' noShrink>
      Custom Heading
    </Heading>,
  )
  const headingElement = screen.getByText('Custom Heading')

  // Check for custom class and noShrink
  expect(headingElement).toHaveClass('shrink-0 custom-class-1c7579c8-4cb1-42b4-afa2-d71ad729b68d')
})

test('does not apply uppercase when uppercase is false', () => {
  render(<Heading uppercase={false}>Lowercase Heading</Heading>)
  const headingElement = screen.getByText('Lowercase Heading')

  // Check that uppercase class is not applied
  expect(headingElement).not.toHaveClass('uppercase')
})
