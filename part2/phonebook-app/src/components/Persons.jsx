/* eslint-disable react/prop-types */
import personService from '../services/persons.js'

const Persons = ({persons,nameFilter,setPersons}) => {
    const handleDelete = event => {
        console.log('delete', event.target.value);

        const id = event.target.value
        const personToDelete = persons.find(person => person.id === id)

        if (window.confirm(`Delete ${personToDelete.name} ?`)) {
            personService
                .deleteNumber(personToDelete)
                .then(personDeleted => {
                    console.log('person deleted from server',personDeleted);

                    setPersons(persons.filter(person => person.id !== personDeleted.id))
                })
        }
        
    }

    if ((nameFilter === '')) {
      return (
        <div>
          {persons.map(person =>
            <p key={person.id}>{person.name} {person.number} <button onClick={handleDelete} value={person.id}>delete</button></p>
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

  export default Persons;