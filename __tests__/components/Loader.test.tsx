import { render, screen } from '@testing-library/react'
import { Loader } from '../../src/components/Loader'

test('renders the Loader component', () => {
  render(<Loader />)

  // Find the loader by its role
  const container = screen.getByRole('status')
  expect(container).toBeInTheDocument()

  // Check for the presence of expected class names
  expect(container).toHaveClass('flex size-full items-center justify-center bg-gray-300 shadow-inner')

  const spinningDiv = container.querySelector('div')
  expect(spinningDiv).toHaveClass('size-10 animate-spin rounded-full border-4 border-solid border-gray-300 border-t-white')
})
