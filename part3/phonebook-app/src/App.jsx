/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import personService from './services/persons.js'
import Persons from './components/Persons.jsx'
import { PersonForm } from './components/PersonForm.jsx'
import { Filter } from './components/Filter.jsx'
import Notification from './components/Notification.jsx'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  
  useEffect(() => {
    console.log("use effect");

    personService
      .getAll()
      .then(dataResponse => {
        setPersons(dataResponse)
      })
  }, [])


  //handle fuctions
  //for filter persons
  const handleFilter = (event) => {
    const name = event.target.value
    setNameFilter(name)
  }

  //for add person
  const handleChangeName = (event) => {
    setNewName(event.target.value)
    //console.log(event.target.value);
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
    //console.log(event.target.value);
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

    if (personsNames.indexOf(newName) != -1 && window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const personWithId = {
        id: persons[personsNames.indexOf(newName)].id,
        name: newName,
        number: newNumber
      }

      console.log('person with id',personWithId);

      personService
        .updateNumber(personWithId)
        .then(dataResponse => {
          console.log(dataResponse);
          
          let personsCopy = [];

          persons.map((person) => {
            if (person.id === dataResponse.id) {
              person.number = dataResponse.number
            }

            personsCopy.push(person)
          })

          setPersons(personsCopy)

          console.log('copy',personsCopy);

          console.log(persons);
        })
    }

    if (personsNames.indexOf(newName) === -1) {
      console.log("add: ",newName,newNumber);

      personService
        .create(personToAdd)
        .then(dataResponse => {
          setPersons(persons.concat(dataResponse))
          console.log(dataResponse);

          setMessage(`Added ${newName}`)
          setError(false)
          setTimeout(() => {
            setMessage(null)
          }, 3000);
        })
    }

    setNewName("");
    setNewNumber("");
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} error={error}/>
      <Filter handleFilter={handleFilter}/>

      <h3>add a new</h3>
      <PersonForm handleSubmit={handleSubmit} handleChangeName={handleChangeName} newName={newName} handleChangeNumber={handleChangeNumber} newNumber={newNumber}/>

      <h3>Numbers</h3>
      <Persons persons={persons} nameFilter={nameFilter} setPersons={setPersons} setMessage={setMessage} setError={setError}/>
    </div>
  )
}

export default App
