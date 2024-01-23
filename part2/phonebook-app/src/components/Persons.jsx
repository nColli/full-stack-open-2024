/* eslint-disable react/prop-types */

export const Persons = ({persons,nameFilter}) => {
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