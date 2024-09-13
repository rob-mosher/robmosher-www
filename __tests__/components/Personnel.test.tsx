import { render, screen, within } from '@testing-library/react'
import { Personnel } from '../../src/components/Personnel'
import type { TPersonnel } from '../../src/types'

const mockPersonnel: TPersonnel[] = [
  { name: 'John Doe', role: 'Pianist' },
  { name: 'Jane Dough', role: 'Violinist' },
  { name: 'Mark Johnson' }, // No role
]

test('renders Personnel list with names and roles using the default delimiter', () => {
  render(<Personnel list={mockPersonnel} />)

  const listItems = screen.getAllByRole('listitem')

  expect(within(listItems[0]).getByText('John Doe')).toBeInTheDocument()
  expect(within(listItems[0]).getByText('— Pianist')).toBeInTheDocument()

  expect(within(listItems[1]).getByText('Jane Dough')).toBeInTheDocument()
  expect(within(listItems[1]).getByText('— Violinist')).toBeInTheDocument()

  expect(within(listItems[2]).getByText('Mark Johnson')).toBeInTheDocument()
  expect(within(listItems[2]).queryByText('—')).toBeNull() // No role, so no delimiter
})

test('renders Personnel list with a custom delimiter', () => {
  render(<Personnel list={mockPersonnel} delimiter='|' />)

  const listItems = screen.getAllByRole('listitem')

  expect(within(listItems[0]).getByText('John Doe')).toBeInTheDocument()
  expect(within(listItems[0]).getByText('| Pianist')).toBeInTheDocument()

  expect(within(listItems[1]).getByText('Jane Dough')).toBeInTheDocument()
  expect(within(listItems[1]).getByText('| Violinist')).toBeInTheDocument()

  expect(within(listItems[2]).getByText('Mark Johnson')).toBeInTheDocument()
  expect(within(listItems[2]).queryByText('|')).toBeNull() // No role, so no delimiter
})
