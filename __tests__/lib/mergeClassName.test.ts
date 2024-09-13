import { mergeClassName } from '../../src/lib/mergeClassName'

describe('mergeClassName', () => {
  it('should combine multiple classes into a single string', () => {
    const result = mergeClassName('p-4', 'm-2', 'bg-red-500')
    expect(result).toBe('p-4 m-2 bg-red-500')
  })

  it('should merge conflicting Tailwind classes using twMerge', () => {
    const result = mergeClassName('bg-red-500', 'bg-blue-500')
    expect(result).toBe('bg-blue-500') // twMerge should handle the conflict
  })

  it('should ignore falsy values and merge valid classes', () => {
    const result = mergeClassName('p-4', false, null, undefined, 'bg-red-500')
    expect(result).toBe('p-4 bg-red-500') // falsy values should be ignored
  })

  it('should handle conditional class values with clsx', () => {
    const result = mergeClassName('p-4', { 'bg-red-500': true, hidden: false })
    expect(result).toBe('p-4 bg-red-500') // Only the truthy class should be included
  })

  it('should return an empty string if no classes are provided', () => {
    const result = mergeClassName()
    expect(result).toBe('')
  })
})
