import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
    console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('new contact');

    const personToAddToState = {
      name: newName
    };

    console.log(personToAddToState);

    

    let personsNames = []

    persons.map((person) => personsNames.push(person.name))

    console.log("find: ", personsNames.indexOf(newName))

    if (personsNames.indexOf(newName) != -1) {

      alert(`${newName} is already added to phonebook`)

    } else {
      console.log("add: ",newName);
  
      setPersons(prevPersons => [
        ...prevPersons,
        personToAddToState
      ])
    }

    setNewName("");
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
          <p key={person.name}>{person.name}</p>  
        )}
      </div>
    </div>
  )
}

export default App