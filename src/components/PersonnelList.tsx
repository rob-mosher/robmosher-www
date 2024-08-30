import type { TPersonnelListItem } from '@types'

export const PersonnelList = ({
  delimiter = '-',
  list,
}: {
  delimiter?: string
  list: TPersonnelListItem[]
}) => {
  const personnelList = list.map((person, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={i}>
      {person.name}
      {person.role && ` ${delimiter} ${person.role}`}
    </li>
  ))

  return (
    <ul>
      {personnelList}
    </ul>
  )
}
