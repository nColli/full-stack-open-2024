/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { Countries } from './components/Countries'

/*
const Countries = ({ countries }) => {
  console.log("search:",nameFilter);

  let personsFinded = []

  nameFilter = nameFilter.toLowerCase();
  persons.map((person) => {if(person.name.toLowerCase().includes(nameFilter)) { personsFinded.push(person) }})

  return (
    <div>
      {personsFinded.map(person =>
        <p key={person.name}>{person.name} {person.number}</p>  )}
    </div>
  )

  if (countries.length > 10) {
    return <p>Too many matches. specify another filter</p>
  }
}*/


function App() {
  const [countries, setCountries] = useState([])
  const [newCountrySearch, setNewCountrySearch] = useState('')

  useEffect(() => {
    console.log('use effect');
    
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        const { data } = response;
        setCountries(data)
      });

  }, [])

  const handleChange = (event) => {
    console.log(event.target.value);
    setNewCountrySearch(event.target.value)
  }

  return (
    <div>
      find countries
      <input type="text" onChange={handleChange} />
      <Countries countries={countries} nameCountry={newCountrySearch}/>
    </div>
  )
}

export default App
