import { render, screen } from '@testing-library/react'
import { Quote } from '../../src/components/Quote'
import { leftDoubleQuote, rightDoubleQuote } from '../../src/lib'

test('renders the quotation with double quotes', () => {
  const mockQuote = 'This is a quote'
  render(<Quote quotation={mockQuote} />)

  const quoteElement = screen.getByText(`${leftDoubleQuote}${mockQuote}${rightDoubleQuote}`)
  expect(quoteElement).toBeInTheDocument()

  // Ensure the quote has the proper class for styling
  expect(quoteElement).toHaveClass('text-center font-title text-4xl uppercase')
})

test('renders the citation when provided', () => {
  const mockQuote = 'This is a quote'
  const mockCitation = 'John Doe'
  render(<Quote quotation={mockQuote} citation={mockCitation} />)

  // Check if the citation is rendered with the em dash
  const citationElement = screen.getByText(`—${mockCitation}`)
  expect(citationElement).toBeInTheDocument()

  // Ensure the citation has the proper class for styling
  expect(citationElement).toHaveClass('mt-4 text-xl')
})

test('does not render the citation when not provided', () => {
  const mockQuote = 'This is a quote'
  render(<Quote quotation={mockQuote} />)

  // Check that no citation is rendered
  const citationElement = screen.queryByText(/—/)
  expect(citationElement).toBeNull()
})
