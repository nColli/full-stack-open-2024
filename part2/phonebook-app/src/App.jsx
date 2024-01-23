/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import personService from './services/persons.js'

const Filter = ({handleFilter}) => {
  return <p>filter shown with<input onChange={handleFilter}/></p>
}

const PersonForm = ({handleSubmit,handleChangeName,newName,handleChangeNumber,newNumber}) => {
  return (
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
  ) 
}

const Persons = ({persons,nameFilter}) => {
  if ((nameFilter === '')) {
    return (
      <div>
        {persons.map(person =>
          <p key={person.name}>{person.name} {person.number}</p>
        )}
      </div>
    )
  } else {
    console.log("search:",nameFilter);

    let personsFinded = []

    nameFilter = nameFilter.toLowerCase();
    persons.map((person) => {if(person.name.toLowerCase().includes(nameFilter)) { personsFinded.push(person) }})

    return (
      <div>
        {personsFinded.map(person =>
          <p key={person.id}>{person.name} {person.number}</p>  )}
      </div>
    )
  }
  
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  
  useEffect(() => {
    console.log("use effect");

    personService
      .getAll()
      .then(dataResponse => {
        setPersons(dataResponse)
      })
  }, [])

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

    const personToAdd = {
      name: newName,
      number: newNumber
    };

    console.log(personToAdd);

    let personsNames = []

    persons.map((person) => personsNames.push(person.name))

    console.log("find: ", personsNames.indexOf(newName))

    if (personsNames.indexOf(newName) != -1) {

      alert(`${newName} is already added to phonebook`)

    } else {
      console.log("add: ",newName,newNumber);
      
      personService
        .create(personToAdd)
        .then(dataResponse => {
          setPersons(persons.concat(dataResponse))
          console.log(dataResponse);
        })
    }

    setNewName("");
    setNewNumber("");
  }

  const handleFilter = (event) => {
    const name = event.target.value
    setNameFilter(name)
  }

  


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter}/>

      <h3>add a new</h3>
      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} newName={newName} handleChangeNumber={handleChangeNumber} newNumber={newNumber}/>

      <h3>Numbers</h3>
      <Persons persons={persons} nameFilter={nameFilter}/>
    </div>
  )
}

export default App
