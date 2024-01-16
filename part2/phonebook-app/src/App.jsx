/* eslint-disable react/prop-types */
import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const handleChangeName = (event) => {
    setNewName(event.target.value)
    console.log(event.target.value);
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
    console.log(event.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('new contact');

    const personToAddToState = {
      name: newName,
      number: newNumber
    };

    console.log(personToAddToState);

    let personsNames = []

    persons.map((person) => personsNames.push(person.name))

    console.log("find: ", personsNames.indexOf(newName))

    if (personsNames.indexOf(newName) != -1) {

      alert(`${newName} is already added to phonebook`)

    } else {
      console.log("add: ",newName,newNumber);
  
      setPersons(prevPersons => [
        ...prevPersons,
        personToAddToState
      ])
    }

    setNewName("");
    setNewNumber("");
  }

  const handleFilter = (event) => {
    const name = event.target.value
    setNameFilter(name)
  }

  const Persons = ({persons,nameFilter}) => {
    if (!(nameFilter === '')) {
      console.log("search:",nameFilter);

      let personsFinded = []

      persons.map((person) => {if(person.name.includes(nameFilter)) { personsFinded.push(person) }})

      persons = personsFinded; //overwriting para tener solo un return
    }

    return (
      <div>
        {persons.map(person =>
          <p key={person.name}>{person.name} {person.number}</p>  )}
      </div>
    )
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <p>filter shown with<input onChange={handleFilter}/></p>

      <h2>add a new</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChangeName} value={newName}/>
        </div>
        <div>
          number: <input onChange={handleChangeNumber} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Persons persons={persons} nameFilter={nameFilter}></Persons>
    </div>
  )
}

export default App

/*

<div>
        {nameFilter===('') ? persons.map(person =>
          <p key={person.name}>{person.name} {person.number}</p>  
        ) : showPersonsFilter}

      </div>
*/