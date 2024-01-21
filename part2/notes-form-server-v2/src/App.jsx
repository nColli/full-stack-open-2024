/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import {Note} from './components/Note' 
import axios from 'axios'



function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect');

    const eventHandler = response => {
      console.log('promise fulfilled');
      const data = response.data
      setNotes(data);
    }

    const promise = axios.get('http://localhost:3001/notes')
    promise.then(eventHandler)
  }

  useEffect(hook, [])
  console.log('render',notes.length,'notes');


  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('crear nota');
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };
    console.log(noteToAddToState);

    //setNotes(notes.concat(noteToAddToState))
    setNotes(prevNotes => [
      ...prevNotes,
      noteToAddToState
    ]);

    setNewNote("");
  }

  const handleShowAll = () => {
    setShowAll(() => !showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Show only important" : "Show all"}
      </button>
      <ol>
        {notes
          .filter((note) => {
            if (showAll === true) return true;
            return note.important === true 
          })
          .map(note => 
            <Note key={note.id} note={note} />
          )}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Submit note</button>
      </form>
    </div>
  )
}

export default App
