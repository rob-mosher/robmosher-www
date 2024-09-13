import { defaultPageTitle, getPageTitle } from '../../src/lib/metadata'

describe('getPageTitle', () => {
  const validTitle = 'Valid Title'

  test('returns formatted title when given a valid title', () => {
    expect(getPageTitle(validTitle)).toBe(`${validTitle} — ${defaultPageTitle}`)
  })

  test('throws an error if title is an empty string', () => {
    expect(() => getPageTitle('')).toThrow('Title cannot be empty.')
  })

  test('throws an error if title is just whitespace', () => {
    expect(() => getPageTitle('   ')).toThrow('Title cannot be empty.')
  })

  test('throws an error if title is undefined', () => {
    // @ts-expect-error Intentionally utilizing incorrect data
    expect(() => getPageTitle(undefined)).toThrow('Title cannot be empty.')
  })

  test('throws an error if title is null', () => {
    // @ts-expect-error Intentionally utilizing incorrect data
    expect(() => getPageTitle(null)).toThrow('Title cannot be empty.')
  })
})
