import type { TPersonnel } from '@types'

export const Personnel = ({
  delimiter = '\u2014', // an emdash (aka wide hyphen)
  list,
}: {
  delimiter?: string
  list: TPersonnel[]
}) => {
  const personnelList = list.map((person) => (
    <li key={person.id}>
      {person.name}
      {person.role && (
        <span className='ml-1 font-title text-base font-thin uppercase tracking-wider'>
          {` ${delimiter} ${person.role}`}
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
