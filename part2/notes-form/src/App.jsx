/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import {Note} from './components/Note' 

function App({ initialNotes = [] }) {
  const [notes, setNotes] = useState(initialNotes)
  const [newNote, setNewNote] = useState('')

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
    setNotes([
      ...notes,
      noteToAddToState
    ]);

    setNewNote("");
  }

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes.map(note => 
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
