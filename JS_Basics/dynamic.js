let person = {
  name: 'John',
  age: 25,
}

// add the ssn property
person.ssn = '123-45-6789'

// change the name
person.name = 'John Doe'

// delete the age property
delete person.age

console.log(person)
