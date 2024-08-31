import type { TPersonnelListItem } from '@types'

export const PersonnelList = ({
  delimiter = '\u2014', // an emdash (aka wide hyphen)
  list,
}: {
  delimiter?: string
  list: TPersonnelListItem[]
}) => {
  const personnelList = list.map((person) => (
    <li key={person.id}>
      {person.name}
      {person.role && (
        <span className='ml-1 font-title text-base font-thin uppercase tracking-wide text-gray-500'>
            {' '}
            {delimiter}
            {' '}
            {person.role}
        </span>
      )}
    </li>
  ))

  return (
    <ul>
      {personnelList}
    </ul>
  )
}
