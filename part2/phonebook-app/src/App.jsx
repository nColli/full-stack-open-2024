import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value)
    //console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('new contact');

    const personToAddToState = {
      name: newName
    };
    console.log(personToAddToState);

    setPersons(prevPersons => [
      ...prevPersons,
      personToAddToState
    ])

    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleChange}/>
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