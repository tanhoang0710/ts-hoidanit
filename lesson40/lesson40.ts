interface IPerson {
  readonly firstName: string;
  lastName: string
  address?: string
}

const getFullname = (person: {
  firstName: string,
  lastName: string
}) => {
  return `${person.firstName} ${person.lastName}`
}

const getFullname1 = (person: IPerson) => {
  return `${person.firstName} ${person.lastName}`
}

const person = {
  firstName: 'tan',
  lastName: 'hun',
}

console.log(getFullname(person))
