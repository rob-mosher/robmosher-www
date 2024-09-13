import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import { Button } from '../../src/components/Button'

// Mock the Next.js `useRouter` hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

// Mock `window.scrollTo`
beforeAll(() => {
  window.scrollTo = jest.fn()
})

describe('Button', () => {
  const mockPush = jest.fn()

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders correctly with children', () => {
    render(<Button>Click Me</Button>)

    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  test('calls router.push when clicked and href is provided', () => {
    render(<Button href='/test'>Navigate</Button>)

    const button = screen.getByRole('button', { name: /navigate/i })

    fireEvent.click(button)

    // Ensure that router.push is called with the correct href
    expect(mockPush).toHaveBeenCalledWith('/test')

    // Ensure that window.scrollTo is called with (0, 0)
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0)
  })

  test('does not call router.push when href is not provided', () => {
    render(<Button>Navigate</Button>)

    const button = screen.getByRole('button', { name: /navigate/i })

    fireEvent.click(button)

    // Ensure that router.push is not called when href is not provided
    expect(mockPush).not.toHaveBeenCalled()

    // Ensure that window.scrollTo is not called
    expect(window.scrollTo).not.toHaveBeenCalled()
  })

  test('applies additional className', () => {
    // eslint-disable-next-line tailwindcss/no-custom-classname
    render(<Button className='extra-class-9ff19a66-e630-48eb-ab57-4ec47e0822f7'>Styled Button</Button>)

    const button = screen.getByRole('button', { name: /styled button/i })

    expect(button).toHaveClass('extra-class-9ff19a66-e630-48eb-ab57-4ec47e0822f7')
  })
})
