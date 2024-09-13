import {
  leftSingleQuote, leftDoubleQuote, rightSingleQuote, rightDoubleQuote,
} from '../../src/lib/unicodes'

describe('unicodes', () => {
  it('should correctly export the left single quote', () => {
    expect(leftSingleQuote).toBe('\u2018') // Left single quotation mark
  })

  it('should correctly export the left double quote', () => {
    expect(leftDoubleQuote).toBe('\u201C') // Left double quotation mark
  })

  it('should correctly export the right single quote', () => {
    expect(rightSingleQuote).toBe('\u2019') // Right single quotation mark
  })

  it('should correctly export the right double quote', () => {
    expect(rightDoubleQuote).toBe('\u201D') // Right double quotation mark
  })
})
